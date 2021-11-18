import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function defaultParseResponse(response) {
  return response;
}

function useFetchData(url, params, parseResponse = defaultParseResponse) {
  const API_URL = `https://www.googleapis.com/youtube/v3/${url}`;
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(API_URL, { params });
      setResponse(parseResponse(result));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [API_URL, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, error, loading };
}

export default useFetchData;
