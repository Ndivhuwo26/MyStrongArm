import React, { createContext, useState } from "react";
import productsData from "../../data"; // Make sure the path is correct

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
