"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import headshot from "../../public/headshot.png";
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

    const onExploreClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
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
                    <div className="flex h-full flex-col justify-center text-center">
                        {/* Hero Text */}
                        <div className="p-6 text-center md:p-12">
                            <h1 className="mb-4 font-display text-5xl font-bold tracking-wide text-white/90 md:mb-0 md:text-6xl md:tracking-wider lg:tracking-widest xl:text-7xl">
                                <span className="leading-[4.5rem]">Language Travel</span>
                                <br />
                                <span className="text-white-to-transparent md:leading-[4.5rem]">
                                    Adoptee
                                </span>
                            </h1>
                            <p className="mx-auto my-0 max-w-sm text-xs leading-[inherit] tracking-widest text-white md:max-w-lg lg:max-w-2xl">
                                Your mental health matters while on your language learning
                                journey. Let me show you how{" "}
                                <em className="font-bold text-white">your</em> life story and
                                resilience are your greatest language learning tools
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
                                    <p className="font-heading text-sm font-light tracking-widest text-white/70">
                                        or
                                    </p>
                                </div>
                                <div className="absolute right-0 w-1/3 border-b-2 border-white/50"></div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex w-full items-center justify-center">
                                    <p className="text-md font-heading font-light tracking-widest text-white/90">
                                        explore
                                    </p>
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
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section className="relative flex w-full flex-col items-center justify-center bg-section py-24 md:flex-row md:space-x-12 lg:space-x-24">
                <div
                    ref={aboutSectionRef}
                    className="absolute left-0 top-0"
                ></div>
                <h1 className="mb-2 text-center font-decorative text-7xl tracking-widest text-sky-600 md:hidden">
                    About
                </h1>
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
                            While on my language-learning journey, I noticed a lot of online
                            communities ignoring an important aspect of learning:{" "}
                            <strong className="text-slate-700">
                                the connection between cultures, identities, and authenticity
                            </strong>
                            .
                            <br />
                            <br />I seek to foster a language learning community through
                            vulnerability, common humanity, and honest progress. None of us
                            are truly invincible. Let&apos;s leverage that together.
                        </p>
                        {/*  Read More About Me */}
                        <div className="flex flex-wrap items-center justify-between text-sm">
                            <Link
                                href="/about"
                                className="inline-btn"
                                onClick={() => console.log(":: button clicked!")}
                            >
                                More About Me&nbsp;&rarr;
                            </Link>
                            {/* Social Media Icons */}
                            <div className="flex items-center justify-start space-x-4 md:pr-8">
                                <a href="https://open.spotify.com/show/2eVbzHTByRNVbxlkPPoICO" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:scale-105 transition duration-150 hover:text-green-700">
                                    <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="spotify">
                                        <path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.67 11.548a.499.499 0 0 1-.696.122c-1.875-1.318-4.994-1.391-7.1-.9a.5.5 0 0 1-.226-.975c2.315-.536 5.775-.438 7.9 1.057a.5.5 0 0 1 .122.696zm.976-1.951a.5.5 0 0 1-.698.114C9.773 8.15 7.101 7.762 3.535 8.49a.5.5 0 1 1-.201-.98c3.857-.787 6.779-.347 9.197 1.388a.502.502 0 0 1 .115.699zm.986-2.62a.5.5 0 0 1-.695.133c-2.757-1.871-6.948-1.88-9.661-.92a.5.5 0 1 1-.333-.944C5.894 4.203 10.467 4.225 13.5 6.282a.502.502 0 0 1 .132.695z"></path>
                                    </svg>
                                    <span className="sr-only">Spotify page</span>
                                </a>
                                <a href="https://www.youtube.com/@languagetraveladoptee" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:scale-105 transition duration-150 hover:text-red-700">
                                    <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube">
                                        <path fillRule="evenodd" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="sr-only">Youtube page</span>
                                </a>
                                <a href="https://twitter.com/LangTravAdoptee" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:scale-105 transition duration-150 hover:text-sky-600">
                                    <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="twitter">
                                        <path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
                                    </svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Content Section */}
            <section className="bg-white py-24">
                <h3 className="mb-8 text-center font-heading text-3xl font-bold italic text-slate-800 md:mb-16">
                    What&apos;s New
                </h3>
                {/* Latest Content Container */}
                <div className="grid grid-rows-2 gap-16 px-12 md:grid-cols-2 md:grid-rows-none md:gap-8 md:px-24">
                    <div className="flex w-full flex-col items-center justify-center">
                        <h4 className="mb-4 text-center font-display tracking-wide">
                            latest video
                        </h4>
                        <LatestYoutubeVideoWidget className="mb-4 aspect-video h-full w-full drop-shadow-md" />
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
                        <h4 className="mb-4 text-center font-display tracking-wide">
                            latests posts
                        </h4>
                        <LatestBlogPostsWidget className="mb-4 h-full w-full max-w-[min(100%-4rem,26rem)] space-y-4" />
                        <Link href="/blog" className="inline-btn text-sm">
                            Check Out My Blog&nbsp;&rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
