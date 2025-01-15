import React from 'react';
import Hero from "../../Component/Hero/Hero";
import ProductList from "../../Component/ProductList/ProductList";





const Homepage = () => {
  return (
    <div>
      <Hero />  {/* Render the Hero section */}
      <ProductList />
    </div>
  );
};

export default Homepage;
