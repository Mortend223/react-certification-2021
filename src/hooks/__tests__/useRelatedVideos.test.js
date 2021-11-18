import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Hooks
import useFetchData from '../useFetchData';
import useRelatedVideos from '../useRelatedVideos';

const mock = new MockAdapter(axios);
const videos = [
  {
    id: 'nmXMgqjQzls',
    title: 'Wizeline',
    description: 'Wizeline',
    thumbnailUrl: 'https://nmXMgqjQzls/mqdefault.jpg',
  },
  {
    id: 'shdkhebASKEJ',
    title: 'Wizeline2',
    description: 'Wizeline2',
    thumbnailUrl: 'https://nmXMgqjQzls/mqdefault.jpg',
  },
];
jest.mock('../useFetchData');

describe('useRelatedVideos Hook', () => {
  it('Should runs correctly', async () => {
    useFetchData.mockReturnValue({
      response: videos,
      loadingRelated: false,
    });
    mock.onGet('https://www.googleapis.com/youtube/v3/videos').reply(200, videos);
    const { result } = renderHook(() => useRelatedVideos('Wizeline'));

    expect(result.current.loadingRelated).toBe(false);
    expect(result.current.videos).toEqual(videos);
  });
});
