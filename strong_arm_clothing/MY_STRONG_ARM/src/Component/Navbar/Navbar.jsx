import React from 'react';
import { BiCart, BiUser } from 'react-icons/bi';
import './Navbar.css';
import { Link } from 'react-router-dom'; // this will use the link

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>MyStrongArm</h2>
        </div>
        <div className="link">
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
            <li>Use App</li>
          </ul>
        </div>
        <div className="nav_icon_wrapper">
          <Link to='/cart'>
          <div className="nav_cart">
            <BiCart className="Nav_icon" />
            <p className="nav_cart_amount">0</p>
          </div>
          </Link>
          <BiUser className="Nav_icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
