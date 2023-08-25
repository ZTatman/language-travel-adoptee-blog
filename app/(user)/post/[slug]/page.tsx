import PageContent from "./pageContent";
import { sanityClient } from "@/lib/sanity.client";
import { SELECTED_POST } from "@/groq/queries";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params: { slug } }: Props) {
    const post: Post = await sanityClient.fetch(SELECTED_POST, { slug });
    return (
        <PageContent post={post} />
    );
}
