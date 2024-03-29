import React, { memo } from "react";
import { FormEvent } from "react";

type Props = {
    onChange: (e: string) => void;
    onSubmit?: ((e: FormEvent<HTMLFormElement>) => void) | undefined;
}

function SearchBar({
    onChange,
    onSubmit = undefined,
}: Props) {
    return (
        <div>
            <form className="flex items-center" onSubmit={onSubmit}>
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-slate-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                    </div>
                    <div>
                        <input
                            type="search"
                            id="search"
                            name="search"
                            title="No special characters are allowed."
                            pattern="^[A-Za-z0-9]*$"
                            className="block w-full appearance-none rounded-md border border-input bg-transparent p-2.5 pl-10 text-sm text-slate-700 placeholder:text-muted-foreground focus:border-sky-500  focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-sky-500 dark:focus:ring-sky-500 invalid:[&:not(:placeholder-shown)]:border-red-500"
                            placeholder="Search the blog"
                            onChange={(e) => onChange(e.target.value)}
                            required />
                    </div>
                </div>
                <button type="submit" className="ml-2 rounded-md border border-sky-600 bg-sky-600 p-2.5 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form >
        </div >
    );
}

export default memo(SearchBar);
