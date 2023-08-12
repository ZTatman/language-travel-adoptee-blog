import BlogCard from "./blogCard";

type Props = {
    posts: Post[];
};

export default function BlogList({ posts }: Props) {
    return (
        <div>
            {/* Filters & Pagination */}
            <div className="flex items-center justify-between px-16 py-5">
                <div>Filters Here</div>
                <div className="inline-flex items-center space-x-8">
                    <button className="inline-btn">Previous</button>
                    <button className="inline-btn">Next</button>
                </div>
            </div>
            {/* Posts */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 px-10 md:grid-cols-3">
                {posts.map((post) => (
                    <BlogCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}
