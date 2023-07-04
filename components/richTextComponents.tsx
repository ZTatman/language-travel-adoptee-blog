import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import logo from "@/public/finallang_favicon.ico";
import getVideoId from "get-video-id";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative mx-auto my-10 h-96 w-full">
                    <Image
                        className="object-cover object-center"
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        placeholder="blur"
                        blurDataURL="data:..."
                        fill
                    />
                </div>
            );
        },
        captionimage: ({ value }: any) => {
            return (
                <div className="my-10">
                    <figure className="relative mx-auto h-96 w-full">
                        <Image
                            className="object-cover object-center"
                            src={urlFor(value).url()}
                            alt={value.alt}
                            placeholder="blur"
                            blurDataURL="data:..."
                            fill
                        />
                    </figure>
                    <div className="text-center">
                        {value.caption && (
                            <figcaption className="mt-4 font-sans font-semibold">
                                {value.caption}
                            </figcaption>
                        )}
                        {value.attribution && (
                            <figcaption className="mt-1 font-sans text-sm text-neutral-400">
                                {value.attribution}
                            </figcaption>
                        )}
                    </div>
                </div>
            );
        },
        youtube: ({ value }: any) => {
            const { id } = getVideoId(value.url);
            return (
                <div className="my-10">
                    <div className="relative aspect-video h-96 w-full drop-shadow-lg">
                        <iframe
                            className="object-contain"
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${id}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                        />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <a
                            className="
                                rounded-sm bg-slate-800 bg-size-200 bg-pos-0 px-6 py-4 text-base
                                font-bold text-white drop-shadow-md transition-all duration-500 delay-150
                                hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:via-65% hover:to-orange-500 hover:bg-pos-100"
                            href={`https://www.youtube.com/@languagetraveladoptee`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Subscribe To My Channel
                        </a>
                    </div>
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc-none relative ml-5 space-y-5 py-5">
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol className="ml-5 list-decimal space-y-5 py-5">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => (
            <li className="listitem-decoration-style relative max-w-none overflow-hidden text-ellipsis whitespace-nowrap pl-4">
                {children}
            </li>
        ),
    },
    block: {
        normal: ({ children }: any) => (
            <p className="leading-8">{children}</p>
        ),
        h1: ({ children }: any) => (
            <h1 className="py-6 font-heading text-4xl font-bold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="py-6 font-heading text-3xl font-bold">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="py-6 font-heading text-2xl font-bold">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="py-6 font-heading text-xl font-bold">{children}</h4>
        ),
        blockquote: ({ children }: any) => (
            <figure className="relative mx-auto my-12 max-w-2xl border-l-4 border-teal-300 p-6 text-center">
                <blockquote className="font-heading text-lg italic tracking-wide">
                    <div className="absolute -bottom-2 right-8 hidden text-5xl leading-[inherit] text-teal-300/80 sm:block">
                        &rdquo;
                    </div>
                    <Image
                        src={logo}
                        className="absolute inset-0 m-auto w-32 opacity-10"
                        alt="Logo"
                        width={52}
                        height={52}
                    />
                    <p className="max-w-[34rem] text-center">{children}</p>
                </blockquote>
            </figure>
        ),
    },
    marks: {
        internalLink: ({ children, value }: any) => {
            const { slug = {} } = value;
            const href = `/post/${slug.current}`;
            return (
                <Link className="internal-link relative text-shadow" href={href}>{children}</Link>
            )
        },
        link: ({ children, value }: any) => {
            const { blank, href } = value
            return blank
                ? <a className="font-semibold text-sky-500 hover:text-sky-600" href={href} target="_blank" rel="noopener">{children}</a>
                : <a className="font-semibold text-sky-500 hover:text-sky-600" href={href}>{children}</a>
        }
    },
};
