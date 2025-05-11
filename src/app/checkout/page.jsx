"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Trash2 } from 'react-feather';

const CheckoutPage = ({ cartItems, user }) => {
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // คำนวณราคารวม
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ฟังก์ชันสำหรับการสั่งซื้อ
  const handleCheckout = async () => {
    if (!address) {
      setErrorMessage('กรุณากรอกที่อยู่สำหรับการจัดส่ง');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // บันทึกข้อมูลการสั่งซื้อในฐานข้อมูล Supabase
      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            user_id: user.id,
            address,
            items: cartItems,
            total_price: total,
            status: 'pending',
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      // เปลี่ยนไปยังหน้าขอบคุณหลังการสั่งซื้อ
      router.push(`/thank-you`);
    } catch (error) {
      setErrorMessage('เกิดข้อผิดพลาดในการสั่งซื้อ โปรดลองอีกครั้ง');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">ขั้นตอนการสั่งซื้อ</h1>
      
      {/* ที่อยู่จัดส่ง */}
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          ที่อยู่สำหรับจัดส่ง
        </label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={4}
          className="mt-2 p-2 border rounded w-full"
          placeholder="กรุณากรอกที่อยู่จัดส่ง"
        />
        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
      </div>

      {/* สรุปคำสั่งซื้อ */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">สรุปคำสั่งซื้อ</h2>

        {/* รายการสินค้า */}
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>{(item.price * item.quantity).toLocaleString()} บาท</span>
            </div>
          ))}
        </div>

        {/* ค่าจัดส่ง */}
        <div className="flex justify-between mb-2">
          <span>ค่าจัดส่ง</span>
          <span>ฟรี</span>
        </div>

        {/* ราคาสุทธิ */}
        <div className="flex justify-between font-bold text-xl">
          <span>ราคารวมทั้งหมด</span>
          <span className="text-green-600">{total.toLocaleString()} บาท</span>
        </div>
      </div>

      {/* ปุ่มยืนยันการสั่งซื้อ */}
      <button
        onClick={handleCheckout}
        className="w-full bg-green-600 text-white py-2 rounded-md text-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'กำลังดำเนินการ...' : 'ยืนยันการสั่งซื้อ'}
      </button>
    </div>
  );
};

export default CheckoutPage;
