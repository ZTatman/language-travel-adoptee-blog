import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import logo from "@/public/finallang_favicon.ico";
import getVideoId from "get-video-id";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative m-10 mx-auto h-96 w-full">
                    <Image
                        className="object-contain"
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        placeholder="blur"
                        blurDataURL="data:..."
                        fill
                    />
                </div>
            );
        },
        captionimage: ({value}: any) => {
            return (
                <div className="m-10">
                    <figure className="relative mx-auto h-96 w-full">
                        <Image
                            className="object-contain"
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
                        <div className="relative h-96 aspect-video w-full">
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
                        <div className="flex justify-center mt-4">
                            <a
                                className="px-6 py-4 text-base rounded-sm font-bold text-white duration-2000 bg-slate-800 shadow-md hover:bg-gradient-to-br from-orange-400 to-pink-500 transition-all ease-in-out"
                                href={`https://www.youtube.com/@languagetraveladoptee`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit My Channel
                            </a>
                        </div>
                    </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="ml-10 list-decimal space-y-5 py-5">{children}</ol>
        ),
    },
    block: {
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
    },
    marks: {
        blockquote: ({ children, value }: any) => {
            return (
                <figure className="relative mx-auto my-12 max-w-2xl border-l-8 border-teal-500 p-6 text-center">
                    <blockquote
                        className="font-heading text-xl italic tracking-wide"
                        cite={value.url}
                    >
                        <div className="absolute -bottom-4 right-4 hidden text-7xl leading-[inherit] text-teal-300/80 sm:block">
                            &rdquo;
                        </div>
                        <Image
                            src={logo}
                            className="absolute inset-0 m-auto w-32 opacity-10"
                            alt="Logo"
                            width={52}
                            height={52}
                        />
                        {children}
                    </blockquote>
                    {value.author && (
                        <figcaption className="mt-2 font-sans text-sm">
                            &#8209;{value.author}
                        </figcaption>
                    )}
                </figure>
            );
        },
    },
};
