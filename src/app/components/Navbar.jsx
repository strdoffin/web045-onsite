"use client";

import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/search?query=${encodeURIComponent(search)}`);
        }
    };

    return (
        <div>
            <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        <span className="w-[64px] h-[64px]">
                            <img
                                src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-6dc8-61f5-9260-503b298ade46/raw"
                                alt=""
                            />
                        </span>
                    </a>

                    {/* Search bar */}
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center w-[200px] max-w-full sm:w-[400px] md:w-[700px]"
                    >
                        <input
                            type="search"
                            placeholder="ค้นหาสินค้า..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="rounded-l-full bg-gray-50 border border-gray-200 px-5 py-2 w-full text-gray-700 outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white rounded-r-full px-4 py-2.5 flex items-center transition"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                                />
                            </svg>
                        </button>
                    </form>

                    {/* Cart */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/cart"
                            className="hover:scale-110 hover:text-green-500 transition duration-500"
                        >
                            <ShoppingBag size={32} strokeWidth={1} />
                        </Link>
                        <div className="text-xs">
                            <p className="text-gray-500">YOUR CART</p>
                            <p className="font-semibold">
                                <span className="text-green-600">0.00</span> Bath
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
