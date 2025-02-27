import { useState, useEffect } from "react";
import { useAuth } from "./AuthProvider";

export function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { token, logout } = useAuth();

  useEffect(() => {
    async function fetcher() {
      try {
        const res = await fetch(
          `http://localhost:8000/?page=${endpoint}&token=${token}`
        );

        if (res.status === 401) logout();

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const json = await res.json();

        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetcher();
  }, [endpoint]);

  return { data, loading, setLoading, error };
}
