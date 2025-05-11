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

          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-green-200 transition">
              เข้าสู่ระบบ
            </a>
            <a
              href="#"
              className="relative text-green-500 hover:text-green-200 transition"
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
