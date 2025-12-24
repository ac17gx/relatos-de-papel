import React, { useEffect, useState } from "react";
import { BookContext } from "./BookContext";
import { getItem, saveItem, removeItem } from "../helper/localStorageHelper";

export const BookProvider = ({ children }) => {
  const CART_KEY = "cartItems";
  const [cart, setCart] = useState(getItem(CART_KEY) || []);

  useEffect(() => {
    saveItem(CART_KEY, cart);
  }, [cart]);

  const addItem = (item) => setCart((prev) => [...prev, item]);

  const removeCartItem = (index) =>
    setCart((prev) => prev.filter((_, i) => i !== index));

  const clearCart = () => {
    removeItem(CART_KEY);
    setCart([]);
  };

  const getTotal = () => cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <BookContext.Provider
      value={{
        cart,
        addItem,
        removeCartItem,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
