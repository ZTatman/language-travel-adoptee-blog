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

export default function LatestBlogPosts({ className = "" }: LastestBlogPostsProps) {
  const { posts, loading, error } = useQueryBlogPosts(latestBlogPostsQuery);
  const hasPosts = posts.length > 0;
  if (error)
    return (
      <div className="flex flex-col justify-center h-32 max-w-xs p-3 text-sm text-center border-2 border-red-200 rounded bg-red-50">
        <p>Woops, looks like there was an error!</p>
        <p>{error}</p>
        <p>Click below to read my blog!</p>
      </div>
    );
  if (loading || !hasPosts)
    return (
      <div className={className}>
        <Skeleton className="w-full h-24 rounded-xl" />
        <Skeleton className="w-full h-24 rounded-xl" />
        <Skeleton className="w-full h-24 rounded-xl" />
      </div>
    );
  if (!loading && !hasPosts)
    return (
      <div className="flex flex-col justify-center h-32 max-w-xs p-3 text-sm text-center border-2 rounded bg-slate-50">
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
      className="flex items-center justify-center h-24 overflow-hidden group rounded-md transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      <div className="w-24 h-full overflow-hidden">
        <Image
          className="object-cover object-center w-full h-full transform transition-all duration-300 ease-in-out group-hover:scale-110"
          width={96}
          height={96}
          src={urlFor(post.mainImage).url()}
          alt={post.title}
        />
      </div>
      <div>
        <CardHeader className="max-w-xs px-3 text-left">
          <CardTitle className="text-base font-heading">{post.title}</CardTitle>
          <CardDescription className="font-sans text-xs line-clamp-2">{post.description}</CardDescription>
          <Link className="text-xs font-semibold inline-btn" href="#">
            Read More
          </Link>
        </CardHeader>
      </div>
    </Card>
  );
}
