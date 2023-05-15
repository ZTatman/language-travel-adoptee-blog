import { useMemo } from "react";
import { useGetLatestYoutubeVideos } from "@/hooks";
import { Skeleton } from "@/components/ui/skeleton";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default function LatestYoutubeVideoEmbed({ className }: { className?: string } = { className: "" }) {
  const videosParams = useMemo(() => {
    return {
      apiKey: YOUTUBE_API_KEY,
      max: 1,
    };
  }, []);

  const { videos, loading, error } = useGetLatestYoutubeVideos(videosParams.apiKey, videosParams.max);
  const firstVideo = videos?.items?.[0];
  const videoId = firstVideo?.id?.videoId;

  if (error)
    return (
      <div className="flex h-32 max-w-xs flex-col justify-center rounded border-2 border-red-200 bg-red-50 p-3 text-center text-sm">
        <p>Woops, looks like there was an error!</p>
        <p>{error}</p>
        <p>Click below to see more videos!</p>
      </div>
    );

  if (loading || !firstVideo) return <Skeleton className={className} />;

  if (!loading && !firstVideo)
    return (
      <div className="flex h-32 max-w-xs flex-col justify-center rounded border-2 bg-slate-50 p-3 text-center text-sm">
        <p>Woops, looks like there&apos;s no video here!</p>
        <p>Click below to see more videos!</p>
      </div>
    );

  return (
    <>
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
