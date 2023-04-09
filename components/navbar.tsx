"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/finallang_favicon.ico";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <nav className="flex items-center justify-between flex-grow w-auto py-3 text-center border-b px-9 sm:w-auto">
        <div className="flex items-center justify-center flex-shrink-0 sm:mr-6">
          <Link href="/">
            <Image src={logo} alt="Logo" width={48} height={48} />
          </Link>
        </div>
        <div className="hidden text-sm sm:block">
          <Link
            href="#"
            className="relative block mt-4 group text-slate-700 transition duration-300 hover:text-slate-900 sm:mr-4 sm:mt-0 sm:inline-block"
          >
            About
            <span className="absolute inset-0 top-5 h-0.5 origin-center scale-x-0 transform bg-sky-600 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="#"
            className="relative block mt-4 group text-slate-700 transition duration-300 hover:text-slate-900 sm:mr-4 sm:mt-0 sm:inline-block"
          >
            Blog
            <span className="absolute inset-0 top-5 h-0.5 origin-center scale-x-0 transform bg-sky-600 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="#"
            className="relative block mt-4 group text-slate-700 transition duration-300 hover:text-slate-900 sm:mr-4 sm:mt-0 sm:inline-block"
          >
            Contact Me
            <span className="absolute inset-0 top-5 h-0.5 origin-center scale-x-0 transform bg-sky-600 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div>
          <button className="hidden px-4 py-2 text-sm leading-none text-white rounded ease bg-sky-600 transition duration-150 hover:bg-sky-700 hover:text-gray-100 sm:inline-block">
            Download
          </button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="p-1 text-gray-400 align-middle focus:ring-blue-sky-600 rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`${
          showMenu ? "max-h-40" : "max-h-0"
        } mb-4 overflow-hidden border-b text-center text-sm transition-all duration-500 ease-in-out sm:hidden`}
      >
        <Link href="/about" className="block py-4 text-slate-700 hover:bg-gray-100 hover:text-slate-900">
          About
        </Link>
        <Link href="/blog" className="block py-4 text-slate-700 hover:bg-gray-100 hover:text-slate-900">
          Blog
        </Link>
        <Link href="/contact" className="block py-4 text-slate-700 hover:bg-gray-100 hover:text-slate-900">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
