"use client";

import Image from "next/image";
import Link from "next/link";
import headshot from "../public/headshot.jpg";
import { Button } from "@/components/common/button";

export default function Home() {
  return (
    <main>
      {/* Hero Image */}
      <section
        className="relative h-[648px] w-full overflow-hidden bg-cover bg-center bg-no-repeat shadow-inner"
        style={{ backgroundImage: 'url("/landing.jpg")' }}
      >
        {/* Hero Overlay */}
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black/70 to-transparent bg-fixed">
          <div className="flex h-full flex-col items-center justify-center">
            {/* Hero Text */}
            <div className="px-6 text-center md:px-12">
              <h1 className="mb-8 font-display  text-5xl font-bold leading-[1] tracking-wide text-white/90 md:mb-4 md:text-6xl md:tracking-wider xl:text-7xl">
                <span>
                  Language Travel
                  <br />
                  Adoptee
                </span>
              </h1>
              <p className="mx-auto mb-12 mt-0 max-w-sm text-xs leading-[inherit] tracking-widest text-white/90 md:max-w-lg">
                Your mental health matters while on your language learning journey. Let me show you how{" "}
                <em className="font-bold text-white">your</em> life story and resilience are your greatest language
                learning tools
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
              <Button onClick={() => console.log(":: button clicked!")} rounded>
                Read More
              </Button>
              <Button onClick={() => console.log(":: button clicked!")} rounded variant="secondary">
                Download My Free Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="flex w-full flex-col items-center justify-center space-y-3 bg-section py-12 md:flex-row md:space-y-0 md:py-24">
        <h1 className="text-center font-decorative text-8xl tracking-widest text-sky-600 md:hidden">About</h1>
        <div className="mr-0 md:mr-12 lg:mr-24">
          <Image
            className="mx-auto my-0 aspect-square max-w-[16rem] object-contain mix-blend-multiply md:max-w-xs"
            src={headshot}
            alt="About Me Image"
            priority
          />
        </div>
        <div className="relative flex flex-col justify-center">
          <h1 className="hidden text-center font-decorative text-8xl tracking-[0.2em] text-sky-600 md:absolute md:left-0 md:top-0 md:block md:-translate-y-1/3 md:translate-x-2/4">
            About
          </h1>
          <div className="max-w-sm p-0 md:pt-20">
            <h3 className="mb-2 text-center font-heading text-2xl font-bold italic text-slate-900 md:text-left">
              Welcome! I&apos;m Emily...
            </h3>
            <p className="mb-4 max-w-xs text-justify text-sm md:max-w-sm md:text-left">
              While on my language-learning journey, I noticed online communities ignoring an important aspect of
              learning:{" "}
              <strong className="text-slate-800">the connection between cultures, identities, and authenticity</strong>.
              <br />
              <br />I seek to foster a language learning community through vulnerability, common humanity, and honest
              progress. None of us are truly invincible. Let&apos;s leverage that together.
            </p>
            <div className="flex items-center justify-between">
              <Link href="/about" className="inline-btn text-sm" onClick={() => console.log(":: button clicked!")}>
                More About Me&nbsp;&rarr;
              </Link>
              {/* Social Media Icons */}
              <div className="mr-0 flex items-center justify-center space-x-2 md:mr-8">
                <a
                  href="https://open.spotify.com/show/2eVbzHTByRNVbxlkPPoICO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 transition duration-150 hover:text-green-700"
                >
                  <svg
                    className="-mr-2 mt-[.6rem] h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    id="spotify"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.67 11.548a.499.499 0 0 1-.696.122c-1.875-1.318-4.994-1.391-7.1-.9a.5.5 0 0 1-.226-.975c2.315-.536 5.775-.438 7.9 1.057a.5.5 0 0 1 .122.696zm.976-1.951a.5.5 0 0 1-.698.114C9.773 8.15 7.101 7.762 3.535 8.49a.5.5 0 1 1-.201-.98c3.857-.787 6.779-.347 9.197 1.388a.502.502 0 0 1 .115.699zm.986-2.62a.5.5 0 0 1-.695.133c-2.757-1.871-6.948-1.88-9.661-.92a.5.5 0 1 1-.333-.944C5.894 4.203 10.467 4.225 13.5 6.282a.502.502 0 0 1 .132.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Spotify page</span>
                </a>
                <a
                  href="https://www.youtube.com/@languagetraveladoptee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 transition duration-150 hover:text-red-700"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    fillRule="evenodd"
                    viewBox="0 0 24 24"
                    id="youtube"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Youtube page</span>
                </a>
                <a
                  href="https://twitter.com/LangTravAdoptee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 transition duration-150 hover:text-sky-700"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" id="twitter" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
