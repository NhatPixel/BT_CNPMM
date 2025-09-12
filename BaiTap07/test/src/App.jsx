import { CartProvider, CartActions, Cart } from "@nhat1202/cart-library";

function App() {
  return (
    <CartProvider>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Giỏ hàng</h1>
        <CartActions />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
