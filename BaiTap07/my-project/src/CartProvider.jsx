import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => setCartItems((prev) => [...prev, item]);

  const updateItem = (index, newItem) => {
    setCartItems((prev) => prev.map((item, i) => (i === index ? newItem : item)));
  };

  const removeItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, updateItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
