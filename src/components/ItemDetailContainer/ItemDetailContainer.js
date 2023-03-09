import { documentId } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ItemDetail from '../ItemDetail/ItemDetail';

import { db } from "../../firebase/firebaseConfig";
import {collection,query,where,getDocs} from "firebase/firestore";



const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const {id} = useParams();
 
  useEffect(() => {
 
   
    const getProductsById = async () => {
      const q = query(collection(db, "products"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);

      let prod = {};
      querySnapshot.forEach((doc) => {
        prod = { ...doc.data(), id: doc.id };
      });
      setProduct(prod);

     
    };

    getProductsById();
      
    ;
    
  }, [id]);


  

  return (
    <div>
     <ItemDetail data={product}/>
    </div>
  )
}

export default ItemDetailContainer