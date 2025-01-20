import React, { useContext, useEffect } from 'react';
import { BiCart, BiUser } from 'react-icons/bi';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../ShopContext/ShopContext';

export const Navbar = () => {
  const { itemAmount } = useContext(ShopContext);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.toggle('active', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">
            <h2>MyStrongArm</h2>
          </Link>
        </div>
        <div className="link">
          <ul>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/NewArrivals">New Arrivals</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav_icon_wrapper">
          <Link to="/cart">
            <div className="nav_cart">
              <BiCart className="Nav_icon" />
              <p className="nav_cart_amount">{itemAmount}</p>
            </div>
          </Link>
          <BiUser className="Nav_icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
