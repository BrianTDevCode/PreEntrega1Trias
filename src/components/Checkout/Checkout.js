import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

import { CartContext } from "../../context/CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

import { db } from "../../firebase/firebaseConfig";
import { collection,writeBatch, addDoc,doc, increment } from "firebase/firestore";
import MessageSuccess from "../MessageSuccess/MessageSuccess";



const Checkout = () => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let data = [];
  const { setItems,items} = useContext(CartContext);
  const [purchaseID, setPurchaseID] = useState("");

  const validate = (values) => {
    const errors = {};
    if (values.name.length < 5) {
      errors.name = "El nombre debe contener al menos 5 caracteres";
    }
    if (values.lastName.length < 5) {
      errors.lastName = "El apellido debe contener al menos 5 caracteres";
    }
    if (values.tel.length < 8 || isNaN(values.tel)) {
      errors.tel = "El teléfono debe contener al menos 8 números";
    }

    if (values.email.match(emailRegex) == null) {
      errors.tel = "Ingrese un email válido";
    }

    if (values.email !== values.email2) {
      errors.tel = "Los emails nos coinciden";
    }

    return errors;
  };

  const OnSubmit = (values) => {
    data.cart = [];
    delete values.email2;
    data.user = values;

    const today = new Date();
    const now = today.toLocaleString();


    data.user.purchaseDate = now;

    items.map((item) => {
      let obj = {
        id: item.id,
        brand: item.brand,
        model: item.model,
        quantity: item.quantity,
      };

     return data.cart.push(obj);
    });

    
    Swal.fire({
      title: "Confirmar compra",
      text: "Desea confirmar la compra?",
      icon: "question",
      confirmButtonText: "Si",
      confirmButtonColor: "#2b52e0",
      showDenyButton: true,
      denyButtonText: "No",
    }).then((resp) => {
      
      if (resp.isConfirmed) {
        const add = async () => {
          const docRef = await addDoc(collection(db, "purchases"), {
            user: data.user,
            cart: data.cart,
          });
          console.log("Document written with ID: ", docRef.id);
          setPurchaseID(docRef.id);
        };
        add();

        const updateStock = async () => {
          const batch = writeBatch(db);

          data.cart.map((prod) => {
            
            const sfRef = doc(db, "products", prod.id.toString());
            batch.update(sfRef, "stock", increment(-prod.quantity));
        
        });

          await batch.commit();
          data = [];
          setItems(data);
        
        };
        updateStock();
        
      }
      
    });
  };

  return (
    <>

<div className="container__title">
      <h1 className="title">Checkout</h1>
    </div>

    <div className="container">
      {items.length > 0  ? (
        <div className="checkout__container">
          <h3>Datos del usuario</h3>

          <Formik
            initialValues={{
              name: "",
              lastName: "",
              tel: "",
              email: "",
              email2: ""
            }}
            validate={validate}
            onSubmit={OnSubmit}
          >
            <Form className="checkout__form">
              <Field placeholder="Nombre" type="text" name="name" />

              <Field placeholder="Apellido" type="text" name="lastName" />

              <Field placeholder="Teléfono" type="text" name="tel" />
              <Field placeholder="Email" type="email" name="email" />
              <Field placeholder="Email" type="email" name="email2" />

              <Button
                type="submit"
                style={{ margin: "30px 0px" }}
                variant="contained"
                color="success"
              >
                Confirmar compra
              </Button>

              <ErrorMessage className="form__error" component="p" name="name" />
              <ErrorMessage className="form__error" component="p" name="lastName" />
              <ErrorMessage className="form__error" component="p" name="tel" />
              <ErrorMessage className="form__error" component="p" name="email" />
              <ErrorMessage className="form__error" component="p" name="email2" />
            </Form>
          </Formik>
          
        </div>
      ) : (
           
        <div className="emptyCart__container">
          {purchaseID == ''?
          (
            <>
            <h3 className="emptyCart__text">No hay productos en el carrito</h3>
            <div className="emptyCart__button">
              <Link to={`/`}>
                <Button className="emptyCart__button" variant="contained">
                  ir a comprar
                </Button>
              </Link>
            </div>
            </>
          ) : (
            <div className="message__container">
              <h3 className="message__title">Gracias por su compra</h3>
          <MessageSuccess  purchaseID={purchaseID} />
          </div>
          )
          }
         
        </div>
      )}
    </div>
    </>
  );
};

export default Checkout;
