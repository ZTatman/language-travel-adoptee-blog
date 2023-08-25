import { NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity.client";
import { PREVIOUS_PAGE } from "@/groq/queries";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lastId = searchParams.get("lastId");

    if (lastId === null) {
        return NextResponse.json({posts: []}, { status: 200 })
    }
    else {
        try {
            const posts = await sanityClient.fetch(PREVIOUS_PAGE, { lastId });
            return NextResponse.json({ posts: posts }, { status: 200 });
        } catch (error) {
            console.log(error);
        }
    }
}
