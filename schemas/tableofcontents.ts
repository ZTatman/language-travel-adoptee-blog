import { defineField, defineType } from "sanity";
import { BookIcon, OlistIcon } from "@sanity/icons"

export default defineType({
    name: "tableofcontents",
    title: "Table of Contents",
    type: "object",
    icon: OlistIcon,
    fields: [
        defineField({
            name: "sections",
            title: "Sections",
            type: "array",
            of: [
                {
                    name: "section",
                    title: "Section",
                    type: "string",
                    icon: BookIcon,
                }
            ],
            options: {
                sortable: false,
                layout: 'grid'
            },
        })
    ],
})
