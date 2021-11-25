import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Hooks
import useFetchNASAData from '../useFetchNasaData';
import useAPOD from '../useAPOD';

jest.mock('../useFetchNasaData');

const mock = new MockAdapter(axios);
const apod = {
  explanation: "We've seen this same supernova three times",
  title: 'SN Requiem: A Supernova Seen Three Times So Far',
  url: 'https://apod.nasa.gov/apod/image/2111/MACSJ0138_Hubble_1080.jpg',
};
jest.mock('../useFetchData');

describe('useAPOD Hook', () => {
  it('Should runs correctly', async () => {
    useFetchNASAData.mockReturnValue({
      response: apod,
      loading: false,
    });
    mock.onGet('https://api.nasa.gov/planetary/apod').reply(200, apod);
    const { result } = renderHook(() => useAPOD('2021-02-21'));

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toEqual(apod);
  });
});
