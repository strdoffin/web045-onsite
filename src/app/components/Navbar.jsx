import React from "react";
import { ShoppingBag } from "lucide-react";


const Navbar = () => {
  return (
    <div className="">
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-green-500 font-bold text-lg">
              KU E-commerce
            </span>
          </a>

          <form className="flex items-center w-[400px] max-w-full">
            <input
              type="search"
              placeholder="Search the web"
              className="rounded-l-full bg-gray-50 border border-gray-200  px-5 py-2 w-full text-gray-700 outline-none focus:ring-0 focus:ring-offset-0"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white rounded-r-full px-4 py-2.5 flex items-center transition"
              aria-label="Search"
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

          <div>
            <div className="flex">
              <div className="text-xl">
                <ShoppingBag size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm">Your Cart</p>
                <p>0$</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
