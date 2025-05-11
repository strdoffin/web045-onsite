"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function AddProductForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        discount: "",
        availability: true,
        brand: "",
        category: "",
        rating: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const { error } = await supabase.from("products").insert([
            {
                ...formData,
                price: parseFloat(formData.price),
                discount: parseInt(formData.discount),
                rating: parseFloat(formData.rating),
            },
        ]);

        if (error) {
            console.log("Insert error:", error.message);
            setMessage("เกิดข้อผิดพลาดในการเพิ่มสินค้า");
        } else {
            setMessage("เพิ่มสินค้าสำเร็จแล้ว!");
            setFormData({
                name: "",
                description: "",
                price: "",
                image: "",
                discount: "",
                availability: true,
                brand: "",
                category: "",
                rating: "",
            });
        }

        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-6 space-y-4 bg-white rounded-xl shadow-md mt-10"
        >
            <h2 className="text-2xl font-bold">เพิ่มสินค้าใหม่</h2>

            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ชื่อสินค้า"
                required
                className="w-full p-2 border rounded"
            />

            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="รายละเอียดสินค้า"
                required
                className="w-full p-2 border rounded"
            />

            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="ราคา"
                required
                className="w-full p-2 border rounded"
            />

            <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="ลิงก์รูปภาพ"
                required
                className="w-full p-2 border rounded"
            />

            <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                placeholder="ส่วนลด (%)"
                className="w-full p-2 border rounded"
            />

            <input
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="แบรนด์"
                className="w-full p-2 border rounded"
            />

            <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="หมวดหมู่"
                className="w-full p-2 border rounded"
            />

            <input
                type="number"
                step="0.1"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="เรตติ้ง (0 - 5)"
                className="w-full p-2 border rounded"
            />

            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="availability"
                    checked={formData.availability}
                    onChange={handleChange}
                />
                <span>พร้อมจำหน่าย</span>
            </label>

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {loading ? "กำลังบันทึก..." : "เพิ่มสินค้า"}
            </button>

            {message && <p className="text-center mt-4">{message}</p>}
        </form>
    );
}
