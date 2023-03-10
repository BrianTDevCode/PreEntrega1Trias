import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Spinner from "../Spinner/spinner";

import "./ItemListContainer.css";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { db } from "../../firebase/firebaseConfig";
import {collection,query,where,getDocs} from "firebase/firestore";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
  

      const getSomeProducts = async () => {
        const q = query(collection(db, "products"), where("price", ">", 200), where("price", "<", 800));
        const querySnapshot = await getDocs(q);

        const docs = [];
         querySnapshot.forEach((doc) => {
           docs.push({ ...doc.data(), id: doc.id });
         });
       

        setProducts(docs);

      
      };

      getSomeProducts();
    } else {

     

     
     
      const getProductsById = async () => {
        const q = query(collection(db, "products"), where("category", "==", id));
        const querySnapshot = await getDocs(q);

        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        
        setProducts(docs);
       
      };

      getProductsById();
    }
  }, [id]);

  return (

    <>
    <div className="container__title">
      {id === undefined? (
      <h1 className="title">Productos Populares</h1>
      ):(
      <h1 className="title">{id}</h1>
      )
    } 
    </div>

    {products.length === 0 ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (

    <div className="grid__container">
      <Box sx={{ flexGrow: 1 }}>
      <Grid sx=
      {{overflowY: "scroll"}} container spacing={2}>
      {products.map((prod) => {
            return (
              <React.Fragment key={prod.id}>
              <Grid item xs={4} >
                <Item >
                  <Link
                    style={{ textDecoration: "none" }}
                    key={prod.id}
                    to={`/item/${prod.id}`}
                  >
                    <ItemList key={prod.id} data={prod} />
                  </Link>
                </Item>
              </Grid>
              </React.Fragment>
            );
            
          })}
     
      </Grid>
    </Box>
    </div>
      )}
    </>
  );
};

export default ItemListContainer;
