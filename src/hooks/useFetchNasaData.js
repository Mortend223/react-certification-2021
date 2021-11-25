import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function defaultParseResponse(response) {
  return response;
}

function useFetchNASAData(params, parseResponse = defaultParseResponse) {
  const API_URL = `https://api.nasa.gov/planetary/apod`;
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(API_URL, { params });
      setResponse(parseResponse(result));
      setError('');
    } catch (err) {
      if (err.response.data.code === 400) {
        setError(err.response.data);
      } else {
        setError(err.response.data);
      }
    } finally {
      setLoading(false);
    }
  }, [API_URL, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, error, loading };
}

export default useFetchNASAData;
