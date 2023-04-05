import Image from "next/image";
import logo from "../public/finallang_favicon.ico";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-center px-8 py-3 border-b border-gray-900">
      <div className="flex-grow block w-auto text-center lg:flex lg:w-auto lg:items-center lg:justify-between">
        <div className="flex items-center flex-shrink-0 lg:mr-6">
          <Image src={logo} alt="Logo" width={48} height={48} />
        </div>
        <div className="text-sm">
          <a href="#" className="block mt-4 lg:mr-4 text-neutral-900 hover:text-neutral-700 lg:mt-0 lg:inline-block">
            About
          </a>
          <a href="#" className="block mt-4 lg:mr-4 text-neutral-900 hover:text-neutral-700 lg:mt-0 lg:inline-block">
            Blog
          </a>
          <a href="#" className="block mt-4 text-neutral-900 hover:text-neutral-700 lg:mt-0 lg:inline-block">
            Contact Me
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block px-4 py-2 mt-4 text-sm leading-none border border-black rounded text-neutral-900 hover:border-neutral-700 hover:bg-white hover:text-neutral-700 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
