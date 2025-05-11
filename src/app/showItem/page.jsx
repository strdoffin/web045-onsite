'use client';
import { useRouter } from 'next/navigation';
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 150 },
];

export default function ShowItemPage() {
  const router = useRouter();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">รายการสินค้า</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => router.push('/cart')}
        >
          ไปหน้าตะกร้า
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
