import { useState, useEffect } from "react";
import fetcher from "./fetcher";

export function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetcher(endpoint, setData, setError, () => setLoading(false));
  }, [endpoint]);

  return { data, loading, setLoading, error };
}
