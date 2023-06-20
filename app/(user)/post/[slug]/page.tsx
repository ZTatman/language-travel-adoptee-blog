import groq from "groq";
import { sanityClient } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import logo from "@/public/finallang_favicon.ico";

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
      categories[]->
    }
  `;
  const post: Post = await sanityClient.fetch(query, { slug });
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
        <div className="absolute top-0 h-full w-full backdrop-brightness-50">
          <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
            <h1 className="max-w-sm font-display text-4xl font-semibold tracking-wide md:max-w-2xl md:text-5xl lg:max-w-4xl">
              {post.title}
            </h1>
            <div className="relative my-6 flex h-4 w-full flex-row items-center justify-center md:my-6">
              <div className="w-1/4 border-b-2 border-white/50 md:w-1/3"></div>
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
              <div className="w-1/4 border-b-2 border-white/50 md:w-1/3"></div>
            </div>
            <p className="max-w-sm text-xs text-white/80 md:max-w-2xl md:text-sm">
              {post.description}
            </p>
            <p className="relative mt-4 flex flex-row items-center justify-center space-x-2 text-xs">
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
      </section>
      <section className="mx-auto w-full max-w-[min(100%-4rem,48rem)]">
        <PortableText
          value={post.body}
          components={{
            types: {
              image: ({ value }: any) => {
                return (
                  <div className="relative m-10 mx-auto h-96 w-full">
                    <Image
                      className="object-contain"
                      src={urlFor(value).url()}
                      alt="Blog Post Image"
                      fill
                    />
                  </div>
                );
              },
            },
            list: {
              bullet: ({ children }: any) => (
                <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
              ),
              number: ({ children }: any) => (
                <ol className="ml-10 list-decimal space-y-5 py-5">
                  {children}
                </ol>
              ),
            },
            block: {
              h1: ({ children }: any) => (
                <h1 className="py-6 font-heading text-4xl font-bold">
                  {children}
                </h1>
              ),
              h2: ({ children }: any) => (
                <h2 className="py-6 font-heading text-3xl font-bold">
                  {children}
                </h2>
              ),
              h3: ({ children }: any) => (
                <h3 className="py-6 font-heading text-2xl font-bold">
                  {children}
                </h3>
              ),
              h4: ({ children }: any) => (
                <h4 className="py-6 font-heading text-xl font-bold">
                  {children}
                </h4>
              ),
            },
            marks: {
              blockquote: ({ children, value }: any) => (
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
              ),
            },
          }}
        />
      </section>
    </article>
  );
}
