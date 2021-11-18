import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Hooks
import useFetchData from '../useFetchData';
import useVideoId from '../useVideoId';

const mock = new MockAdapter(axios);
const video = [
  {
    id: 'nmXMgqjQzls',
    title: 'Wizeline',
    description: 'Wizeline',
    thumbnailUrl: 'https://nmXMgqjQzls/mqdefault.jpg',
  },
];
jest.mock('../useFetchData');

describe('useVideoId Hook', () => {
  it('Should runs correctly', async () => {
    useFetchData.mockReturnValue({
      response: video,
      loading: false,
    });
    mock.onGet('https://www.googleapis.com/youtube/v3/videos').reply(200, video);
    const { result } = renderHook(() => useVideoId('kaSSDsasaeE'));

    expect(result.current.loading).toBe(false);
    expect(result.current.video).toEqual(video);
  });
});
