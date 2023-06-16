"use client";

import { useRef, Suspense } from "react";

import Image from "next/image";
import Link from "next/link";

import headshot from "../../public/headshot.jpg";
import { Button } from "@/components/button";
import LatestYoutubeVideoWidget from "@/components/latestYoutubeVideoWidget";
import LatestBlogPostsWidget from "@/components/blog/latestBlogPostsWidget";

export default function Home() {
  const aboutSectionRef = useRef(null);
  // A scroller function that takes element and smooth scrolls to it.
  const scrollToElement = (element: Element) => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };

  const onExploreClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!aboutSectionRef.current) return;
    const elementToScrollTo = aboutSectionRef.current;
    setTimeout(() => {
      scrollToElement(elementToScrollTo);
    }, 100);
  };

  return (
    <main>
      {/* Hero Image */}
      <section
        className="relative h-[100vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat shadow-inner"
        style={{ backgroundImage: 'url("/landing.jpg")' }}
      >
        {/* Hero Overlay */}
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black/70 to-transparent bg-scroll">
          <div className="mt-clamp-4 h-full text-center">
            {/* Hero Text */}
            <div className="mb-10 px-6 text-center md:mb-20 md:px-12">
              <h1 className="mb-4 font-display text-5xl font-bold tracking-wide text-white/90 md:mb-0 md:text-6xl md:tracking-wider lg:tracking-widest xl:text-7xl">
                <span className="leading-[4.5rem]">Language Travel</span>
                <br />
                <span className="text-white-to-transparent md:leading-[4.5rem]">Adoptee</span>
              </h1>
              <p className="mx-auto my-0 max-w-sm text-xs leading-[inherit] tracking-widest text-white md:max-w-lg lg:max-w-2xl">
                Your mental health matters while on your language learning journey. Let me show you how{" "}
                <em className="font-bold text-white">your</em> life story and resilience are your greatest language
                learning tools
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
              <Button
                className="btn btn-primary-opaque max-w-[16rem] text-sm tracking-wider"
                onClick={() => console.log(":: button clicked!")}
              >
                Download My Free Guide
              </Button>
              <div className="relative flex w-full items-center justify-center">
                <div className="absolute left-0 w-1/3 border-b-2 border-white/50"></div>
                <div className="relative flex w-1/3 items-center justify-center">
                  <p className="font-heading text-sm font-light tracking-widest text-white/70">or</p>
                </div>
                <div className="absolute right-0 w-1/3 border-b-2 border-white/50"></div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="flex w-full items-center justify-center">
                  <p className="text-md font-heading font-light tracking-widest text-white/90">explore</p>
                </div>
                <button
                  onClick={onExploreClick}
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-white/50 transition-all duration-300 ease-in-out hover:translate-y-2 hover:bg-white/70"
                >
                  <svg
                    className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/3 transform transition-all duration-300 ease-in-out group-hover:-translate-y-1/4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="relative flex w-full flex-col items-center justify-center bg-section py-12 md:flex-row md:space-x-12 md:py-24 lg:space-x-24">
        {/* @TODO: Fix this hack later, use boundingclient and y offset later on */}
        <div ref={aboutSectionRef} className="md:-mt-22 absolute left-0 top-0 -mt-12"></div>
        <h1 className="mb-2 text-center font-decorative text-7xl tracking-widest text-sky-600 md:hidden">About</h1>
        <div className="mb-4 md:mb-0">
          <Image
            className="mx-auto my-0 aspect-square max-w-[12rem] object-contain mix-blend-multiply md:max-w-xs xl:max-w-md"
            src={headshot}
            alt="About Me Image"
            priority
          />
        </div>
        <div className="relative flex flex-col justify-center">
          <h1 className="hidden text-center font-decorative tracking-[0.2em] text-sky-600 md:absolute md:left-0 md:top-0 md:block md:translate-x-3/4 md:translate-y-0 md:text-7xl lg:-translate-y-1/3 lg:text-8xl xl:translate-x-3/4">
            About
          </h1>
          {/* Bio */}
          <div className="max-w-sm p-0 md:pt-20">
            <h3 className="mb-2 text-center font-heading text-2xl font-bold italic text-slate-800 md:text-left md:text-3xl">
              Welcome! I&apos;m Emily...
            </h3>
            <p className="mb-0 max-w-xs text-center text-[14px] md:mb-4 md:max-w-sm md:pr-8 md:text-left md:text-sm">
              While on my language-learning journey, I noticed a lot of online communities ignoring an important aspect
              of learning:{" "}
              <strong className="text-slate-700">the connection between cultures, identities, and authenticity</strong>
              .
              <br />
              <br />I seek to foster a language learning community through vulnerability, common humanity, and honest
              progress. None of us are truly invincible. Let&apos;s leverage that together.
            </p>
            {/*  BIO CTA */}
            <div className="flex flex-wrap items-center justify-between text-sm md:text-base">
              <Link href="/about" className="inline-btn" onClick={() => console.log(":: button clicked!")}>
                More About Me&nbsp;&rarr;
              </Link>
              {/* Social Media Icons */}
              <div className="flex items-center justify-start space-x-4 md:pr-8">
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
      {/* Latest Content Section*/}
      <section className="bg-white py-12 md:py-24">
        <h3 className="mb-8 text-center font-heading text-3xl font-bold italic text-slate-800">What&apos;s New</h3>
        {/* Latest Content Container */}
        <div className="grid grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-none">
          <div className="flex w-full flex-col items-center justify-center">
            <h4 className="mb-2 text-center font-display tracking-wide">latest video</h4>
            <LatestYoutubeVideoWidget className="mb-2 aspect-video w-[min(100%-2rem,26rem)]" />
            <a
              href="https://www.youtube.com/@languagetraveladoptee"
              className="inline-btn text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch More Videos&nbsp;&rarr;
            </a>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <h4 className="mb-2 text-center font-display tracking-wide">latests posts</h4>
            <LatestBlogPostsWidget className="mb-2 h-full w-[min(100%-2rem,26rem)] space-y-4" />
            <Link href="/blog" className="inline-btn text-sm">
              Check Out My Blog&nbsp;&rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
