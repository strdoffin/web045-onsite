import { supabase } from "../../lib/supabaseClient";
export default async function Home() {
    const { data: products, error } = await supabase
        .from("products")
        .select("*");

    if (error) {
        console.log(error);
        return <div>เกิดข้อผิดพลาดในการโหลดสินค้า</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
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
                        ${p.price}
                    </p>
                </div>
            ))}
        </div>
    );
}
