import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Grid, Button, Paper, Box } from "@mui/material";



import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  
}));




const Cart = () => {


  const { items, cleanCart, removeItem, calcPrice, calcProds } = useContext(CartContext);
  
  return (
    <>
    <div className="container__title">
      <h1 className="title">Carrito</h1>
    </div>
    <div className="container">
      {items.length > 0 ? (
        <Box className="box" sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{width:"90%", margin: "0 auto", marginBottom:10}}>
            <Grid item xs={10}>
              <Item className="grid__item">
                <h2>Carrito de compras</h2>
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item className="grid__item">
                <Button variant="contained" onClick={() => cleanCart()}>
                  Vaciar carrito
                </Button>
              </Item>
            </Grid>

            {items.map((item) => (
              <React.Fragment key={item.id}>
                <Grid item xs={3} >
                  <Item className="grid__item">
                    <p>{`${item.brand} ${item.model}`}</p>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item className="grid__item">
                    <p>
                      Precio: <strong>{` U$ ${item.price}`}</strong>
                    </p>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item className="grid__item">
                  <p>
                      Cantidad: <strong>{`${item.quantity}`}</strong>
                    </p>
                  </Item>
                </Grid>

                <Grid item xs={3}>
                  <Item className="grid__item">
                    <Button variant="contained" color="error" onClick={() => removeItem(item.id, items)}>
                      Eliminar
                    </Button>
                  </Item>
                </Grid>
              </React.Fragment>
            ))}


            <Grid item xs={10}>
              <Item className="grid__item">
                <p>{'Total de productos:'}  <strong>{calcProds()}</strong> {' | Total a pagar U$:'} <strong>{calcPrice()}</strong> </p>
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item className="grid__item">
              <Link to={`/checkout`}>
                <Button variant="contained" color="success">
                  Ir al checkout
                </Button>
                </Link>
              </Item>
            </Grid>

          </Grid>
        </Box>
      ) : (
        <div className="emptyCart__container">
          <h3 className="emptyCart__text">No hay productos en el carrito</h3>
          <div className="emptyCart__button">
            <Link to={`/`}>
              <Button className="emptyCart__button" variant="contained">
                ir a comprar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;
