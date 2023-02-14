import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProducDetial/ProductDetail';
import { mockedProducts } from '../../utils/products';
import { request } from '../../utils/request';



const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const {id} = useParams();
 
  useEffect(() => {
 
   
    request(mockedProducts.find(prod => prod.id == id)).then((result) => setProduct(result));
      
    
  }, []);

 /*
 useEffect(()=>{
    let result;
    const request = ()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
         
          result = mockedProducts.find(prod => prod.id == id);
          console.log(result)
          resolve(result)
        }, 1000);
      })
    }
  
    request().then(() => setProduct(result));
  },[])
 */
  return (
    <div>
     <ProductDetail data={product}/>
    </div>
  )
}

export default ItemDetailContainer