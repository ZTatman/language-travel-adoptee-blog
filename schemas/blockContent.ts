import { defineType, defineArrayMember } from "sanity";
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
    title: "Block Content",
    name: "blockContent",
    type: "array",
    of: [
        defineArrayMember({
            title: "Block",
            type: "block",
            // Styles let you set what your user can mark up blocks with. These
            // correspond with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [
                { title: "Title", value: "h1" },
                { title: "Heading (Table Of Contents)", value: "h2" },
                { title: "Subheading", value: "h3" },
                { title: "Introduction Paragraph", value: "intro"},
                { title: "Normal", value: "normal" },
                { title: "Blockquote", value: "blockquote" }
            ],
            lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Number", value: "number" },
            ],
            // Marks let you mark up inline text in the block editor.
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                    { title: "Underline", value: "underline" },
                    { title: "Strike", value: "strike-through" },
                    {
                        title: "Highlight",
                        value: "highlight",
                        icon: () => "H",
                    },
                ],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'External link',
                        fields: [
                            {
                                name: 'href',
                                type: 'url',
                                title: 'URL'
                            },
                            {
                                title: 'Open in new tab',
                                name: 'blank',
                                description: 'If enabled, this will allow users to open the link in a new tab, which prevents them from changing the current page.',
                                type: 'boolean'
                            }
                        ]
                    },
                    {
                        name: 'internalLink',
                        type: 'object',
                        title: 'Internal link',
                        icon: () => "IL",
                        fields: [
                            {
                                name: 'reference',
                                type: 'reference',
                                title: 'Reference',
                                to: [
                                    { type: 'post' },
                                    // other types you may want to link to
                                ]
                            }
                        ]
                    },
                ],
            },
        }),
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        defineArrayMember({
            type: "image",
            options: { hotspot: true },
        }),
        defineArrayMember({
            type: "captionimage",
            options: { hotspot: true },
        }),
        defineArrayMember({
            type: "youtube",
        }),
        defineArrayMember({
            type: "tableofcontents",
        }),

    ],
});
