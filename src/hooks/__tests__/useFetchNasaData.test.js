import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Hooks
import useFetchNASAData from '../useFetchNasaData';

const mock = new MockAdapter(axios);

describe('useFetchNASAData Hook', () => {
  it('Should runs correctly', async () => {
    const params = {
      api_key: 'jhgSASDasda',
      date: '2021-02-21',
    };
    const apod = {
      explanation: "We've seen this same supernova three times",
      title: 'SN Requiem: A Supernova Seen Three Times So Far',
      url: 'https://apod.nasa.gov/apod/image/2111/MACSJ0138_Hubble_1080.jpg',
    };

    mock.onGet('https://api.nasa.gov/planetary/apod').reply(200, apod);
    const { result, waitForNextUpdate } = renderHook(() => useFetchNASAData(params));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.response.data).toEqual(apod);
  });
});
