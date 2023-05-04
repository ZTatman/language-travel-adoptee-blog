import { useMemo } from "react";
import useGetLatestYoutubeVideos from "../../../hooks/useGetLatestYoutubeVideos";
import { Skeleton } from "@/components/ui/skeleton";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
console.log(":: YOUTUBE_API_KEY", YOUTUBE_API_KEY);
const channelLink = (
  <a
    rel="noreferrer"
    className="text-sky-500 hover:text-sky-600 hover:underline"
    target="_blank"
    href="https://www.youtube.com/channel/UCp-HcdqX1iSlUok92r8-t9w"
  >
    Click here to go to my channel!
  </a>
);

export default function LatestYoutubeVideoEmbed({ className }: { className?: string } = { className: "" }) {
  const videosParams = useMemo(() => {
    return {
      apiKey: YOUTUBE_API_KEY,
      max: 1,
    };
  }, []);

  const { videos, loading, error } = useGetLatestYoutubeVideos(videosParams.apiKey, videosParams.max);
  const firstVideo = !loading && videos?.items?.[0];
  const videoId = firstVideo?.id?.videoId;

  if (error)
    return (
      <div className="flex h-32 max-w-xs flex-col justify-center rounded border-2 border-red-200 bg-red-50 p-3 text-center text-sm">
        <p>Woops, looks like there was an error!</p>
        <p>{error}</p>
        {channelLink}
      </div>
    );

  if (!loading && !firstVideo)
    return (
      <div className="flex h-32 max-w-xs flex-col justify-center rounded border-2 bg-slate-50 p-3 text-center text-sm">
        <p>Woops, looks like there&apos;s no video here!</p>
        {channelLink}
      </div>
    );
  return (
    <>
      {loading && <Skeleton className={className} />}
      {firstVideo && (
        <iframe
          className={className}
          id="ytplayer"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          title="Embedded youtube"
        />
      )}
    </>
  );
}
