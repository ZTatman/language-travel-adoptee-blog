import { previewData } from "next/headers";

import groq from "groq";
import PreviewBlogPostsList from "@/components/blog/previewBlogPostsList";
import PreviewSuspense from "@/components/blog/previewSuspense";
import { sanityClient } from "@/lib/sanity.client";

const allBlogPostsQuery = groq`
*[_type == "post"] {
  title,
  "slug": slug.current,
  author->{name},
  "image": mainImage.asset->{url},
  categories[]->
} | order(createdAt desc)`;

export default async function Blog() {
  const posts = await sanityClient.fetch(allBlogPostsQuery);
  if (previewData())
    return (
      // style the loading state using tailwind classes
      <PreviewSuspense fallback={<p className="text-center font-display text-slate-700">Loading Preview Data...</p>}>
        <PreviewBlogPostsList posts={posts} />
      </PreviewSuspense>
    );
  return <div>Blog Page</div>;
}
