import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'; // Ensure this path is correct
import Homepage from './Page/Homepage/Homepage';
import ShopContextProvider from "./Component/ShopContext/ShopContext";
import ProductDetails from "./Component/ProductList/ProductList";
import { Cart } from './Component/Cart/Cart';
import { Footer } from './Component/Footer/Footer';
import Contact from './Page/Contact/Contact';


const App = () => {
  return (
    <ShopContextProvider>
      {/* Add the Navbar component here */}
      <Navbar />
      
      {/* You can add Routes to navigate between different pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/Contact" element={<Contact />}   />
      </Routes>
      <Footer />
    </ShopContextProvider>
  );
};

export default App;
