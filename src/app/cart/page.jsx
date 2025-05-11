"use client";

import { useCart } from "../context/CardContext";
import Link from "next/link";
import { Trash2, MinusCircle, PlusCircle } from "lucide-react";
import { RedirectToSignIn, useUser } from "@clerk/nextjs";

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <RedirectToSignIn />;
    }

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
                ตะกร้าสินค้า
            </h1>

            {cartItems.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center flex flex-col">
                    <p className="text-xl text-gray-500">ไม่มีสินค้าในตะกร้า</p>
                    <Link
                        href="/"
                        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        กลับไปเลือกซื้อสินค้า
                    </Link>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md">
                    {/* Header row */}
                    <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-100 rounded-t-lg font-medium text-gray-600">
                        <div className="col-span-6">สินค้า</div>
                        <div className="col-span-2 text-center">ราคา</div>
                        <div className="col-span-2 text-center">จำนวน</div>
                        <div className="col-span-2 text-center">ราคารวม</div>
                    </div>

                    {/* Cart items */}
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-12 gap-4 px-6 py-4 border-b items-center"
                        >
                            <div className="col-span-6 flex items-center space-x-4">
                                <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.id}
                                    />
                                </div>
                                <div>
                                    <h2 className="font-medium text-gray-800">
                                        {item.name}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        รหัสสินค้า: {item.id}
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-2 text-center font-medium">
                                {item.price.toLocaleString()} บาท
                            </div>

                            <div className="col-span-2">
                                <div className="flex items-center justify-center space-x-2">
                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                Math.max(1, item.quantity - 1)
                                            )
                                        }
                                        className="text-gray-500 hover:text-blue-600"
                                    >
                                        <MinusCircle size={20} />
                                    </button>

                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            updateQuantity(
                                                item.id,
                                                parseInt(e.target.value) || 1
                                            )
                                        }
                                        className="w-16 border rounded text-center py-1 px-2"
                                    />

                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }
                                        className="text-gray-500 hover:text-blue-600"
                                    >
                                        <PlusCircle size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-1 text-center font-medium">
                                {(item.price * item.quantity).toLocaleString()}{" "}
                                บาท
                            </div>

                            <div className="col-span-1 text-center">
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 transition-colors"
                                    aria-label="ลบสินค้า"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Cart summary */}
                    <div className="p-6 bg-gray-50 rounded-b-lg">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">สินค้าทั้งหมด</span>
                            <span>
                                {cartItems.reduce(
                                    (sum, item) => sum + item.quantity,
                                    0
                                )}{" "}
                                ชิ้น
                            </span>
                        </div>

                        <div className="flex justify-between items-center border-t border-b py-4 mb-4">
                            <span className="text-gray-600">ค่าจัดส่ง</span>
                            <span>ฟรี</span>
                        </div>

                        <div className="flex justify-between items-center font-bold text-xl">
                            <span>ราคารวมทั้งหมด</span>
                            <span className="text-blue-600">
                                {total.toLocaleString()} บาท
                            </span>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                                ดำเนินการสั่งซื้อ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
