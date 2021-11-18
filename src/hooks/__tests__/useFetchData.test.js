import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Hooks
import useFetchData from '../useFetchData';

const mock = new MockAdapter(axios);

describe('useFetchData Hook', () => {
  it('Should runs correctly', async () => {
    const params = {
      type: 'video',
      part: 'snippet',
      key: 'jhgSASDasda',
      maxResults: 1,
      id: 'someId',
    };
    const video = [
      {
        id: 'nmXMgqjQzls',
        title: 'Wizeline',
        description: 'Wizeline',
        thumbnailUrl: 'https://nmXMgqjQzls/mqdefault.jpg',
      },
    ];

    mock.onGet('https://www.googleapis.com/youtube/v3/video').reply(200, video);
    const { result, waitForNextUpdate } = renderHook(() => useFetchData('video', params));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.response.data).toEqual(video);
  });
});
