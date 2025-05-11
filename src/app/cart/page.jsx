// src/app/cart/page.jsx
'use client';

import { useCart } from "../context/CardContext";
export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h1>
      {cartItems.length === 0 ? (
        <p>ไม่มีสินค้าในตะกร้า</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="border-b py-2 flex justify-between items-center">
            <div>
              <h2>{item.name}</h2>
              <p>ราคา: {item.price} บาท</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 border px-2"
              />
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              ลบ
            </button>
          </div>
        ))
      )}
      <div className="mt-4 font-bold">
        ราคารวม: {total} บาท
      </div>
    </div>
  );
}
