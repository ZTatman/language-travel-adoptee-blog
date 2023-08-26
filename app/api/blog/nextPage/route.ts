import { NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity.client";
import { NEXT_PAGE, TOTAL_POSTS, POSTS_PER_PAGE, TOTAL_PAGES } from "@/groq/queries";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page"));
    const lastId = searchParams.get("lastId");

    if (lastId === null) {
        return NextResponse.json({ posts: [] }, { status: 200 });
    }
    else {
        try {
            const totalNumberOfPosts = await sanityClient.fetch(TOTAL_POSTS);
            const { totalPages } = await sanityClient.fetch(TOTAL_PAGES)

            console.log(":: TOTAL_POSTS: " + totalNumberOfPosts + " POSTS_PER_PAGE: " + POSTS_PER_PAGE + " PAGE: " + page + " LAST_PAGE: " + totalPages)

            const posts = await sanityClient.fetch(NEXT_PAGE, { lastId });

            if (page === Math.ceil(totalPages)) {
                return NextResponse.json({ posts: posts, isLastPage: true }, { status: 200 });
            }
            else {
                return NextResponse.json({ posts: posts, isLastPage: false }, { status: 200 });
            }
        } catch (error) {
            console.log(error);
        }
    }
}
