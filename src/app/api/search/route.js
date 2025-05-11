import { NextResponse } from "next/server";
import { supabase } from "../../../../lib/supabaseClient";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) return NextResponse.json([], { status: 200 });

    const { data, error } = await supabase
        .from("products")
        .select("product_id, name")
        .or(`name.ilike.%${query}%,category.ilike.%${query}%`) // 👈 search by name OR category
        .limit(5);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}
