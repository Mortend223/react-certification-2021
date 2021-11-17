import { renderHook } from '@testing-library/react-hooks';

import useFetchData from '../useFetchData';

describe('useFetchData Hook', () => {
  it('Should runs correctly', async () => {
    const params = {
      type: 'video',
      part: 'snippet',
      key: 'jhgSASDasda',
      maxResults: 1,
      id: 'someId',
    };

    const { result } = renderHook(({ url }) => useFetchData(url, params), {
      initialProps: {
        url: 'url1',
        params: {
          type: 'video',
          part: 'snippet',
          key: 'jhgSASDasda',
          maxResults: 1,
          id: 'someId',
        },
      },
    });

    expect(result.current[0]).toEqual(params);
    expect(result.current[1]).toBe(true);
  });
});
