import { useState, useEffect } from "react";
import { fetchNEOData } from "../services/neoService";
import { NeoObject } from "../types/types";

export const useFetchNEOData = () => {
  const [data, setData] = useState<NeoObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const neo = await fetchNEOData();
        setData(neo);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};
