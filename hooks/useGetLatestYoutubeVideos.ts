import { useEffect, useState } from "react";

interface Item {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  title: string;
}

interface Response {
  etag: string;
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
  regionCode: string;
}

interface YoutubeResponse {
  videos: Response | null;
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
export default function useGetLatestVideos(apiKey: string | undefined, max: number = 1): YoutubeResponse {
  const [videos, setVideos] = useState<Response | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if(!apiKey) return;

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
        return response.json();
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
