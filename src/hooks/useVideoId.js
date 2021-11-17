import { useMemo } from 'react';
import useFetchData from './useFetchData';

function parseResponse(response) {
  return response.data.items.map((video) => ({
    id: video.id,
    title: video.snippet.title,
    description: video.snippet.description,
    thumbnailUrl: video.snippet.thumbnails.medium.url,
  }));
}

function useVideoId(query) {
  const params = useMemo(() => {
    return {
      type: 'video',
      part: 'snippet',
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      maxResults: 1,
      id: query,
    };
  }, [query]);
  const { response, error, loading } = useFetchData('videos', params, parseResponse);

  return { video: response ?? [], error, loading };
}

export default useVideoId;
