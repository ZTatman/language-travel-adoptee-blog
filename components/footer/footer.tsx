import Image from "next/image";
import Link from "next/link";

import logo from "../../public/finallang_favicon.ico";

export default function Footer() {
  return (
    <footer>
      {/* Flex Container */}
      <div className="mx-auto w-full max-w-screen-xl px-9 py-6 md:py-9">
        {/* TODO: Convert this to 3 col grid when links / newsletter signup are done */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
          <div className="border-b pb-4 md:border-b-0 md:border-r md:pb-0">
            <Link href="/" className="text-center">
              <div className="flex justify-center">
                <Image src={logo} alt="Logo" width={52} height={52} />
              </div>
              <div className="text-small mt-2 font-display text-slate-700">Language Travel Adoptee</div>
            </Link>
            {/* Social Media Icons */}
            <div className="mt-2 flex justify-center space-x-2">
              <a
                href="https://www.instagram.com/languagetraveladoptee"
                className="text-slate-400 transition duration-150 hover:text-sky-600"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" id="instagram" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089352878080"
                className="text-slate-400 transition duration-150 hover:text-sky-600"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" id="facebook" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://open.spotify.com/show/2eVbzHTByRNVbxlkPPoICO"
                className="text-slate-400 transition duration-150 hover:text-sky-600"
              >
                <svg
                  className="-mr-2 mt-[0.1rem] h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  id="spotify"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.67 11.548a.499.499 0 0 1-.696.122c-1.875-1.318-4.994-1.391-7.1-.9a.5.5 0 0 1-.226-.975c2.315-.536 5.775-.438 7.9 1.057a.5.5 0 0 1 .122.696zm.976-1.951a.5.5 0 0 1-.698.114C9.773 8.15 7.101 7.762 3.535 8.49a.5.5 0 1 1-.201-.98c3.857-.787 6.779-.347 9.197 1.388a.502.502 0 0 1 .115.699zm.986-2.62a.5.5 0 0 1-.695.133c-2.757-1.871-6.948-1.88-9.661-.92a.5.5 0 1 1-.333-.944C5.894 4.203 10.467 4.225 13.5 6.282a.502.502 0 0 1 .132.695z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Spotify page</span>
              </a>
              <a
                href="https://www.youtube.com/@languagetraveladoptee"
                className="text-slate-400 transition duration-150 hover:text-sky-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  fill-rule="evenodd"
                  viewBox="0 0 24 24"
                  id="youtube"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Youtube page</span>
              </a>
              <a
                href="https://twitter.com/LangTravAdoptee"
                className="text-slate-400 transition duration-150 hover:text-sky-600"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" id="twitter" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col items-center justify-center space-y-2 text-sm">
            <h3 className="font-sans text-lg uppercase tracking-wide text-slate-700">Links</h3>
            <a
              href="#"
              className="text-center text-slate-400 transition duration-150 hover:text-sky-600 hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="text-center text-slate-400 transition duration-150 hover:text-sky-600 hover:underline"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-center text-slate-400 transition duration-150 hover:text-sky-600 hover:underline"
            >
              Request a Topic
            </a>
            <a
              href="#"
              className="text-center text-slate-400 transition duration-150 hover:text-sky-600 hover:underline"
            >
              Contact&nbsp;/&nbsp;Work With Me
            </a>
            <a
              href="#"
              className="text-center text-slate-400 transition duration-150 hover:text-sky-600 hover:underline"
            >
              Support Me
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-9" />
        <span className="block text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
          © 2023 Language Travel Adoptee™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
