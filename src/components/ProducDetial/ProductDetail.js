import React from 'react'
import './PeoductDetail.css'
import Grid from '@mui/material/Grid'; 
import Box from '@mui/material/Box';

const ProductDetail = ({data}) => {
  return (

    <div className="container">
      <div className='grid__container'>
        <div className='grid__item'>
          <img src={data.producto} alt="img" />
          </div>
      </div>

      <div className='grid__item'>
          <p>{`Mara: ${data.marca}`}</p>
          <p>{`Modelo: ${data.modelo}`}</p>
          <p>{`Descripción: ${data.descripcion}`}</p>
          <p>{`Precio: $${data.precio}`}</p>
          </div>
      </div>

  )
}

export default ProductDetail