import Image from "next/image";
import Link from "next/link";

import groq from "groq";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/richTextComponents";

import { sanityClient } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params: { slug } }: Props) {
    const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->,
        body[]{
            ...,
            markDefs[]{
                ...,
                "slug": reference->slug,
            }
        },
        "nextPost": *[_type == 'post' && ^._createdAt < _createdAt] | order(_createdAt asc)[0] {
            title,slug
        },
        "prevPost": *[_type == 'post' && ^._createdAt > _createdAt] | order(_createdAt desc)[0] {
            title,slug
        }
    }
  `;
    const post: Post = await sanityClient.fetch(query, { slug });
    const prevPost = post.prevPost;
    const nextPost = post.nextPost;
    const routeToPrevPost = `/post/${prevPost?.slug?.current ?? ""}`;
    const routeToNextPost = `/post/${nextPost?.slug?.current ?? ""}`;
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
                            <p className="max-w-sm text-sm tracking-wide text-white/80 md:max-w-xl md:text-sm">
                                {post.description}
                            </p>
                            <p className="relative flex flex-row items-center justify-center space-x-2 pt-8 text-xs">
                                <span>
                                    {post.author.name}&nbsp;,&emsp;
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
            {/* 2 col grid here including portable text and author bio */}
            <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-x-10 py-24 md:grid-cols-[1fr_310px]">
                <div className="col-span-1 mx-auto h-full w-full max-w-[min(100%,100%-4rem)]">
                    <PortableText value={post.body} components={RichTextComponents} />
                </div>
                {/* Author Bio and other side elements go here */}
                <div className="grid h-96 w-full place-content-center bg-red-600 text-white">aside here</div>
            </section>
            <section className="mx-auto w-full">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between pb-6">
                    {prevPost &&
                        <Link className="group relative flex aspect-square w-56 flex-col items-center justify-center space-y-2 text-center" href={routeToPrevPost}>
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
                        <Link className="group relative flex aspect-square w-56 flex-col items-center justify-center space-y-2 text-center" href={routeToNextPost}>
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
