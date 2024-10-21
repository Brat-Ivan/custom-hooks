import { useEffect, useState } from 'react';

type OptionsType = {
  limit?: number,
  total?: number,
};

export const useFetchMore = (url: string, options?: OptionsType) => {
  const limit = options?.limit || 10;
  const total = options?.total || null;

  const [data, setData] = useState([]);

  const [loadingLimit, setLoadingLimit] = useState(limit);

  const [isOver, setIsOver] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    setIsLoading(true);
      fetch(`${url}?limit=${loadingLimit}`)
      .then(res => res.json())
      .then(data => setData(data))
      .then(() => setIsLoading(false))
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [url, loadingLimit]);

  const fetchMore = () => {
    if (loadingLimit) {
      setLoadingLimit((prev) => prev + limit);
    }

    if (total && (loadingLimit >= total - limit)) {
      setIsOver(true);
    }
  };

  return {
    data,
    error,
    isLoading,
    isOver,
    fetchMore,
  };
};
