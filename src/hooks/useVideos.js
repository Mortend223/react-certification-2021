import { useMemo } from 'react';
import useFetchData from './useFetchData';

function parseResponse(response) {
  return response.data.items.map((video) => ({
    id: video.id.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
    thumbnailUrl: video.snippet.thumbnails.medium.url,
  }));
}

function useVideos(query) {
  const params = useMemo(() => {
    return {
      type: 'video',
      part: 'snippet',
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      maxResults: 20,
      q: query,
    };
  }, [query]);
  const { response, error, loading } = useFetchData('search', params, parseResponse);
  return { videos: response ?? [], error, loading };
}

export default useVideos;
