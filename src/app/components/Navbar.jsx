import React from "react";

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

          <form className="max-w-md mx-auto">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              ค้นหา
            </label>
            <div className="relative">
              {/* ไอคอนค้นหา */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
              {/* input type="search" */}
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-[5rem] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500"
                placeholder="ค้นหาสินค้า..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                ค้นหา
              </button>
            </div>
          </form>

          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-green-500 hover:text-green-200 transition"
            >
              หน้าแรก
            </a>
            <a
              href="#"
              className="text-green-500 hover:text-green-200 transition"
            >
              สินค้า
            </a>
            <a
              href="#"
              className="text-green-500 hover:text-green-200 transition"
            >
              โปรโมชั่น
            </a>
            <a
              href="#"
              className="text-green-500 hover:text-green-200 transition"
            >
              บทความ
            </a>
            <a
              href="#"
              className="text-green-500 hover:text-green-200 transition"
            >
              ติดต่อเรา
            </a>
          </div>

          {/* Right Side (Login/Cart) */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-green-200 transition">
              เข้าสู่ระบบ
            </a>
            <a
              href="#"
              className="relative text-white hover:text-green-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 1.293a1 1 0 001.415 1.414L7 13zm0 0h10"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1">
                2
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
