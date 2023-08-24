import { NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity.client";
import { NEXT_PAGE } from "@/groq/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lastId = searchParams.get("lastId");

  try {
    const posts = await sanityClient.fetch(NEXT_PAGE, { lastId });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
