import React, { useState } from "react";
import { useFetchNEOData } from "../hooks/useFetchNEOData";
import { BarChart } from "../components/BarChart";
import { FilterDropdown } from "../components/FilterDropdown";

export const MainView: React.FC = () => {
  const { data, loading, error } = useFetchNEOData();
  const [selectedOrbitalBody, setSelectedOrbitalBody] = useState("");

  const filteredData = selectedOrbitalBody
    ? data.filter((neo) => neo.orbiting_body === selectedOrbitalBody)
    : data;

  const orbitalBodies = Array.from(
    new Set(data.map((neo) => neo.orbiting_body))
  );

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
