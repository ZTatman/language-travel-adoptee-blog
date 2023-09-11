"use client";

import { FormEvent, useCallback, useState } from "react";
import BlogCard from "./blogCard";
import SearchBar from "../search/searchBar";
import { Skeleton } from "../ui/skeleton";
import { Post } from "@/types";
import { sanityClient } from "@/lib/sanity.client";
import { DEFAULT, SEARCH_FOR_POST_MATCHING_TERM } from "@/groq/queries";

function getFormValues(form: HTMLFormElement) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const isEmpty = [...formData.values()].includes("");
    return [data, isEmpty];
}

const debounce = function(func: { apply: (arg0: any, arg1: any) => void; }): (...args: any) => void {
    let timer: string | number | NodeJS.Timeout | null | undefined;
    return function(...args: any) {
        const context = this;
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
        }, 500);
    };
}

type Props = {
    posts: Post[];
    pages?: number;
};

export default function BlogList({ posts, pages = 1 }: Props) {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(pages);
    const [blogPosts, setBlogPosts] = useState<Post[]>(posts);
    const [isPrevPageDisabled, setIsPrevPageDisabled] = useState(page === 1);
    const [isNextPageDisabled, setIsNextPageDisabled] = useState(page === totalPages || false);
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
            } else {
                throw new Error(res.statusText);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsPostsLoading(false);
        };
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
            } else {
                throw new Error(res.statusText);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsPostsLoading(false);
        };
    };

    const handleChange = async (searchTerm: string) => {
        if (searchTerm === "") {
            try {
                const posts = await sanityClient.fetch(DEFAULT);
                if (posts && posts.length > 0) {
                    setBlogPosts([...posts]);
                    setPage(1);
                    setIsPrevPageDisabled(page === 1);
                    setIsNextPageDisabled(page === totalPages);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsPostsLoading(false);
            };
        }
        try {
            setIsPostsLoading(true);
            const posts = await sanityClient.fetch(SEARCH_FOR_POST_MATCHING_TERM, { search: searchTerm });
            if (posts && posts.length > 0) {
                setBlogPosts([...posts]);
                setIsPrevPageDisabled(true);
                setIsNextPageDisabled(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsPostsLoading(false);
        };
    }

    const handleChangeDebounced = useCallback(debounce(handleChange), []);

    const handleFormSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const [formData, isDataEmpty] = getFormValues(e.currentTarget);
        if (isDataEmpty) return;
        const searchTerm = formData.search;
        try {
            setIsPostsLoading(true);
            const posts = await sanityClient.fetch(SEARCH_FOR_POST_MATCHING_TERM, { search: searchTerm });
            if (posts && posts.length > 0) {
                setBlogPosts([...posts]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsPostsLoading(false);
        };
    }, []);

    return (
        <div>
            {/* Filters & Pagination */}
            <div className="my-4 flex items-center justify-between px-14">
                <div>Filters Here</div>
                <SearchBar onChange={handleChangeDebounced} onSubmit={handleFormSubmit} />
            </div>
            {/* Posts */}
            {isPostLoading &&
                <Loading />
            }
            <div className="px-10">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3">
                    {!isPostLoading && blogPosts.length > 0 && blogPosts.map((post) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
                <div className="my-8 flex items-center justify-end space-x-8 px-4">
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
