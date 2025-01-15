import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { Routes, Route } from 'react-router-dom';

export const Cart = () => {
  return (
    <div>
      <div className="cart_container">
        <div className="cart_left">
          <div className="cart_header">
            <h1>Shopping Cart</h1>
            <h1>Items: (0)</h1>
            <FiTrash2 className='delete_cart' />
          </div>
          <div className="cart_header">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
        </div>
        <div className="cart_right"></div>
      </div>
    </div>
  )
}
