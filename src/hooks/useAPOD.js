import { useMemo } from 'react';
import useFetchNASAData from './useFetchNasaData';

function parseResponse(response) {
  return response.data;
}

function useAPOD(query) {
  const params = useMemo(() => {
    return {
      api_key: process.env.REACT_APP_NASA_API_KEY,
      date: query,
    };
  }, [query]);
  const { response, error, loading } = useFetchNASAData(params, parseResponse);
  return { response: response ?? null, error, loading };
}

export default useAPOD;
