import React, { useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import CartDetails from './CartDetails';
import { ShopContext } from '../ShopContext/ShopContext';
import './Cart.css'

export const Cart = () => {
  const { cart, clearCart, total, itemAmount } = useContext(ShopContext);

  return (
    <div className="cart_container">
      <div className="cart_left">
        {/* Header */}
        <div className="cart_header">
          <h1>Shopping Cart</h1>
          <h1>Items: ({itemAmount})</h1>
          <FiTrash2 onClick={clearCart} className="delete_cart" />
        </div>

        {/* Table Header */}
        <div className="cart_header">
          <span>Product Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        {/* Cart Details */}
        <div className="cart_detail">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartDetails item={item} key={item.id} />
            ))
          ) : (
            <p>Oooops! Your Cart is empty</p>
          )}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="cart_right">
        <h2>Cart Summary</h2>
        <div className="cart_summary">
          <div className="summary_item">
            <span>Items</span>
            <span>{itemAmount}</span>
          </div>
          <div className="summary_item">
            <span>Subtotal</span>
            <span>R{isNaN(total) ? 0 : total.toFixed(2)}</span>
          </div>
          <div className="summary_item">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="summary_item">
            <span>Promotional Code</span>
            <input type="text" placeholder="Enter your code" />
            <button className="apply_btn">Apply</button>
          </div>
          <div className="summary_item_total_cost">
            <span>Total Cost</span>
            <span>R{isNaN(total) ? 0 : total.toFixed(2)}</span>
          </div>
          <button className="checkout_btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};
