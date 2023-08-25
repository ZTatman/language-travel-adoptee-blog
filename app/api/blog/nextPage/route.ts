import { NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity.client";
import { NEXT_PAGE, TOTAL_NUMBER_OF_POSTS, POSTS_PER_PAGE } from "@/groq/queries";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page"));
    const lastId = searchParams.get("lastId");

    if (lastId === null) {
        return NextResponse.json({ posts: [] }, { status: 200 });
    }
    else {
        try {
            const totalNumberOfPosts = await sanityClient.fetch(TOTAL_NUMBER_OF_POSTS);
            const lastPage = Math.ceil(totalNumberOfPosts / POSTS_PER_PAGE);
            const posts = await sanityClient.fetch(NEXT_PAGE, { lastId });
            if (page === lastPage) {
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
