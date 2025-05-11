import React from "react";
import { ShoppingBag } from "lucide-react";


const Navbar = () => {
  return (
    <div className="">
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 ">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="w-[64px] h-[64px]">
              <img src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-6dc8-61f5-9260-503b298ade46/raw?se=2025-05-11T06%3A34%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-10T20%3A30%3A44Z&ske=2025-05-11T20%3A30%3A44Z&sks=b&skv=2024-08-04&sig=VzgRWqpCHEKHQBzK1XlWftSxSpZGnbp6ARqtsuUe8Cg%3D" alt="" />
            </span>
          </a>

          <form className="flex items-center w-[200px] max-w-full sm:w-[400px] md:w-[700px]">
            <input
              type="search"
              placeholder="ค้นหาสินค้า..."
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

          <div className="flex items-center gap-2">
            <ShoppingBag size={32} strokeWidth={1} />
            <div className="text-xs">
              <p className="text-gray-500">YOUR CARD</p>
              <p className="font-semibold"><span className="text-green-600">0.00</span> Bath</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
