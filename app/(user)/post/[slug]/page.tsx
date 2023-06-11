import groq from "groq";
import { sanityClient } from "@/lib/sanity.client";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current = $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `;
  const post: Post = await sanityClient.fetch(query, { slug });
  return <div>Post: {slug}</div>;
}
