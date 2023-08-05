"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/richTextComponents";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import BreadcrumbItem from "@/components/breadcrumbs/breadcrumbItem";
import urlFor from "@/lib/urlFor";
import profilePicture from "@/public/headshot.png";

type Props = {
    post: Post;
}

type Breadcrumb = {
    href: string;
    label: string;
}

export default function PageContent({ post }: Props) {
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

    const { prevPost, nextPost } = post;
    const routeToPrevPost = `/post/${prevPost?.slug?.current ?? ""}`;
    const routeToNextPost = `/post/${nextPost?.slug?.current ?? ""}`;

    useEffect(() => {
        let pathArray = pathname?.split("?")[0]?.split("/").slice(0, -1) || [];
        pathArray = pathArray.filter((path) => path !== "").map((path) => path === "post" ? "blog" : path);
        const breadcrumbs = pathArray.map((path, index) => {
            const href = "/" + pathArray.slice(0, index).join("/")
            return {
                href,
                label: path.charAt(0).toUpperCase() + path.slice(1)
            }
        });
        setBreadcrumbs(breadcrumbs)
    }, [pathname]);

    if (!post) return null;
    return (
        <article>
            {/* Image, Title, Description, Category Header */}
            <section className="relative h-[28rem]">
                <Image
                    className="object-cover object-bottom"
                    src={urlFor(post.mainImage).crop("entropy").url()}
                    alt={post.author.name}
                    fill
                />
                <div className="absolute top-0 h-full w-full backdrop-brightness-[0.4]">
                    <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
                        <h1 className="m-[0_auto] w-[90%] font-display text-3xl font-semibold tracking-wide md:text-4xl">
                            {post.title}
                        </h1>
                        <div className="relative my-2 flex h-4 w-[80%] flex-row items-center justify-center py-6 md:my-0 md:py-9">
                            <div className="w-1/4 border-b-2 border-white/50"></div>
                            <div className="flex flex-row flex-wrap items-center justify-center px-2">
                                {post.categories &&
                                    post.categories.length > 0 &&
                                    post.categories.map((category) => (
                                        <div
                                            key={category._id}
                                            className="px-2 font-semibold tracking-wide text-teal-500 after:content-['.']"
                                        >
                                            {category.title}
                                        </div>
                                    ))}
                            </div>
                            <div className="w-1/4 border-b-2 border-white/50"></div>
                        </div>
                        <div>
                            <p className="max-w-sm text-sm tracking-wide text-white/80 md:max-w-xl">
                                {post.description}
                            </p>
                            <p className="relative flex flex-row items-center justify-center space-x-2 pt-16 text-sm tracking-wider text-white/80">
                                <span>
                                    {post.author.name},&emsp;
                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Two Column Grid */}
            <section className="mx-auto grid w-full grid-cols-1 items-start lg:grid-cols-[1fr_minmax(0,3rem)_310px_minmax(4px,16px)]">
                <div className="col-span-1 mx-auto h-full w-full">
                    {/* Breadcrumbs */}
                    <div className="mx-auto mt-9 max-w-[min(100%,100%-2rem)] border-b-[1px] pb-4">
                        <Breadcrumbs className="ml-4 italic">
                            <BreadcrumbItem className="hover:text-sky-600" href="/">Home</BreadcrumbItem>
                            {breadcrumbs.map(({ href, label }) => (
                                <BreadcrumbItem className="hover:text-sky-600" key={label} href={href}>{label}</BreadcrumbItem>
                            ))}
                        </Breadcrumbs>
                    </div>
                    {/* Share Content Banner */}
                    <div className="mx-auto mb-8 flex max-w-[min(100%,100%-2rem)] items-center justify-between border-b-[1px] py-4">
                        <span className="ml-4 text-sm font-semibold uppercase">share:</span>
                        {/* Share Buttons */}
                        <div className="mr-4 inline-flex items-center space-x-4">
                            <a id="share-fbk" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition duration-150 hover:scale-105 hover:text-sky-700">
                                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path></svg>
                                <span className="sr-only">Share on Facebook</span>
                            </a>
                            <a id="share-twt" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition duration-150 hover:scale-105 hover:text-sky-500">
                                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="twitter">
                                    <path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
                                </svg>
                                <span className="sr-only">Share on Twitter</span>
                            </a>
                            <a id="share-wap" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition duration-150 hover:scale-105 hover:text-emerald-500">
                                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="whatsapp">
                                    <path d="M8.002 0h-.004C3.587 0 0 3.588 0 8a7.94 7.94 0 0 0 1.523 4.689l-.997 2.972 3.075-.983A7.93 7.93 0 0 0 8.002 16C12.413 16 16 12.411 16 8s-3.587-8-7.998-8zm4.655 11.297c-.193.545-.959.997-1.57 1.129-.418.089-.964.16-2.802-.602-2.351-.974-3.865-3.363-3.983-3.518-.113-.155-.95-1.265-.95-2.413s.583-1.707.818-1.947c.193-.197.512-.287.818-.287.099 0 .188.005.268.009.235.01.353.024.508.395.193.465.663 1.613.719 1.731.057.118.114.278.034.433-.075.16-.141.231-.259.367-.118.136-.23.24-.348.386-.108.127-.23.263-.094.498.136.23.606.997 1.298 1.613.893.795 1.617 1.049 1.876 1.157.193.08.423.061.564-.089.179-.193.4-.513.625-.828.16-.226.362-.254.574-.174.216.075 1.359.64 1.594.757.235.118.39.174.447.273.056.099.056.564-.137 1.11z"></path>
                                </svg>
                                <span className="sr-only">Share on Whatsapp</span>
                            </a>
                            <a id="share-ln" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition duration-150 hover:scale-105 hover:text-sky-600">
                                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="linkedin">
                                    <path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path>
                                    <circle cx="1.75" cy="1.75" r="1.75"></circle>
                                </svg>
                                <span className="sr-only">Share on LinkedIn</span>
                            </a>
                            <Script
                                id="share-post"
                                dangerouslySetInnerHTML={{
                                    __html: `
                                        const link = encodeURI(window.location.href);
                                        const msg = encodeURIComponent('Love this!\\nCheck out this article from Language Travel Adoptee!')
                                        const title = encodeURIComponent(document.querySelector('title').textContent)
                                        const linkedin = document.querySelector('#share-ln')
                                        linkedin.href = \`https://www.linkedin.com/sharing/share-offsite/?url=\${link}\`
                                        const twitter = document.querySelector('#share-twt')
                                        twitter.href = \`https://www.twitter.com/share?&url=\${link}&text=\${msg}&hashtags=LanguageTravelAdoptee,LanguageLearning\`
                                        const facebook = document.querySelector('#share-fbk')
                                        facebook.href = \`https://www.facebook.com/share.php?u=\${link}\`
                                        const whatsapp = document.querySelector('#share-wap')
                                        whatsapp.href = \`https://api.whatsapp.com/send?text=\${link}\`
                                    `,
                                }}
                            />
                        </div>
                    </div>
                    {/* Post Body Content */}
                    <div className="mx-auto max-w-[min(90%,90%-4rem)]">
                        <PortableText value={post.body} components={RichTextComponents} />
                    </div>
                </div>
                {/* Sidebar */}
                <aside className="hidden h-full w-full md:col-start-3 md:block lg:col-span-1 lg:col-start-3">
                    <h2 className="sr-only">Sidebar Section</h2>
                    {/* Short Bio Widget */}
                    <div className="mx-auto mb-9 box-border w-full max-w-xs text-center">
                        <h3 className="mt-8 border-b-[1px] pb-2 font-heading text-2xl font-semibold">Get To Know Me!</h3>
                        <div className="mx-auto mt-24 box-border w-full overflow-visible bg-sky-100 pt-[1px]">
                            <Image className="mx-auto -mt-24 aspect-square w-[16rem] object-contain object-center pt-4 drop-shadow-xl" src={profilePicture} alt="profile picture" />
                            <div className="p-5 text-sm leading-[140%]">
                                <p className="text-left">
                                    Hi, langauge learner! <strong>I'm Emily!</strong>
                                    I am a self-taught speaker of 7+ foreign languages and a langauge-learning coach.
                                </p>
                                <p className="mt-4 text-left">
                                    My approach is grounded in compassion, well-being, and mindfulness. I can help you go from stuck, self-critical,
                                    and overwhelmed to confident, resillient, and filled with clarity and joy whilst learning multiple languages.
                                </p>
                                <p className="mt-4 text-left">
                                    <strong>
                                        Sign up to get my free Resiliency Cheat Sheet! It's a perfect resource for building
                                        confidence in your studies and resetting your language-learning mindset.
                                    </strong>
                                </p>
                                <button className="text-md mt-4 bg-sky-600 px-5 py-4 font-sans font-bold uppercase text-white transition-all duration-150 ease-in-out hover:bg-sky-700">
                                    <Link href="#" rel="noopener noreferrer">sign me up</Link>
                                </button>
                            </div>
                        </div>
                        <Link className="mx-auto block py-5 text-sm font-semibold text-sky-500 hover:text-sky-600" href="/about">Learn More About Me.</Link>
                        {/* Social Media Icons */}
                        <div className="inline-flex items-center space-x-4">
                            <a href="https://www.instagram.com/languagetraveladoptee" target="_blank" rel="noopener noreferrer" className="text-pink-600 transition duration-150 hover:scale-105 hover:text-pink-700">
                                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="instagram">
                                    <path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path><path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path>
                                    <circle cx="12.3" cy="3.7" r=".533"></circle>
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100089352878080" target="_blank" rel="noopener noreferrer" className="text-sky-600 transition duration-150 hover:scale-105 hover:text-sky-700">
                                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path></svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://open.spotify.com/show/2eVbzHTByRNVbxlkPPoICO" target="_blank" rel="noopener noreferrer" className="text-green-600 transition duration-150 hover:scale-105 hover:text-green-700">
                                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="spotify">
                                    <path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.67 11.548a.499.499 0 0 1-.696.122c-1.875-1.318-4.994-1.391-7.1-.9a.5.5 0 0 1-.226-.975c2.315-.536 5.775-.438 7.9 1.057a.5.5 0 0 1 .122.696zm.976-1.951a.5.5 0 0 1-.698.114C9.773 8.15 7.101 7.762 3.535 8.49a.5.5 0 1 1-.201-.98c3.857-.787 6.779-.347 9.197 1.388a.502.502 0 0 1 .115.699zm.986-2.62a.5.5 0 0 1-.695.133c-2.757-1.871-6.948-1.88-9.661-.92a.5.5 0 1 1-.333-.944C5.894 4.203 10.467 4.225 13.5 6.282a.502.502 0 0 1 .132.695z"></path>
                                </svg>
                                <span className="sr-only">Spotify page</span>
                            </a>
                            <a href="https://www.youtube.com/@languagetraveladoptee" target="_blank" rel="noopener noreferrer" className="text-red-600 transition duration-150 hover:scale-105 hover:text-red-700">
                                <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube">
                                    <path fillRule="evenodd" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z" clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Youtube page</span>
                            </a>
                            <a href="https://twitter.com/LangTravAdoptee" target="_blank" rel="noopener noreferrer" className="text-sky-500 transition duration-150 hover:scale-105 hover:text-sky-600">
                                <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="twitter">
                                    <path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                        </div>
                    </div>
                </aside>
            </section>
            {/* Previous / Next Post Buttons */}
            <section className="mx-auto w-full">
                <div className="mx-auto flex w-[min(100%,100%-2rem)] max-w-6xl items-center pb-6">
                    {prevPost &&
                        <Link className="group relative mr-auto flex aspect-square w-56 flex-col items-center justify-center space-y-2 text-center" href={routeToPrevPost}>
                            <svg className="absolute inset-0 z-[-1] m-auto w-full origin-center text-sky-100/80 transition-all duration-300 ease-in-out group-hover:w-[95%] group-hover:text-sky-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M32.9,-47.7C46.6,-42.3,64.6,-40,75.9,-30.3C87.3,-20.5,92,-3.3,83.4,7.5C74.9,18.3,53.1,22.7,41.1,34.5C29.1,46.3,27,65.4,18.1,73.4C9.2,81.4,-6.4,78.2,-22.7,74.7C-39,71.1,-55.9,67.1,-68,56.9C-80.1,46.6,-87.3,30.1,-84.8,15.2C-82.2,0.3,-70,-13,-59.8,-24C-49.6,-34.9,-41.5,-43.4,-31.8,-50.7C-22.2,-58,-11.1,-64.2,-0.8,-63C9.5,-61.8,19.1,-53.2,32.9,-47.7Z" transform="translate(100 100)" />
                            </svg>
                            <span className="line-clamp-2 font-heading text-lg font-bold">{prevPost.title}</span>
                            <svg className="h-8 w-8 -translate-x-4 scale-x-110 text-slate-400 transition-all duration-150 ease-in-out group-hover:-translate-x-9 group-hover:scale-x-125 group-hover:text-sky-500/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    }
                    {nextPost &&
                        <Link className="group relative ml-auto flex aspect-square w-56 flex-col items-center justify-center space-y-2 text-center" href={routeToNextPost}>
                            <svg className="absolute inset-0 z-[-1] m-auto w-full origin-center text-sky-100/80 transition-all duration-300 ease-in-out [transform:_scaleX(-1)] group-hover:w-[95%] group-hover:text-sky-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M32.9,-47.7C46.6,-42.3,64.6,-40,75.9,-30.3C87.3,-20.5,92,-3.3,83.4,7.5C74.9,18.3,53.1,22.7,41.1,34.5C29.1,46.3,27,65.4,18.1,73.4C9.2,81.4,-6.4,78.2,-22.7,74.7C-39,71.1,-55.9,67.1,-68,56.9C-80.1,46.6,-87.3,30.1,-84.8,15.2C-82.2,0.3,-70,-13,-59.8,-24C-49.6,-34.9,-41.5,-43.4,-31.8,-50.7C-22.2,-58,-11.1,-64.2,-0.8,-63C9.5,-61.8,19.1,-53.2,32.9,-47.7Z" transform="translate(100 100)" />
                            </svg>
                            <span className="line-clamp-2 font-heading text-lg font-bold">{nextPost.title}</span>
                            <svg className="h-8 w-8 translate-x-4 scale-x-110 text-slate-400 transition-all duration-150 ease-in-out group-hover:translate-x-9 group-hover:scale-x-125 group-hover:text-sky-500/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    }
                </div>
            </section>
        </article>
    );
}
