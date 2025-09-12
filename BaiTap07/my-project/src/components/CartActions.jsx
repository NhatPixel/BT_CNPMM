import { useState } from "react";
import { useCart } from "../CartContext";
import InputText from "./InputText";
import Button from "./Button";

export default function CartActions() {
  const { addItem, clearCart } = useCart();
  const [name, setName] = useState("");

  // Danh sách sản phẩm mẫu để test
const sampleProducts = [
  { name: "Sản phẩm A", quantity: 1 },
  { name: "Sản phẩm B", quantity: 2 },
  { name: "Sản phẩm C", quantity: 3 },
];

  const addSampleProducts = () => {
    sampleProducts.forEach((p) => addItem(p));
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex gap-2">
        <InputText
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên sản phẩm"
        />
        <Button
          onClick={() => {
            if (!name.trim()) return;
            addItem({ name });
            setName("");
          }}
        >
          Thêm
        </Button>
        <Button className="bg-red-500 hover:bg-red-600" onClick={clearCart}>
          Xóa hết
        </Button>
      </div>
      <Button className="bg-green-600 hover:bg-green-700" onClick={addSampleProducts}>
        Thêm sản phẩm mẫu
      </Button>
    </div>
  );
}
