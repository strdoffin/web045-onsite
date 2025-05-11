import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-3">
              <img
                src="favicon.ico"
                alt="425 Logo"
                className="h-10 mr-2"
              />
              <span className="font-bold text-xl">KU E-commerce</span>
            </div>
            <p className="text-green-100 text-sm">
              ร้านค้าออนไลน์สำหรับอุปกรณ์เสริมมือถือ เคส ฟิล์มกันรอย หูฟัง
              และสินค้าไอทีคุณภาพ
            </p>
          </div>

                    {/* เมนู */}
                    <div>
                        <h3 className="font-semibold mb-3">เมนู</h3>
                        <ul className="space-y-2 text-green-100 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white"
                                >
                                    หน้าแรก
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white"
                                >
                                    สินค้า
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white"
                                >
                                    โปรโมชั่น
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white"
                                >
                                    บทความ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white"
                                >
                                    ติดต่อเรา
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* ข้อมูลติดต่อ */}
                    <div>
                        <h3 className="font-semibold mb-3">ติดต่อเรา</h3>
                        <ul className="space-y-2 text-green-100 text-sm">
                            <li>โทร: 095-056-2020</li>
                            <li>อีเมล: 15687@nmrsw2.ac.th</li>
                            <li>ที่อยู่: 123 ถ.สุขุมวิท กรุงเทพฯ 10110</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-3">ติดตามเรา</h3>
                        <div className="flex space-x-4">
                            <Link
                                href="https://web.facebook.com/sirisak.suekham.9"
                                aria-label="Facebook"
                                className="hover:text-white"
                            >
                                <Facebook
                                    size={32}
                                    strokeWidth={1.5}
                                />
                            </Link>
                            <Link
                                href="https://www.instagram.com/ssiriiji/"
                                aria-label="Instagram"
                                className="hover:text-white"
                            >
                                <Instagram
                                    size={32}
                                    strokeWidth={1.5}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-green-600 mt-8">
                    <div className="max-w-7xl mx-auto px-4 py-4 text-center text-green-100 text-xs">
                        &copy; {new Date().getFullYear()} 425 E-commerce.
                        สงวนลิขสิทธิ์ทุกประการ.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
