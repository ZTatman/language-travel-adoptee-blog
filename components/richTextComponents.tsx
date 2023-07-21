import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import logo from "@/public/finallang_favicon.ico";
import getVideoId from "get-video-id";
import { slugify } from "@/lib/utils";
import bookmark from "@/public/bookmark.png"

export const RichTextComponents = {
    types: {
        tableofcontents: ({ value }: any) => {
            return (
                <nav className="before:toc-label relative my-10 rounded-2xl shadow shadow-black/10 [border:_1px_solid_rgba(0,0,0,.125)] before:bg-sky-300/40 before:font-heading before:text-lg before:font-semibold before:tracking-wider before:text-sky-800/50 before:content-['Table_of_Contents']">
                    <ul className="py-2 md:[column-count:_2] md:[&>*:nth-child(2):last-child]:border-none">
                        {value.sections.map(
                            (section: string) =>
                                <li className="mx-6 border-t-2 font-semibold uppercase first:border-none md:odd:border-none md:even:border-t-2" key={slugify(section)}>
                                    <a
                                        className="group inline-flex items-center py-[10px] text-slate-600 hover:text-slate-700 hover:underline hover:underline-offset-4 md:py-3"
                                        href={'#' + slugify(section)}
                                    >
                                        <div className="relative -ml-1 mr-5 aspect-square w-[30px] p-1 md:h-[40px] md:w-[40px]">
                                            <Image className="absolute inset-0 m-auto [z-index:_10;]" src={bookmark} alt="chapter" />
                                            <div className="absolute inset-0 z-0 m-auto h-full w-full rounded-egg_2 bg-sky-300/40 group-hover:bg-sky-400/40"></div>
                                        </div>
                                        <span className="line-clamp-1">{section}</span>
                                    </a>
                                </li>
                        )}
                    </ul>
                </nav>
            )
        },
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
            <li className="listitem-decoration-style relative max-w-none pl-4">
                {children}
            </li>
        ),
    },
    block: {
        intro: ({ children }: any) => {
            return (
                <>
                    {children.slice(0, -1)}
                    <p className="
                        pb-12 leading-[1.9em] first-letter:relative first-letter:float-left
                        first-letter:-mb-[0.2em] first-letter:-ml-[8px] first-letter:mr-[2px] first-letter:pl-[5px]
                        first-letter:pr-[10px] first-letter:pt-[4px] first-letter:font-display first-letter:text-8xl
                        first-letter:font-bold"
                    >
                        {children.pop()}
                    </p>
                </>
            )
        },
        normal: ({ children }: any) => (
            <p className="leading-[1.9]">{children}</p>
        ),
        h1: ({ children }: any) => (
            <h1 className="pb-6 font-heading text-4xl font-bold">{children}</h1>
        ),
        h2: (props: any) => {
            const { node, children } = props;
            return (
                <h2 className="py-6 font-heading text-3xl font-bold" id={slugify(node.children[0].text)}>{children}</h2>
            )
        },
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
