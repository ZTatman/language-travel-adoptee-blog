import groq from "groq";

export const DEFAULT = groq`
*[_type == "post"] | order(_id)[0...3] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->
}`;

export const PREVIOUS_PAGE = groq`
*[_type == "post" &&  _id < $lastId]| order(_id) [0...3] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->
}`;

export const NEXT_PAGE = groq`
*[_type == "post" &&  _id > $lastId] | order(_id) [0...3] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->
}`;
