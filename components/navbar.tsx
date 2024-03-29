"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "./button";
import logo from "../public/finallang_favicon.ico";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="flex w-auto flex-grow items-center justify-between border-b bg-white px-9 py-3 text-center sm:w-auto">
        <div className="flex flex-shrink-0 items-center justify-center sm:mr-6">
          <Link href="/">
            <Image src={logo} alt="Logo" width={52} height={52} priority />
          </Link>
        </div>
        <div className="text-md hidden sm:block">
          <Link
            href="/about"
            className="group relative mt-4 block transition duration-300 sm:mr-6 sm:mt-0 sm:inline-block"
          >
            About
            <span className="absolute inset-0 top-6 h-0.5 origin-bottom-right scale-x-0 transform bg-gradient-to-r from-teal-500 to-sky-600 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/blog"
            className="group relative mt-4 block transition duration-300 sm:mr-6 sm:mt-0 sm:inline-block"
          >
            Blog
            <span className="absolute inset-0 top-6 h-0.5 origin-bottom-right scale-x-0 transform bg-gradient-to-r from-teal-500 to-sky-600 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/contact"
            className="group relative mt-4 block transition duration-150 ease-in-out sm:mr-6 sm:mt-0 sm:inline-block"
          >
            Contact Me
            <span className="absolute inset-0 top-6 h-0.5 origin-bottom-right scale-x-0 transform bg-gradient-to-r from-teal-500 to-sky-600  transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div>
          <Button
            className="btn btn-primary hidden rounded-full text-sm tracking-wider md:block"
            onClick={() => console.log(":: button clicked!")}
          >
            Download
          </Button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="rounded-md p-1 align-middle focus:outline-none focus:ring-2 focus:ring-sky-500 sm:hidden"
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
          showMenu ? "max-h-44 shadow-inner" : "invisible max-h-0 shadow-none"
        } text-md overflow-hidden bg-gray-50 text-center transition-all duration-300 ease-in-out sm:hidden`}
      >
        <Link href="/about" className="block py-4 transition duration-150 ease-in-out hover:bg-gray-200">
          About
        </Link>
        <Link href="/blog" className="block py-4 transition duration-150 ease-in-out hover:bg-gray-200">
          Blog
        </Link>
        <Link href="/contact" className="block py-4 transition duration-150 ease-in-out hover:bg-gray-200">
          Contact Me
        </Link>
      </div>
    </>
  );
}
