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
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "string",
            // create a rule that makes this field required and gives a custom error message
            validation: (Rule) => Rule.required().error("Alt text is required"),
        }),
    ],
});
