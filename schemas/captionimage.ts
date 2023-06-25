import { defineField, defineType } from "sanity";

export default defineType({
    name: "captionimage",
    title: "Image With Caption",
    type: "image",
    fields: [
        defineField({
            name: "caption",
            title: "Caption",
            type: "string",
        }),
        defineField({
            name: "attribution",
            title: "Attribution",
            type: "string",
        }),
    ],
});
