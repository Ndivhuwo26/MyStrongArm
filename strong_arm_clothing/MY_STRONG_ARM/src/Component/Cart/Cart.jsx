import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { Routes, Route } from 'react-router-dom';
import CartDetails from './CartDetails';


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
          <div className="cart_detail">
            <CartDetails />
          </div>
        </div>
        <div className="cart_right">
          <h2>Cart Summary</h2>
          <div className="cart_summary">
            <div className="summary_item">
              <span>Items</span>
              <span>0</span>
            </div>
            <div className="summary_item">
              <span>Subtotal</span>
              <span>0</span>
            </div>
            <div className="summary_item">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <div className="summary_item">
              <span>Promotional Code</span>
              <input type="text" placeholder='Enter your code' />
              <button className='apply_btn'>Apply</button>
            </div>
            <div className="summary_item_total_cost">
              <span>Total Cost</span>
              <span>0</span>
            </div>
            <button className="checkout_btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
