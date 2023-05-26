import { useState, useEffect } from "react";
import { sanityClient } from "@/lib/sanity.client";

/**
 *
 * @param {string} query  The query to run
 * @returns {object} An object containing the posts, loading state, and error state
 * @example
 * const { posts, loading, error } = useQueryPosts(latestBlogPostsQuery);
 */
export default function useQueryBlogPosts(query: string): object {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if(!query) return;
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
