import { previewData } from "next/headers";
import { sanityClient } from "@/lib/sanity.client";
import PreviewBlogPostsList from "@/components/blog/previewBlogPostsList";
import PreviewSuspense from "@/components/blog/previewSuspense";
import BlogList from "@/components/blog/blogList";
import { DEFAULT } from "@/groq/queries";

let posts: Post[] = [];

export default async function Blog() {
    posts = await sanityClient.fetch(DEFAULT);
    if (previewData()) {
        return (
            <PreviewSuspense
                fallback={<p className="animate-pulse py-4 text-center font-heading text-lg font-bold text-slate-700">Loading Preview Data...</p>}
            >
                <PreviewBlogPostsList query={DEFAULT} />
            </PreviewSuspense>
        );
    }
    return (
        <div>
            <BlogList blogPosts={posts} />
        </div>
    );
}
