import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { mockedProducts } from '../../utils/products'
import { request } from '../../utils/request'
import ProductCard from '../ProductCard/ProductCard'
import {Link, useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  let {id} = useParams();
  console.log(id)
  
  useEffect(() => {
    if (id === undefined) {
    request(mockedProducts).then((result) => setProducts(result));
      
    }
    else{
    request(mockedProducts.filter(p=>p.category.toLowerCase().replace(/ /g,'') === id.toLowerCase().replace(/ /g,''))).then((result) => setProducts(result));
      
    }
  }, [id]);
  console.log(products);
 
  return <div className='container'>

    {products.map(prod=>{
      return(
        <Link style={{ textDecoration: 'none' }} key={prod.id} to={`/item/${prod.id}`}>
          <ProductCard key={prod.id} data={prod}/>
          </Link>
      )
    })}

  </div>
}

export default ItemListContainer