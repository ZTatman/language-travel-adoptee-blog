import YouTube from "react-youtube";
import getVideoId from "get-video-id";

export default function YoutubePreview({ url }: { url: string }) {
    const { id } = getVideoId(url);
    return (
        <YouTube opts={{
            width: "100%",
            height: "100%",
            playerVars: {
                autoplay: 0,
            },
        }} videoId={id ?? ""} />
    );
}
