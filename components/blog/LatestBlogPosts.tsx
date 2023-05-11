import groq from "groq";
import useQueryBlogPosts from "@/hooks/useQueryBlogPosts";

const latestBlogPostsQuery = groq`
*[_type == "post"] {
  ...,
  author->{name},
  categories[]->
} | order(createdAt desc)[0...3]`;

export default function LatestBlogPosts({ className }: { className?: string } = { className: "" }) {
  const { posts, loading, error } = useQueryBlogPosts(latestBlogPostsQuery);
  console.log(":: posts", posts);
  return (
    <div className={className}>
      <ul>
        {posts.length >= 1 &&
          posts.map((post: any) => (
            <li key={post.slug.current}>
              <a href="#">{post.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
