import groq from "groq";
import { sanityClient } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

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
      <div className="relative h-[28rem]">
        <Image
          className="object-cover object-bottom"
          src={urlFor(post.mainImage).crop("entropy").url()}
          alt={post.author.name}
          fill
        />
        <div className="absolute top-0 h-full w-full backdrop-brightness-50">
          <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
            <h1 className="max-w-sm font-display text-xl font-semibold tracking-wide md:max-w-2xl md:text-4xl lg:max-w-4xl">
              {post.title}
            </h1>
            <div className="relative my-4 flex h-4 w-full flex-row items-center justify-center md:my-6">
              <div className="w-1/4 border-b-2 border-white/50 md:w-1/3"></div>
              <div className="flex flex-row px-2">
                {post.categories &&
                  post.categories.length > 0 &&
                  post.categories.map((category) => (
                    <div
                      key={category._id}
                      className="px-1 text-teal-600 after:content-['.']"
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
      </div>
    </article>
  );
}
