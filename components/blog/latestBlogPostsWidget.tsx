import Image from "next/image";
import Link from "next/link";

import groq from "groq";
import urlFor from "@/lib/urlFor";
import { useQueryBlogPosts } from "@/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const latestBlogPostsQuery = groq`
*[_type == "post"] {
  ...,
  author->{name},
  categories[]->,
  "slug": slug.current,
} | order(createdAt desc)[0...3]`;

type LastestBlogPostsProps = {
  className?: string;
};

export default function LatestBlogPostsWidget({ className = "" }: LastestBlogPostsProps) {
  const { posts, loading, error } = useQueryBlogPosts(latestBlogPostsQuery);
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
        {posts.length >= 1 && posts.map((post: any) => <CardRow key={post.slug} post={post} />)}
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
      className="group flex h-28 items-center justify-center overflow-hidden rounded-md transition-all duration-300 ease-in-out hover:shadow-lg"
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
          <CardTitle className="font-heading text-base line-clamp-1">{post.title}</CardTitle>
          <CardDescription className="font-sans text-xs line-clamp-2">{post.description}</CardDescription>
          <Link className="inline-btn text-xs font-semibold" href="#">
            Read More
          </Link>
        </CardHeader>
      </div>
    </Card>
  );
}
