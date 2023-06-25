import YouTube from "react-youtube";
import getVideoId from "get-video-id";

export default function YoutubePreview({ url }: { url: string }) {
    const { id } = getVideoId(url);
    return (
        <YouTube iframeClassName="object-cover object-center" videoId={id ?? ""} />
    );
}
