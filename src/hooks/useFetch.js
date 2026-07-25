import { useEffect, useState } from "react";

/*
  Custom Hook: useFetch

  Purpose:
  Fetch data from any API endpoint and provide:
  - data
  - loading state
  - error state

  This keeps our page components clean.
*/

function useFetch(url) {
  // Stores the fetched data.
  const [data, setData] = useState([]);

  // Tracks whether the request is still loading.
  const [isLoading, setIsLoading] = useState(true);

  // Stores any error that occurs.
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Unable to fetch data.");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;