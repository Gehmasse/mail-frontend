import { useState } from "react";
import { useFetch } from "./useFetch"; // Import your existing useFetch hook

export function usePaginate(endpoint, initialPage = 1) {
  const [page, setPage] = useState(initialPage);

  const { data, loading, setLoading, error } = useFetch(
    `${endpoint}?page=${page}`
  );

  const pagination = data
    ? {
        currentPage: data.current_page,
        totalPages: data.last_page,
        nextPage: data.next_page_url
          ? () => {
              setLoading(true);
              setPage((prev) => prev + 1);
            }
          : null,
        prevPage: data.prev_page_url
          ? () => {
              setLoading(true);
              setPage((prev) => prev - 1);
            }
          : null,
      }
    : {};

  return {
    data: data?.data,
    loading: loading,
    error,
    pagination,
    setPage,
  };
}
