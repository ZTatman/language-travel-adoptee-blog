import groq from "groq";

import PageContent from "./pageContent";
import { sanityClient } from "@/lib/sanity.client";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params: { slug } }: Props) {
    const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->,
        body[]{
            ...,
            markDefs[]{
                ...,
                "slug": reference->slug,
            }
        },
        "nextPost": *[_type == 'post' && ^._createdAt < _createdAt] | order(_createdAt asc)[0] {
            title,slug
        },
        "prevPost": *[_type == 'post' && ^._createdAt > _createdAt] | order(_createdAt desc)[0] {
            title,slug
        }
    }
  `;
    const post: Post = await sanityClient.fetch(query, { slug });
    return (
        <PageContent post={post} />
    );
}
