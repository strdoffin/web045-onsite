// src/app/components/ProductCard.jsx
'use client';
import { useCart } from "../context/CardContext";
export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    // เก็บสินค้าใน localStorage หลังจากกดเพิ่ม
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    currentCart.push(product);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>Price: {product.price} บาท</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        เพิ่มลงตะกร้า
      </button>
    </div>
  );
}
