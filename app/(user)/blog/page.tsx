import { previewData } from "next/headers";
import groq from "groq";
import { sanityClient } from "@/lib/sanity.client";
import PreviewBlogPostsList from "@/components/blog/previewBlogPostsList";
import PreviewSuspense from "@/components/blog/previewSuspense";
import BlogList from "@/components/blog/blogList";

const getAllPostsQuery = groq`
*[_type == "post"] {
  ...,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
  author->,
  categories[]->
} | order(createdAt desc)`;

async function getAllPosts() {
  const posts = await sanityClient.fetch(getAllPostsQuery);
  return posts;
}

export default async function Blog() {
  const posts = await getAllPosts();
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={<p className="py-4 text-center text-lg font-heading font-bold text-slate-700 animate-pulse">Loading Preview Data...</p>}
      >
        <PreviewBlogPostsList query={getAllPostsQuery} />
      </PreviewSuspense>
    );
  }
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
