import React, { createContext, useState, useEffect } from "react";
import productsData from "../../data"; // Ensure the path is correct

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  // Cart State
  const [cart, setCart] = useState([]);

  // Amount State
  const [itemAmount, setItemAmount] = useState(0);

  // Total Amount State
  const [total, setTotal] = useState(0);

  // Gets the total amount
  useEffect(() => {
    const total = cart.reduce((accumulator, currentitem) => {
      const priceAsNumber = parseFloat(currentitem.price);
      if (isNaN(priceAsNumber)) {
        return accumulator;
      }
      return accumulator + priceAsNumber * currentitem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // Adding to Cart
  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // If item exists in cart, increment the amount
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If item does not exist in cart, add it
      const newItem = { ...product, amount: 1 };
      setCart([...cart, newItem]);
    }
  };

  // Update the amount of items
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce(
        (accumulator, currentItem) => accumulator + currentItem.amount,
        0
      );
      setItemAmount(amount);
    }
  }, [cart]);

  // Remove items from the cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase the number of items
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      addToCart(cartItem, id);
    }
  };

  // Decrease the number of items in cart
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.amount > 1) {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        );
        setCart(updatedCart);
      } else {
        removeFromCart(id);
      }
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        total,
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
