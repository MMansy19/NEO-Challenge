import React, { useState } from "react";
import { useFetchNEOData } from "../hooks/useFetchNEOData";
import { BarChart } from "../components/BarChart";
import { FilterDropdown } from "../components/FilterDropdown";

export const MainView: React.FC = () => {
  const { data, loading, error } = useFetchNEOData();
  const [selectedOrbitalBody, setSelectedOrbitalBody] = useState<string>("");

  // Extract all unique orbital bodies
  const orbitalBodies = Array.from(
    new Set(
      data.flatMap((neo) =>
        neo.close_approach_data.map((approach: any) => approach.orbiting_body)
      )
    )
  );

  // Filter NEOs based on the selected orbital body
  const filteredData = selectedOrbitalBody
    ? data.filter((neo) =>
        neo.close_approach_data.some(
          (approach: any) => approach.orbiting_body === selectedOrbitalBody
        )
      )
    : data;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <FilterDropdown
        options={orbitalBodies}
        selected={selectedOrbitalBody}
        onChange={setSelectedOrbitalBody}
      />
      <BarChart data={filteredData} />
    </div>
  );
};
