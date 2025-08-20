// src/api/useApod.js
import { useEffect, useState } from 'react';
import { fetchApod } from './api/';

export const useApod = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApod()
      .then(setData)
      .catch(setError);
  }, []);

  return { data, error };
};
