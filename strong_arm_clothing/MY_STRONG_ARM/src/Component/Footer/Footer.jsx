import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/Img/logo_2.png';




export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_name">
          <img src={logo} alt="Logo" />
            <h2>MyStrongArm</h2>
          </div>
          
          <div className="footer_contact">
            <h4>Contact</h4>
            <p><strong>Address:</strong> 34 Kempton Park, 1678 Street, 32 South Africa</p>
            <p><strong>Phone:</strong> 011 2323 567 / 0790765431</p>
            <p><strong>Hours:</strong> 10:00am - 17:00pm (Mon - Fri)</p>
            <div className="follow">
              <h4>Follow us</h4>
              <div className="icon">
                <FaFacebook className="footer_icon" />
                <BsInstagram className="footer_icon" />
                <BsTwitterX className="footer_icon" />
              </div>
            </div>
          </div>
          
          <div className="footer_about">
            <h3>About</h3>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
          </div>
          
          <div className="footer_account">
            <h3>My Account</h3>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
          </div>
        </div>

        <div className="copy">
          <p>Copyright sabimaru devo All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
