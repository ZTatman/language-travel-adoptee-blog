import Image from "next/image";
import logo from "../public/finallang_favicon.ico";

export default function Navbar() {
  return (
        <nav className="flex items-center justify-between flex-grow w-auto py-3 text-center border-b px-9 md:w-auto">
            <div className="flex items-center justify-center flex-shrink-0 md:mr-6">
                <a href="/" >
                    <Image src={logo} alt="Logo" width={48} height={48} />
                </a>
            </div>
            <div className="hidden text-sm md:block">
                <a href="#" className="block mt-4 md:mr-4 text-slate-900 hover:text-slate-700 md:mt-0 md:inline-block">
                    About
                </a>
                <a href="#" className="block mt-4 md:mr-4 text-slate-900 hover:text-slate-700 md:mt-0 md:inline-block">
                    Blog
                </a>
                <a href="#" className="block mt-4 text-slate-900 hover:text-slate-700 md:mt-0 md:inline-block">
                    Contact Me
                </a>
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
