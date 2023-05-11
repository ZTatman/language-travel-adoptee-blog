import { sanityClient } from "@/lib/sanity.client";
import groq from "groq";
import { useEffect, useState } from "react";
import useQueryBlogPosts from "@/hooks/useQueryBlogPosts";

const latestBlogPostsQuery = groq`
*[_type == "post"] {
  ...,
  author->{name},
  categories[]->
} | order(createdAt desc)[0...3]`;

export default function LatestBlogPosts({ className }: { className?: string } = { className: "" }) {
  const { latestPosts, loading, error } = useQueryBlogPosts(latestBlogPostsQuery);
  return (
    <div className={className}>
      <ul>
        {latestPosts &&
          latestPosts.length >= 1 &&
          latestPosts.map((post: any) => (
            <li key={post.slug.current}>
              <a href="#">{post.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
