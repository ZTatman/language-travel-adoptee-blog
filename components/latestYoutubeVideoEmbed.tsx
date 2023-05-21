import { useGetLatestYoutubeVideos } from "@/hooks";
import { Skeleton } from "@/components/ui/skeleton";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY as string;
const MAX_TO_RETRIEVE = 1;

export default function LatestYoutubeVideoEmbed({ className }: { className?: string } = { className: "" }) {
  const { videos, loading, error } = useGetLatestYoutubeVideos(YOUTUBE_API_KEY, MAX_TO_RETRIEVE);
  const firstVideo = videos?.items?.[0];
  const videoId = firstVideo?.id?.videoId;

  if (error)
    return (
      <div className="mb-2 flex aspect-video w-[min(100%-2rem,26rem)] flex-col justify-center rounded border-2 border-red-200 bg-red-50 p-3 text-center text-sm">
        <p>Woops, looks like there was an error!</p>
        <p className="py-8 text-red-500">{error.message}</p>
        <p>Click below to see more videos!</p>
      </div>
    );

  if (loading || !firstVideo) return <Skeleton className={className} />;

  if (!loading && !firstVideo)
    return (
      <div className="mb-2 flex aspect-video w-[min(100%-2rem,26rem)] flex-col justify-center rounded border-2 bg-slate-50 p-3 text-center text-sm">
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
