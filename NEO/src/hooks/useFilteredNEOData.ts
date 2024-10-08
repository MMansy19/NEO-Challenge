import { useState, useMemo } from "react";
import { useFetchNEOData } from "./useFetchNEOData";

export const useFilteredNEOData = () => {
  const { data, loading, error } = useFetchNEOData();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedOrbitalBody, setSelectedOrbitalBody] = useState<string>("");

  const orbitalBodies = useMemo(() => {
    return Array.from(
      new Set(
        data.flatMap((neo) =>
          neo.close_approach_data.map((approach: any) => approach.orbiting_body)
        )
      )
    );
  }, [data]);

  const filteredData = useMemo(() => {
    return data
      .filter((neo) =>
        neo.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((neo) =>
        selectedOrbitalBody
          ? neo.close_approach_data.some(
              (approach: any) => approach.orbiting_body === selectedOrbitalBody
            )
          : true
      );
  }, [data, searchTerm, selectedOrbitalBody]);

  return {
    filteredData,
    orbitalBodies,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedOrbitalBody,
    setSelectedOrbitalBody,
  };
};
