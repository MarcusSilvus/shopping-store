import React from 'react'
import './ProductCard.css'

function ProductCard() {
  return (
    <div className='product-card'>
      <h3>Title</h3>
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="men"></img>
      <h4>$</h4>
      <p>Product Description:</p>
    </div>
  )
}

export default ProductCard