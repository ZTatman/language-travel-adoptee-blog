import groq from "groq";
import Image from "next/image";

import { useQueryBlogPosts } from "@/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const latestBlogPostsQuery = groq`
*[_type == "post"] {
  title,
  "slug": slug.current,
  author->{name},
  "image": mainImage.asset->{url},
  categories[]->
} | order(createdAt desc)[0...3]`;

export default function LatestBlogPosts({ className }: { className?: string } = { className: "" }) {
  const { posts, loading, error } = useQueryBlogPosts(latestBlogPostsQuery);
  const hasPosts = posts.length >= 1;
  if (error)
    return (
      <div className="flex h-32 max-w-xs flex-col justify-center rounded border-2 border-red-200 bg-red-50 p-3 text-center text-sm">
        <p>Woops, looks like there was an error!</p>
        <p>{error}</p>
        <p>Click below to read my blog!</p>
      </div>
    );

  if (loading || !hasPosts) return <Skeleton className={className} />;

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
        {posts.length >= 1 && posts.map((post: any) => <BlogCardRow key={post.slug.current} post={post} />)}
      </ul>
    </>
  );
}

function BlogCardRow({ post, onClick }: { post: any; onClick?: () => void }) {
  return (
    <Card onClick={onClick} className="group flex h-20 items-center justify-center overflow-hidden rounded-xl">
      <div className="hover h-full w-24 overflow-hidden">
        <Image
          className="h-full w-full transform rounded object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110"
          width={96}
          height={96}
          src={post.image.url}
          alt={post.title}
        />
      </div>
      <CardHeader className="w-full px-6 py-3 text-left font-heading">
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
