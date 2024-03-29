import Image from "next/image";
import Link from "next/link";

import urlFor from "@/lib/urlFor";
import { useQueryBlogPosts } from "@/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LATEST_POSTS } from "@/groq/queries";

type LastestBlogPostsProps = {
    className?: string;
};

export default function LatestBlogPostsWidget({
    className = "",
}: LastestBlogPostsProps) {
    const { posts, loading, error } = useQueryBlogPosts(LATEST_POSTS);
    const hasPosts = posts.length > 0;
    if (error)
        return (
            <div className="flex h-32 max-w-xs flex-col justify-center rounded border-2 border-red-200 bg-red-50 p-3 text-center text-sm">
                <p>Woops, looks like there was an error!</p>
                <p>{error}</p>
                <p>Click below to read my blog!</p>
            </div>
        );
    if (loading || !hasPosts)
        return (
            <div className={className}>
                <Skeleton className="h-24 w-full rounded-xl" />
                <Skeleton className="h-24 w-full rounded-xl" />
                <Skeleton className="h-24 w-full rounded-xl" />
            </div>
        );
    if (!loading && !hasPosts)
        return (
            <div className="flex h-32 max-w-xs flex-col justify-center rounded border-2 bg-slate-50 p-3 text-center text-sm">
                <p>Woops, looks like there&apos;s no blog posts here!</p>
                <p>Click below to read my blog!</p>
            </div>
        );
    return (
        <>
            <ul className={className}>
                {posts.length >= 1 &&
                    posts.map((post: any) => <CardRow key={post.slug} post={post} />)}
            </ul>
        </>
    );
}

type CardRowProps = {
    post: Post;
    onClick?: () => void;
};

function CardRow({ post, onClick }: CardRowProps) {
    return (
        <Card
            onClick={onClick}
            className="group flex h-28 items-center justify-center overflow-hidden rounded-md transition-all duration-300 ease-in-out"
        >
            <div className="h-full w-24 overflow-hidden">
                <Image
                    className="h-full w-full transform object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110"
                    width={96}
                    height={96}
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                />
            </div>
            <div>
                <CardHeader className="max-w-xs px-3 text-left">
                    <CardTitle className="line-clamp-1 font-heading text-base">
                        {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 font-sans text-xs">
                        {post.description}
                    </CardDescription>
                    <Link
                        className="inline-btn text-xs font-semibold"
                        href={`/post/${post.slug.current}`}
                    >
                        Read More
                    </Link>
                </CardHeader>
            </div>
        </Card>
    );
}
