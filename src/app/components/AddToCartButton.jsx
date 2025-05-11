'use client';
import { useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

const AddToCartButton = ({ product }) => {
  const { user } = useUser();

  const addToCart = async () => {
    if (!user) {
      toast.error('คุณต้องล็อกอินเพื่อเพิ่มสินค้าลงในตะกร้า');
      return;
    }

    // จำลองการเพิ่มสินค้า โดยไม่ใช้ Supabase
    console.log("เพิ่มสินค้า:", product);
    toast.success('จำลองการเพิ่มสินค้าสำเร็จ');
  };

  return (
    <button
      onClick={addToCart}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      เพิ่มลงตะกร้า
    </button>
  );
};

export default AddToCartButton;
