import { previewData } from "next/headers";
import { sanityClient } from "@/lib/sanity.client";
import PreviewBlogPostsList from "@/components/blog/previewBlogPostsList";
import PreviewSuspense from "@/components/blog/previewSuspense";
import BlogList from "@/components/blog/blogList";
import { DEFAULT, TOTAL_PAGES, ALL_POSTS } from "@/groq/queries";

let posts: Post[] = [];

export default async function Blog() {
    posts = await sanityClient.fetch(DEFAULT);
    const totalPages = await sanityClient.fetch(TOTAL_PAGES);
    const _totalPages = Math.ceil(totalPages);
    if (previewData()) {
        return (
            <PreviewSuspense
                fallback={<p className="animate-pulse py-4 text-center font-heading text-lg font-bold text-slate-700">Loading Preview Data...</p>}
            >
                <PreviewBlogPostsList query={ALL_POSTS} />
            </PreviewSuspense>
        );
    }
    return (
        <div>
            <BlogList posts={posts} pages={_totalPages} />
        </div>
    );
}
