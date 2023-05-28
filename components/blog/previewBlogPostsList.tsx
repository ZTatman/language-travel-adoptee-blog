"use client";

import { usePreview } from "@/lib/sanity.preview";
import BlogList from "./blogList";

type Props = {
  query: string;
};

export default function PreviewBlogPostsList({ query }: Props) {
  const posts = usePreview(null, query);
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
