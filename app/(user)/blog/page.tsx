import { previewData } from "next/headers";
import { sanityClient } from "@/lib/sanity.client";
import PreviewBlogPostsList from "@/components/blog/previewBlogPostsList";
import PreviewSuspense from "@/components/blog/previewSuspense";
import BlogList from "@/components/blog/blogList";
import { DEFAULT, TOTAL_PAGES, ALL_POSTS, ALL_CATEGORIES } from "@/groq/queries";
import { Category, Post } from "@/types";

let posts: Post[] = [];
let categories: Category[] = [];

export default async function Blog() {
    posts = await sanityClient.fetch(DEFAULT);
    categories = await sanityClient.fetch(ALL_CATEGORIES);
    const { totalPages } = await sanityClient.fetch(TOTAL_PAGES);
    const _totalPages = Math.ceil(totalPages);
    if (previewData()) {
        return (
            <PreviewSuspense
                fallback={<p className="animate-pulse py-4 text-center font-heading text-lg font-bold text-slate-700">Loading Preview Data...</p>}
            >
                <PreviewBlogPostsList query={ALL_POSTS} availableCategories={categories} />
            </PreviewSuspense>
        );
    }
    return (
        <div>
            <BlogList posts={posts} availableCategories={categories} pages={_totalPages} />
        </div>
    );
}
