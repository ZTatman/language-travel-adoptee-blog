import BlogCard from "./blogCard";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 px-10 py-24 md:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}
