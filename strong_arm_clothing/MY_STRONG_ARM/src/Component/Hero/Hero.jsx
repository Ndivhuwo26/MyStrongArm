import React from 'react';
import hr3 from "../../assets/Img/hr3.jpg";
import './Hero.css';
import { BiSupport } from 'react-icons/bi';
import { FaShippingFast, FaLock } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_top">
        <div className="hero_left">
          <h2>Take your wardrobe to the next level</h2>
          <h1>At Affordable Prices Enhance your fashion game</h1>
          <p>Shop the latest and unique trends just for you</p>
        </div>
        <div className="hero_right">
          <img src={hr3} alt="hero_image" />
        </div>
      </div>

      <div className="hero_bottom">
        <div className="hero_content">
          <div className="info-icon">
            <FaShippingFast className="hero_cc-icon" />
          </div>
          <div className="detail">
            <h3>Free Delivery</h3>
            <p>Free Delivery on all orders</p>
          </div>
        </div>

        <div className="hero_content">
          <div className="info-icon">
            <BiSupport className="hero_cc-icon" />
          </div>
          <div className="detail">
            <h3>24/7 Support</h3>
            <p>Full customer support, available anytime</p>
          </div>
        </div>

        <div className="hero_content">
          <div className="info-icon">
            <FaLock className="hero_cc-icon" />
          </div>
          <div className="detail">
            <h3>Secure Payment</h3>
            <p>Your payment is secure with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
