import React, { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext"; // import from shopcontext
import './ProductList.css' // imports css
import { Link } from 'react-router-dom'; // this will use the link



const ProductList = () => {
  const { products } = useContext(ShopContext);

  return (
    <div>
      <div className="ProductList">
        <h2>Next Level Fashion Statement</h2>
        <div className="product_grid">
          {products.map((product) => {
            // Destructure the properties of each product
            const { id, brand, name, image, price, rating, category, description } = product;
            return (
              <div className="product_card" key={id}>
                <Link to={'/product/${product.id}'} key={product.id}>
                <img src={image} alt={name}  className="product-img"/>
                <div className="product_info">
                  <h4>{name}</h4> {/* Corrected this line to use 'name' */}
                  <p> {price}</p>
                </div>
                </Link>
                <button className="add-to-cart">Add To Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
