import { defineField, defineType } from "sanity";
import YoutubePreview from "./components/youtubePreview";

export default defineType({
    name: "youtube",
    type: "object",
    title: "Youtube Embed",
    fields: [
        defineField({
            name: "url",
            type: "url",
            title: "Youtube Video Url",
        }),
    ],
    preview: {
        select: {
            url: "url",
        },
    },
    components: {
        preview: YoutubePreview,
    },
});
