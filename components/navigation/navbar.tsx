"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../common/button";
import logo from "../../public/finallang_favicon.ico";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <React.Fragment>
      <nav className="flex w-auto flex-grow items-center justify-between border-b-2 bg-slate-50 px-9 py-3 text-center sm:w-auto">
        <div className="flex flex-shrink-0 items-center justify-center sm:mr-6">
          <Link href="/">
            <Image src={logo} alt="Logo" width={48} height={48} />
          </Link>
        </div>
        <div className="text-md hidden sm:block">
          <Link
            href="#"
            className="group relative mt-4 block text-zinc-700 transition duration-300 sm:mr-6 sm:mt-0 sm:inline-block"
          >
            About
            <span className="absolute inset-0 top-6 h-0.5 origin-center scale-x-0 transform bg-sky-600 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="#"
            className="group relative mt-4 block text-zinc-700 transition duration-300 sm:mr-6 sm:mt-0 sm:inline-block"
          >
            Blog
            <span className="absolute inset-0 top-6 h-0.5 origin-center scale-x-0 transform bg-sky-600 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="#"
            className="group relative mt-4 block text-zinc-700 transition duration-300 sm:mr-6 sm:mt-0 sm:inline-block"
          >
            Contact Me
            <span className="absolute inset-0 top-6 h-0.5 origin-center scale-x-0 transform bg-sky-600 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div>
          <Button className="ease text-md hidden rounded bg-sky-600 px-4 py-2 leading-none text-white transition duration-150 hover:bg-sky-700 hover:text-gray-100 sm:inline-block">
            Download
          </Button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="focus:ring-blue-sky-600 rounded-md p-1 align-middle text-zinc-700 focus:outline-none focus:ring-2 sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`${
          showMenu ? "max-h-40" : "invisible max-h-0"
        } overflow-hidden text-center text-sm transition-all duration-500 ease-in-out sm:hidden`}
      >
        <Link href="/about" className="block py-4 text-zinc-700 hover:bg-gray-100">
          About
        </Link>
        <Link href="/blog" className="block py-4 text-zinc-700 hover:bg-gray-100">
          Blog
        </Link>
        <Link href="/contact" className="block py-4 text-zinc-700 hover:bg-gray-100">
          Contact Me
        </Link>
      </div>
    </React.Fragment>
  );
}
