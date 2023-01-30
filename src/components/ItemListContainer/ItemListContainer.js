import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container'>
      <strong>{greeting}</strong>
      </div>
  )
}

export default ItemListContainer