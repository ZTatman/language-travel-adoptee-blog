import groq from "groq";

export const POSTS_PER_PAGE = 6;

export const TOTAL_POSTS = groq`count(*[_type == "post"])`;

export const TOTAL_PAGES = groq`
*[_type == "post"]| order(_id) [0] {
    "totalPages": count(*[_type == "post"]) / ${POSTS_PER_PAGE}
}`;

export const ALL_CATEGORIES = groq`
*[_type == "category"] | order(title) {
  title, _id
}`;

export const DEFAULT = groq`
*[_type == "post"] | order(_id)[0...${POSTS_PER_PAGE}] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->,
    "blurDataUrl": mainImage.asset->metadata.lqip,
    "pages": count(*[_type == "post"]) / ${POSTS_PER_PAGE}
}`;

export const ALL_POSTS = groq`
*[_type == "post"] | order(_id) {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    categories[]->,
    "blurDataUrl": mainImage.asset->metadata.lqip,
    "pages": 1
}`;

export const PREVIOUS_PAGE = groq`
*[_type == "post" && _id < $lastId] | order(_id) [0...${POSTS_PER_PAGE}] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    "blurDataUrl": mainImage.asset->metadata.lqip,
    categories[]->
}`;

export const NEXT_PAGE = groq`
*[_type == "post" && _id > $lastId] | order(_id) [0...${POSTS_PER_PAGE}] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    author->,
    "blurDataUrl": mainImage.asset->metadata.lqip,
    categories[]->
}`;

export const LATEST_POSTS = groq`
*[_type == "post"] {
    ...,
    author->{name},
    categories[]->,
    "blurDataUrl": mainImage.asset->metadata.lqip,
} | order(createdAt desc)[0...3]`;


export const SELECTED_POST = groq`
*[_type == "post" && slug.current == $slug][0]
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
    "blurDataUrl": mainImage.asset->metadata.lqip,
    "nextPost": *[_type == "post" && ^._createdAt < _createdAt] | order(_createdAt asc)[0] {
        title,slug
    },
    "prevPost": *[_type == "post" && ^._createdAt > _createdAt] | order(_createdAt desc)[0] {
        title,slug
    }
}`;

export const SEARCH_FOR_POST_MATCHING_TERM = groq`
*[(_type == "post" && !(_id in path("drafts.**"))
	&& title match $search || description match $search)] 
	| score(boost(title match $search, 3), boost(description match $search, 2))
	{
        ...,
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
        author->,
        "blurDataUrl": mainImage.asset->metadata.lqip,
        categories[]->,
        "pages": 1,
		_score
    } | order(_score desc) [_score > 0]`;


