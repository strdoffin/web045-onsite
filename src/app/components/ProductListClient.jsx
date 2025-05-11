'use client';
import { useCart } from "../context/CardContext";
import { useRouter } from "next/navigation";
import AddToCartButton from "./AddToCartButton";
export default function ProductListClient({ products }) {
    const { addToCart } = useCart();
    const router = useRouter();

    return (
        <div className="p-6 pt-32">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {products.map((p) => (
                    <div
                        key={p.product_id}
                        className="border p-4 rounded-xl shadow-md"
                    >
                        <img
                            src={p.image}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover mb-4"
                            alt={p.name}
                        />
                        <h2 className="text-lg font-bold">{p.name}</h2>
                        <p>{p.description}</p>
                        <p className="text-green-500 font-semibold mt-2">
                            {p.price} บาท
                        </p>
                        <button
                            onClick={() => {
                                router.push("cart");
                                addToCart({
                                    id: p.product_id,
                                    name: p.name,
                                    price: p.price,
                                    image: p.image,
                                });
                            }}
                            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            เพิ่มลงตะกร้า
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
