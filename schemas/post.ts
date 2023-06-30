import { defineField, defineType } from "sanity";

export default defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) =>
                Rule.required()
                    .min(12)
                    .error("Title of at least 12 characters is required")
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "Enter a short description here for the post...",
            type: "string",
            validation: (Rule) =>
                Rule.required()
                    .min(50)
                    .error("Description of at 50 characters is required")
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) =>
                    Rule.required()
                        .error("A slug is required")
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "reference",
            to: { type: "author" },
            validation: (Rule) => Rule.required().error("At least one author is required")
        }),
        defineField({
            name: "mainImage",
            title: "Main image",
            type: "image",
            validation: (Rule) => Rule.required().error("A main image is required"),
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
            validation: (Rule) => Rule.required().min(1).error("At least one category is required")
        }),
        defineField({
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "blockContent",
        }),
    ],
    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});
