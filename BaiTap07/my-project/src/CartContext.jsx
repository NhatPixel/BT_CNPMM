import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    // Kiểm tra nếu sản phẩm đã tồn tại thì tăng số lượng
    const existingIndex = cartItems.findIndex((i) => i.name === item.name);
    if (existingIndex >= 0) {
      updateQuantity(existingIndex, cartItems[existingIndex].quantity + (item.quantity || 1));
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: item.quantity || 1 }]);
    }
  };

  const updateItem = (index, newItem) =>
    setCartItems((prev) => prev.map((item, i) => (i === index ? newItem : item)));

  const removeItem = (index) =>
    setCartItems((prev) => prev.filter((_, i) => i !== index));

  const clearCart = () => setCartItems([]);

  const updateQuantity = (index, quantity) => {
    if (quantity < 1) return; // Không cho số lượng < 1
    setCartItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, updateItem, removeItem, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
