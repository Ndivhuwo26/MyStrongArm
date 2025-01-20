import React, { useEffect } from 'react';
import './Product.css'

const Product = () => {
  useEffect(() => {
    // Select the main image and small images
    const MainImg = document.getElementById("MainImg");
    const smallimg = document.getElementsByClassName("small-pic");

    // Function to update the main image
    const updateMainImg = (index) => {
      MainImg.src = smallimg[index].src;
    };

    // Adding the onClick event listeners for each small image
    if (smallimg[0]) smallimg[0].onclick = () => updateMainImg(0);
    if (smallimg[1]) smallimg[1].onclick = () => updateMainImg(1);
    if (smallimg[2]) smallimg[2].onclick = () => updateMainImg(2);
    if (smallimg[3]) smallimg[3].onclick = () => updateMainImg(3);

    // Cleanup on component unmount
    return () => {
      // Remove event listeners to avoid memory leaks
      if (smallimg[0]) smallimg[0].onclick = null;
      if (smallimg[1]) smallimg[1].onclick = null;
      if (smallimg[2]) smallimg[2].onclick = null;
      if (smallimg[3]) smallimg[3].onclick = null;
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src="Images/products/sneakers/adidas low cut black.jpg" width="100%" id="MainImg" alt=""/>
          <div className="small-img-group">
            <div className="small-img-col">
              <img src="Images/products/sneakers/adidas low cut sport lime n pink n white.jpg" width="100%" className="small-pic" alt=""/>
            </div>
            <div className="small-img-col">
              <img src="Images/products/sneakers/adidas low cut sport white.jpg" width="100%" className="small-pic" alt=""/>
            </div>
            <div className="small-img-col">
              <img src="Images/products/sneakers/adidas low cut black.jpg" width="100%" className="small-pic" alt=""/>
            </div>
            <div className="small-img-col">
              <img src="Images/products/sneakers/adidas low cut sport.jpg" width="100%" className="small-pic" alt=""/>
            </div>
          </div> 
        </div>

        <div className="single-pro-details">
          <h6>Home/shoes</h6>
          <h4>Men's Fashion shoes</h4>
          <h2>R2000</h2>
          <select>
            <option>Select Size UK</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Add To Cart</button>
          <h4>Product Details</h4>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium aspernatur distinctio esse accusamus blanditiis nam, corporis neque officia ab molestias et! Quos beatae enim repellendus, eius maiores deleniti aperiam!</span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>#Feature Product</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src="Images/products/sneakers/adidas low cut black.jpg" alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Low Cut Black</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>R2,500</h4>
            </div>
            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src="Images/products/sneakers/adidas low cut sport lime n pink n white.jpg" alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Low Cut Sport Lime</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>R3,000</h4>
            </div>
            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src="Images/products/sneakers/adidas low cut sport.jpg" alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Low Cut Sport</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>R2,800</h4>
            </div>
            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
          </div>

          <div className="pro">
            <img src="Images/products/sneakers/GUCCI LOW CUT.jpg" alt="" />
            <div className="des">
              <span>GUCCI</span>
              <h5>Low Cut</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>R5,000</h4>
            </div>
            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
        </div>
      </section>

      <section id="newsletters" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up for newsletters</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers!!</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="Images/logo_2.png" alt="" />
          <h4>contact</h4>
          <p><strong>Address:</strong> 34 kmpton park 1678 street 32 South Africa</p>
          <p><strong>Phone:</strong> 011 2323 567/ 0790765431</p>
          <p><strong>Hours:</strong> 10:00am - 17:00pm mon - fri</p>
          <div className="follow">
            <h4>follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h3>About</h3>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="col">
          <h3>My Account</h3>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App store or Google Play</p>
          <div className="row">
            <img src="Images/pay/app.jpg" alt="" />
            <img src="Images/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="Images/pay/pay.png" alt="" />
        </div>

        <div className="Copyright">
          <p>All rights reserved 2024, sabimaru devo- Ecommere store</p>
        </div>
      </footer>
    </div>
  );
}

export default Product;
