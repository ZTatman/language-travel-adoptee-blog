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
*[_type == "post" && _id < $lastId] | order(_id desc) [0...${POSTS_PER_PAGE}] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->
}`;

export const NEXT_PAGE = groq`
*[_type == "post" && _id > $lastId] | order(_id asc) [0...${POSTS_PER_PAGE}] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->
}`;

export const TOTAL_NUMBER_OF_POSTS = groq`count(*[_type == "post"])`;
