import { defineField, defineType } from "sanity";

export default defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) =>
                Rule.required()
                    .min(4)
                    .max(24)
                    .error(
                        "A title is required and must be between 4 and 24 characters!"
                    ),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],
});
