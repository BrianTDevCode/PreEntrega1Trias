import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({message}) => {
  return (
    <div className='container'>
      <strong>{message}</strong>
      </div>
  )
}

export default ItemListContainer