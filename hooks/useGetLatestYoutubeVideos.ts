import { useEffect, useState } from "react";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_LTA_YOUTUBE_API_KEY;

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

interface YoutubeResponse {
  videos: Video[] | null;
  loading: boolean;
  error: Error | null;
}

/**
 *
 * @param {string} apiKey - The API key for the youtube channel
 * @param {number} max - The maximum number of videos to return
 * @returns  An object containing the videos, loading state, and error state
 * @example
 * const { videos, loading, error } = useGetLatestVideos(YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID);
 */
export default function useGetLatestVideos(apiKey: string, max: number = 1): YoutubeResponse {
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    setError(null);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCp-HcdqX1iSlUok92r8-t9w&maxResults=${max}&order=date&key=${apiKey}`,
      { signal: abortController.signal }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch video due to bad response: " + response.status);
        }
      })
      .then((videos) => {
        setVideos(videos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    return () => abortController.abort();
  }, [apiKey, max]);
  return { videos, loading, error };
}
