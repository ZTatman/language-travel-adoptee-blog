import Image from "next/image";

import { Card, CardDescription, CardContent, CardTitle } from "@/components/ui/card";
import Category from "./category";
import ClientSideRoute from "./clientSideRoute";
import urlFor from "@/lib/urlFor";

type Props = {
    post: Post;
};

export default function BlogCard({ post }: Props) {
    return (
        <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <Card className="group mx-auto my-0 h-full w-full max-w-[22rem] cursor-pointer overflow-hidden shadow-lg">
                <div className="flex h-full flex-col">
                    <div className="overflow-hidden">
                        <div className="relative h-52 w-full drop-shadow-lg">
                            <Image
                                className="object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105"
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                fill
                            />
                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-4 transition-all duration-300 ease-in-out">
                                {post.categories && post.categories.length > 0 && (
                                    <div className="flex flex-row flex-wrap gap-2">
                                        {post.categories.map((category) => (
                                            <Category key={category._id} category={category} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <CardContent className="space-y-3 p-8">
                        <CardTitle className="line-clamp-1 font-heading text-xl group-hover:text-sky-500">
                            {post.title}
                        </CardTitle>
                        <CardDescription className="font-sans text-sm">
                            {post.description}
                        </CardDescription>
                    </CardContent>
                    <div className="mt-auto flex flex-row items-center space-x-4 border-t-[1px] px-8 py-2 font-sans text-xs text-gray-600">
                        {/* Author */}
                        <div className="flex flex-row items-center gap-2">
                            <Image
                                className="rounded-full"
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                width={24}
                                height={24}
                            />
                            <span>{post.author.name.split(" ")[0]}</span>
                        </div>
                        {/* Date updated at */}
                        <span className="flex flex-row items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                                <path
                                    fillRule="evenodd"
                                    d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {new Date(post._createdAt).toLocaleDateString("en-us", {
                                month: "short",
                                year: "2-digit",
                            })}
                        </span>
                        <span className="flex flex-row items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>{post.estimatedReadingTime}&nbsp;min</span>
                        </span>
                    </div>
                </div>
            </Card>
        </ClientSideRoute>
    );
}
