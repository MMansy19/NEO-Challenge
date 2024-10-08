import React from "react";
import { BarChart } from "../components/BarChart";
import { FilterDropdown } from "../components/FilterDropdown";
import { useFilteredNEOData } from "../hooks/useFilteredNEOData";

export const MainView: React.FC = () => {
  const {
    filteredData,
    orbitalBodies,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedOrbitalBody,
    setSelectedOrbitalBody,
  } = useFilteredNEOData();

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        NEO Data Visualization
      </h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search NEO by name"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Dropdown */}
      <div className="mb-6">
        <FilterDropdown
          options={orbitalBodies}
          selected={selectedOrbitalBody}
          onChange={setSelectedOrbitalBody}
        />
      </div>

      {/* Bar Chart */}
      <BarChart data={filteredData} />
    </div>
  );
};
