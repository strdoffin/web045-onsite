"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (search.trim()) {
                fetch(`/api/search?q=${encodeURIComponent(search)}`)
                    .then((res) => res.json())
                    .then((data) => setSuggestions(data));
            } else {
                setSuggestions([]);
            }
        }, 300);
        return () => clearTimeout(delayDebounce);
    }, [search]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/search?query=${encodeURIComponent(search)}`);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (text) => {
        setSearch(text);
        router.push(`/search?query=${encodeURIComponent(text)}`);
        setShowSuggestions(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="w-[64px] h-[64px]">
                        <Image
                            src="/icon.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </span>
                </Link>

                {/* Search */}
                <div className="relative w-[200px] sm:w-[400px] md:w-[700px]">
                    <form onSubmit={handleSearch} className="flex">
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setShowSuggestions(true);
                            }}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                            placeholder="ค้นหาสินค้า..."
                            className="rounded-l-full bg-gray-50 border border-gray-200 px-5 py-2 w-full text-gray-700 outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white rounded-r-full px-4 py-2.5"
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

                    {/* Suggestions dropdown */}
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className="absolute bg-white border border-gray-200 w-full shadow-md rounded-b-lg mt-1 max-h-48 overflow-y-auto z-50">
                            {suggestions.map((item) => (
                                <li
                                    key={item.product_id}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSuggestionClick(item.name)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <UserButton showName />
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
    );
};

export default Navbar;
