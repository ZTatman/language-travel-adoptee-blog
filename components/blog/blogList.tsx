"use client";

import { useState } from "react";
import BlogCard from "./blogCard";

type Props = {
    blogPosts: Post[];
    totalPages?: number;
};

export default function BlogList({ blogPosts, totalPages = 0 }: Props) {
    const [page, setPage] = useState(1);
    const [isNextPageDisabled, setIsNextPageDisabled] = useState(page === totalPages || false);
    const [isPrevPageDisabled, setIsPrevPageDisabled] = useState(page === 1);
    const [posts, setPosts] = useState<Post[]>(blogPosts);

    console.log(":: totalPages: " + totalPages + " page: " + page)
    const handleNextPage = async () => {
        const _lastId = posts[posts.length - 1]._id;
        try {
            const res = await fetch(`/api/blog/nextPage?page=${page + 1}&lastId=${_lastId}`);
            if (res.ok) {
                const { isLastPage, posts: newPosts } = await res.json();
                if (newPosts.length > 0) {
                    setPosts(() => [...newPosts]);
                    setPage(prevPage => prevPage + 1);
                    setIsNextPageDisabled(isLastPage);
                    setIsPrevPageDisabled(false);
                }
                else return;
            } else {
                throw new Error(res.statusText);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handlePreviousPage = async () => {
        const _lastId = posts[0]._id;
        try {
            const res = await fetch(`/api/blog/previousPage?lastId=${_lastId}`);
            if (res.ok) {
                const { posts: newPosts } = await res.json();
                if (newPosts.length > 0) {
                    setPosts(() => [...newPosts]);
                    setPage(prevPage => {
                        setIsPrevPageDisabled(prevPage - 1 === 1);
                        return prevPage - 1;
                    })
                    setIsNextPageDisabled(false);
                }
                else return;
            } else {
                throw new Error(res.statusText);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {/* Filters & Pagination */}
            <div className="flex items-center justify-between px-16 py-5">
                <div>Filters Here</div>
                <div className="inline-flex items-center space-x-8">
                    <button
                        className="rounded-sm bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 active:bg-sky-800 disabled:bg-sky-600 disabled:opacity-50"
                        onClick={handlePreviousPage}
                        disabled={isPrevPageDisabled}>
                        Previous
                    </button>
                    <button
                        className="rounded-sm bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 active:bg-sky-800 disabled:bg-sky-600 disabled:opacity-50"
                        onClick={handleNextPage}
                        disabled={isNextPageDisabled}>
                        Next
                    </button>
                </div>
            </div>
            {/* Posts */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 px-10 pb-24 md:grid-cols-3">
                {posts.map((post) => (
                    <BlogCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}
