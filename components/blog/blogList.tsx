"use client";

import { useState } from "react";
import BlogCard from "./blogCard";
import { Skeleton } from "../ui/skeleton";

type Props = {
    posts: Post[];
    pages?: number;
};

export default function BlogList({ posts, pages = 0 }: Props) {
    const [page, setPage] = useState(1);
    const [blogPosts, setBlogPosts] = useState<Post[]>(posts);
    const [isNextPageDisabled, setIsNextPageDisabled] = useState(pages == page || false);
    const [isPrevPageDisabled, setIsPrevPageDisabled] = useState(page === 1);
    const [isPostLoading, setIsPostsLoading] = useState(false);

    const handleNextPage = async () => {
        const _lastId = blogPosts.length > 0 ? blogPosts[blogPosts.length - 1]._id : null;
        try {
            setIsPostsLoading(true);
            const res = await fetch(`/api/blog/nextPage?page=${page + 1}&lastId=${_lastId}`);
            if (res.ok) {
                const { isLastPage, posts: newPosts } = await res.json();
                if (newPosts.length > 0) {
                    setBlogPosts(() => [...newPosts]);
                    setPage(prevPage => prevPage + 1);
                    setIsNextPageDisabled(isLastPage);
                    setIsPrevPageDisabled(false);
                }
                setIsPostsLoading(false);
            } else {
                throw new Error(res.statusText);
            }
        } catch (err) {
            console.error(err);
            setIsPostsLoading(false);
        }
    };

    const handlePreviousPage = async () => {
        const _lastId = blogPosts.length > 0 ? blogPosts[0]._id : null;
        try {
            setIsPostsLoading(true);
            const res = await fetch(`/api/blog/previousPage?lastId=${_lastId}`);
            if (res.ok) {
                const { posts: newPosts } = await res.json();
                if (newPosts.length > 0) {
                    setBlogPosts(() => [...newPosts]);
                    setPage(prevPage => {
                        setIsPrevPageDisabled(prevPage - 1 === 1);
                        return prevPage - 1;
                    })
                    setIsNextPageDisabled(false);
                }
                setIsPostsLoading(false);
            } else {
                throw new Error(res.statusText);
            }
        } catch (err) {
            console.error(err);
            setIsPostsLoading(false);
        }
    };

    return (
        <div>
            {/* Filters & Pagination */}
            <div className="flex items-center justify-between px-16 py-5">
                <div>Filters Here</div>
                <div className="inline-flex items-center space-x-8">
                    <button
                        className="rounded-sm bg-sky-600 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-sky-700 active:bg-sky-800 disabled:bg-sky-600 disabled:opacity-50"
                        onClick={handlePreviousPage}
                        disabled={isPrevPageDisabled}>
                        Previous
                    </button>
                    <button
                        className="rounded-sm bg-sky-600 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-sky-700 active:bg-sky-800 disabled:bg-sky-600 disabled:opacity-50"
                        onClick={handleNextPage}
                        disabled={isNextPageDisabled}>
                        Next
                    </button>
                </div>
            </div>
            {/* Posts */}
            {isPostLoading &&
                <Loading />
            }
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 px-10 pb-24 md:grid-cols-3">
                {!isPostLoading && blogPosts && blogPosts.map((post) => (
                    <BlogCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

function Loading() {
    return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 px-10 pb-24 md:grid-cols-3">
            <Skeleton className="mx-auto my-0 h-96 w-full max-w-[22rem]" />
            <Skeleton className="mx-auto my-0 h-96 w-full max-w-[22rem]" />
            <Skeleton className="mx-auto my-0 h-96 w-full max-w-[22rem]" />
            <Skeleton className="mx-auto my-0 h-96 w-full max-w-[22rem]" />
            <Skeleton className="mx-auto my-0 h-96 w-full max-w-[22rem]" />
            <Skeleton className="mx-auto my-0 h-96 w-full max-w-[22rem]" />
        </div>
    );
}
