import groq from "groq";

export const POSTS_PER_PAGE = 3;

export const DEFAULT = groq`
*[_type == "post"] | order(_id)[0...${POSTS_PER_PAGE}] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->
}`;

export const PREVIOUS_PAGE = groq`
*[_type == "post" && _id < $lastId] | order(_id) [0...${POSTS_PER_PAGE}] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->
}`;

export const NEXT_PAGE = groq`
*[_type == "post" && _id > $lastId] | order(_id) [0...${POSTS_PER_PAGE}] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->
}`;

export const TOTAL_NUMBER_OF_POSTS = groq`count(*[_type == "post"])`;

export const LATEST_POSTS = groq`
*[_type == "post"] {
  ...,
  author->{name},
  categories[]->,
} | order(createdAt desc)[0...3]`;


export const SELECTED_POST = groq`
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
}`;


