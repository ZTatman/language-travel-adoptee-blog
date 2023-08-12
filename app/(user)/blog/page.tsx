import { previewData } from "next/headers";
import groq from "groq";
import { sanityClient } from "@/lib/sanity.client";
import PreviewBlogPostsList from "@/components/blog/previewBlogPostsList";
import PreviewSuspense from "@/components/blog/previewSuspense";
import BlogList from "@/components/blog/blogList";

let lastUpdatedAt = '';
let lastId = '';

// async function fetchNextPage() {
//     if (lastId === null) {
//         return []
//     }
//     const query = groq`*[_type == "article" && (
//       updatedAt > $lastUpdatedAt
//       || (updatedAt == $lastUpdatedAt && _id > $lastId)
//     )] | order(updatedAt) [0...1] {
//         ...,
//         "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
//         author->,
//         categories[]->
//     }`
//     const result = await sanityClient.fetch(query, { lastUpdatedAt, lastId })
//     return result;
// }

const query = groq`
*[_type == "post" && (_updatedAt > $lastUpdatedAt || (_updatedAt == $lastUpdatedAt && _id > $lastId))]
 | order(_updatedAt desc) [0...1] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->
}`;

async function getPosts(query: string, options: { lastUpdatedAt: string | null, lastId: string | null }) {
    if (lastId === null) {
        return []
    }
    const posts = await sanityClient.fetch(query, options);
    if (posts.length > 0) {
        lastUpdatedAt = posts[posts.length - 1]._updatedAt;
        lastId = posts[posts.length - 1]._id;
        console.log(":: posts", posts)
        console.log(":: lastId", lastId)
    } else {
        lastId = null  // Reached the end
    }
    return posts;
}

export default async function Blog() {
    const posts = await getPosts(query, { lastUpdatedAt: lastUpdatedAt, lastId });
    if (previewData()) {
        return (
            <PreviewSuspense
                fallback={<p className="py-4 text-center text-lg font-heading font-bold text-slate-700 animate-pulse">Loading Preview Data...</p>}
            >
                <PreviewBlogPostsList query={query} />
            </PreviewSuspense>
        );
    }
    return (
        <div>
            <BlogList posts={posts} />
        </div>
    );
}
