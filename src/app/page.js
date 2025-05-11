// src/app/page.jsx
import { supabase } from "../../lib/supabaseClient";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductListClient from "./components/ProductListClient";

export default async function Home() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error);
    return <div>เกิดข้อผิดพลาดในการโหลดสินค้า</div>;
  }

  return (
    <>
      <Navbar/>
      <ProductListClient products={products} />
      <Footer/>
    </>
);
}
