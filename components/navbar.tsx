import Image from "next/image";
import Link from "next/link";
import logo from "../public/finallang_favicon.ico";

export default function Navbar() {
  return (
        <nav className="flex items-center justify-between flex-grow w-auto py-3 text-center border-b px-9 md:w-auto">
            <div className="flex items-center justify-center flex-shrink-0 md:mr-6">
                <Link href="/" >
                    <Image src={logo} alt="Logo" width={48} height={48} />
                </Link>
            </div>
            <div className="hidden text-sm md:block">
                <Link href="/about" className="block mt-4 md:mr-4 text-slate-900 hover:text-slate-700 md:mt-0 md:inline-block">
                    About
                </Link>
                <Link href="/blog" className="block mt-4 md:mr-4 text-slate-900 hover:text-slate-700 md:mt-0 md:inline-block">
                    Blog
                </Link>
                <Link href="/contact" className="block mt-4 text-slate-900 hover:text-slate-700 md:mt-0 md:inline-block">
                    Contact Me
                </Link>
            </div>
            <div>
                <button className="hidden px-4 py-2 text-sm leading-none rounded text-slate-100 hover:text-white md:inline-block bg-brand">
                    Download
                </button>
              <button className="align-middle md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
            </div>
        </nav>
  );
}
