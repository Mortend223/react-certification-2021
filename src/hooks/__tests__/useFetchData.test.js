import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import useFetchData from '../useFetchData';

const video = [
  {
    id: 'nmXMgqjQzls',
    title: 'Wizeline',
    description: 'Wizeline',
    thumbnailUrl: 'https://nmXMgqjQzls/mqdefault.jpg',
  },
];

describe('useFetchData Hook', () => {
  it('Should runs correctly', async () => {
    const params = {
      type: 'video',
      part: 'snippet',
      key: 'jhgSASDasda',
      maxResults: 1,
      id: 'someId',
    };

    const { result, wait, rerender } = renderHook(
      ({ url }) => useFetchData(url, params),
      {
        initialProps: {
          // url: 'url1',
          params: {
            type: 'video',
            part: 'snippet',
            key: 'jhgSASDasda',
            maxResults: 1,
            id: 'someId',
          },
        },
      }
    );
    console.log(result.current);

    expect(result.current[0]).toEqual(params);
    expect(result.current[1]).toBe(true);
  });
});
