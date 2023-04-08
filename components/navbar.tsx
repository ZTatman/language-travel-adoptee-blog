"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
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
                    <Link href="/" >
                        <Image src={logo} alt="Logo" width={48} height={48} />
                    </Link>
                </div>
                <div className="hidden text-sm sm:block">
                    <Link href="#" className="relative block mt-4 sm:mr-4 text-slate-900 hover:text-slate-700 sm:mt-0 sm:inline-block group transition duration-300">
                        About
                        <span className="absolute h-0.5 inset-0 top-5 bg-sky-600 transform origin-center scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                    </Link>
                    <Link href="#" className="relative block mt-4 sm:mr-4 text-slate-900 hover:text-slate-700 sm:mt-0 sm:inline-block group transition duration-300">
                        Blog
                        <span className="absolute h-0.5 inset-0 top-5 bg-sky-600 transform origin-center scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                    </Link>
                    <Link href="#" className="relative block mt-4 sm:mr-4 text-slate-900 hover:text-slate-700 sm:mt-0 sm:inline-block group transition duration-300">
                        Contact Me
                        <span className="absolute h-0.5 inset-0 top-5 bg-sky-600 transform origin-center scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                    </Link>
                </div>
                <div>
                    <button className="hidden px-4 py-2 text-sm leading-none text-white rounded hover:text-gray-100 sm:inline-block bg-sky-600 hover:bg-sky-700 transition duration-150 ease">
                        Download
                    </button>
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        className="p-1 text-gray-400 align-middle sm:hidden hover:text-gray-900 focus:ring-2 focus:outline-none focus:ring-blue-sky-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>
            {showMenu &&
                <div className={`${showMenu ? "max-h-40" : "h-0"} text-sm text-center sm:hidden transition-all duration-500 ease-out border-b overflow-hidden`}>
                    <Link href="/about" className="block py-4 text-slate-900 hover:text-slate-700 hover:bg-gray-100">
                        About
                    </Link>
                    <Link href="/blog" className="block py-4 text-slate-900 hover:text-slate-700 hover:bg-gray-100">
                        Blog
                    </Link>
                    <Link href="/contact" className="block py-4 text-slate-900 hover:text-slate-700 hover:bg-gray-100">
                        Contact Me
                    </Link>
                </div>
            }
        </div>
    );
}
