import { useState, useEffect } from "react";
import { sanityClient } from "@/lib/sanity.client";
/**
 *
 * @param query  The query to run
 * @returns  An object containing the posts, loading state, and error state
 * @example
 * const { posts, loading, error } = useQueryPosts(latestBlogPostsQuery);
 */
export default function useQueryBlogPosts(query: string) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    setError(null);
    sanityClient
      .fetch(query, { signal: abortController.signal })
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, [query]);
  return { posts, loading, error };
}
