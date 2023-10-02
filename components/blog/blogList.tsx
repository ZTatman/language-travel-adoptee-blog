"use client";

import { FormEvent, useCallback, useState, useEffect, useMemo } from "react";

import { Category, Post } from "@/types";
import { sanityClient } from "@/lib/sanity.client";
import { debounce, getFormValues } from "@/lib/utils";
import { DEFAULT, SEARCH_FOR_POST_MATCHING_TERM } from "@/groq/queries";

import BlogCard from "./blogCard";
import SearchBar from "../search/searchBar";
import { Skeleton } from "../ui/skeleton";
import Filters from "./filters";

const EMPTY_FILTER_OPTIONS = Object.freeze({
    category: null
});

type Props = {
    posts: Post[];
    availableCategories: Category[];
    pages?: number;
};

export default function BlogList({ posts, availableCategories, pages = 1 }: Props) {
    const [page, setPage] = useState(1);
    const [totalPages] = useState(pages);
    const [blogPosts, setBlogPosts] = useState<Post[]>(posts);
    const [filters, setFilters] = useState(EMPTY_FILTER_OPTIONS);
    const [filterOptions, setFilterOptions] = useState(EMPTY_FILTER_OPTIONS);
    const [isPrevPageDisabled, setIsPrevPageDisabled] = useState(page === 1);
    const [isNextPageDisabled, setIsNextPageDisabled] = useState(page === totalPages || false);
    const [isPostLoading, setIsPostsLoading] = useState(false);

    // TODO: Implement this filtering of blogposts
    // const filteredBlogPosts = useMemo(() => {
    //
    // }, [])

    const handleClearAllFilters = useCallback(() => {
        setFilters(EMPTY_FILTER_OPTIONS);
    }, []);

    const handleSearchChange = async (searchTerm: string) => {
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

    const handleSearchChangeDebounced = useCallback(debounce(handleSearchChange), []);

    const handleSearchFormSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
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

    // TODO: Find a better way of getting all available categories. Maybe use a promise instead, moving it closer to where its needed in filters.
    useEffect(() => {
        setFilterOptions({ ...filters, category: availableCategories })
    }, [availableCategories])

    // TODO: Remove after done
    useEffect(() => { console.log(":: filters: ", filters) }, [filters]);

    return (
        <div>
            {/* Filters & Search */}
            <div className="flex items-center justify-between px-11 py-8">
                <Filters filters={filters} filterOptions={filterOptions} onFilterChange={setFilters} onClearFilters={handleClearAllFilters} />
                <SearchBar onChange={handleSearchChangeDebounced} onSubmit={handleSearchFormSubmit} />
            </div>
            {isPostLoading &&
                <Loading />
            }
            {/* Posts */}
            <div className="px-10">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3">
                    {!isPostLoading && blogPosts.length > 0 && blogPosts.map((post) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
                <div className="flex items-center justify-between py-8 md:justify-end md:space-x-8">
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
