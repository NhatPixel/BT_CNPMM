
import { useCart } from "../CartContext";
import Modal from "./Modal";
import Button from "./Button";

export default function Cart() {
  const { cartItems, removeItem, updateQuantity } = useCart();


  if (cartItems.length === 0) return <p>Giỏ hàng trống</p>;

  return (
    <div className="space-y-2">
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border p-2 rounded shadow"
        >
          <div>
            <span className="font-medium">{item.name}</span>
            <div className="flex items-center gap-2 mt-1">
              <Button
                onClick={() => updateQuantity(index, item.quantity - 1)}
                className="bg-gray-300 text-black hover:bg-gray-400"
              >
                -
              </Button>
              <span>{item.quantity}</span>
              <Button
                onClick={() => updateQuantity(index, item.quantity + 1)}
                className="bg-gray-300 text-black hover:bg-gray-400"
              >
                +
              </Button>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={() => removeItem(index)}
            >
              Xóa
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
