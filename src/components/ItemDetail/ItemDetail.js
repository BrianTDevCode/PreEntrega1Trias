import * as React from "react";
import Button from "@mui/material/Button";
import "./ItemDetail.css";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Spinner from "../Spinner/spinner";


const ItemDetail = ({ data }) => {
 
  
  const {addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (data.quantity === undefined) {
    data.quantity = quantity;
  }


  const handleDecrementQuantity = ()=>{
    
    if (data.quantity > 1) {
     
      data.quantity--;
  
      setQuantity(prevConnt => prevConnt -1);
     
      
    }
    
  }

  const handleIncrementQuantity = () =>{
   
  
    if (data.quantity < parseInt(data.stock)) {
     
      data.quantity++;
      setQuantity(prevConnt => prevConnt +1);
      
    
  }

}


  return (

    <>
    
  <div className="container__title">
      <h1 className="title">Detalle del Producto</h1>
    </div>

    { data.hasOwnProperty('img') === false || data.img.complete === false  ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (

    <div className="container">
      <div className="detail__container">
        <div className="detail__container--img">
          <img className="detail__img" src={data.img} alt="img" />
        </div>
     

      

      <div className="detail__container--data">
        <p className="detail__data"><strong>Marca: </strong>{`${data.brand}`}</p>
        <p className="detail__data"><strong>Modelo: </strong>{`${data.model}`}</p>
        {data.description !== undefined? (
        <p className="detail__data"><strong>Descripción: </strong>{`${data.description.replaceAll('-' , '\n')}`}</p>
        
        
        )  : <p>aaa</p>
      }
        <p className="detail__data"><strong>Precio: U$ </strong>{`${data.price}`}</p>
        <p className="detail__data"><strong>Stock: </strong>{`${data.stock}`}</p>

        {data.stock > 0 ? (
          <>
            <div className="detail__quantity--container">
              <strong>Cantidad:</strong>
              <div className="quanty__selector--selector">
                <Button
                  className="selector__button"
                  variant="outlined"
                  onClick={handleDecrementQuantity}
                > - </Button>
                <div className="selector__data">{quantity}</div>
                <Button
                  className="selector__button"
                  variant="outlined"
                  onClick={handleIncrementQuantity}
                > +</Button>
              </div>
            


            <Button className="detail__btn" onClick={() => addItem(data)} variant="contained">
              Agregar al carrito
            </Button>
            </div>
          </>
        ) : (
          <p className="detail__message">
            Lo sentimos, no hay stock disponible para este producto
          </p>
        )}

        <ToastContainer />
      </div>
      </div>
    </div>
      )}
    </>
  );
  
};


export default ItemDetail;
