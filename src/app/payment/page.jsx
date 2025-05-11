"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function page() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = window.history.state?.usr?.cart || [];
            setCart(storedCart);
            const totalAmount = storedCart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            setTotal(totalAmount.toFixed(2));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessage("Payment successful!");
        }, 1500);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Payment</h2>

            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Order Summary:</h3>
                {cart.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between"
                    >
                        <span>
                            {item.name} x{item.quantity}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className="flex justify-between mt-2 font-bold">
                    <span>Total:</span>
                    <span>${total}</span>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <input
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                    placeholder="Full Name"
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    name="cardNumber"
                    onChange={handleChange}
                    value={formData.cardNumber}
                    placeholder="Card Number"
                    maxLength="16"
                    required
                    className="w-full p-2 border rounded"
                />
                <div className="flex gap-4">
                    <input
                        name="expiryDate"
                        onChange={handleChange}
                        value={formData.expiryDate}
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                        className="w-full p-2 border rounded"
                    />
                    <input
                        name="cvv"
                        onChange={handleChange}
                        value={formData.cvv}
                        placeholder="CVV"
                        maxLength="3"
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    {loading ? "Processing..." : `Pay $${total}`}
                </button>
                {message && (
                    <p className="text-green-600 text-center mt-2">{message}</p>
                )}
            </form>
        </div>
    );
}
