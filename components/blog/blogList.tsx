"use client";

import { useState } from "react";
import BlogCard from "./blogCard";

let isLastPage = false;

type Props = {
    blogPosts: Post[];
};

export default function BlogList({ blogPosts }: Props) {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<Post[]>(blogPosts);

    const handleNextPage = async () => {
        const _lastId = posts[posts.length - 1]._id;
        try {
            const res = await fetch(`/api/blog/nextPage?page=${page + 1}&lastId=${_lastId}`);
            if (res.ok) {
                const { isLastPage: _isLastPage, posts: newPosts } = await res.json();
                if (newPosts.length > 0) {
                    setPosts(() => [...newPosts]);
                    setPage(prevPage => prevPage + 1);
                    isLastPage = _isLastPage;
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
                    setPage(prevPage => prevPage - 1)
                    isLastPage = false;
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
                        className="rounded-sm border border-slate-400 px-4 py-2 disabled:opacity-50"
                        onClick={handlePreviousPage}
                        disabled={page === 1}>
                        Previous
                    </button>
                    <button
                        className="rounded-sm border border-slate-400 px-4 py-2 disabled:opacity-50"
                        onClick={handleNextPage}
                        disabled={isLastPage}>
                        Next
                    </button>
                </div>
            </div>
            {/* Posts */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 px-10 md:grid-cols-3">
                {posts.map((post) => (
                    <BlogCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}
