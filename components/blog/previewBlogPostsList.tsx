"use client";

import Link from "next/link";
import { usePreview } from "@/lib/sanity.preview";
import BlogList from "./blogList";

type Props = {
  query: string;
};

export default function PreviewBlogPostsList({ query }: Props) {
  const posts = usePreview(null, query);
  return (
    <div>
      <div className="w-full bg-amber-500 p-2 text-center text-white">
        <p className="text-sm">
          In Preview Mode.{" "}
          <Link
            className="underline hover:text-slate-700"
            href="/api/exit-preview"
          >
            Click here
          </Link>
          &nbsp; to exit preivew mode.
        </p>
      </div>

      <BlogList posts={posts} />
    </div>
  );
}
