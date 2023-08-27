import { Url } from "next/dist/shared/lib/router/router";

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
};

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    title: string;
    description: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Title {
    _type: "string";
    asset: Reference;
}

interface Author extends Base {
    name: string;
    bio: Block[];
    slug: Slug;
    image: Image;
}

interface Post extends Base {
    estimatedReadingTime: number;
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    blurDataUrl: Url;
    slug: Slug;
    title: string;
    description: string;
    prevPost: {
        title: string;
        slug: Slug;
    },
    nextPost: {
        title: string;
        slug: Slug;
    }
}
