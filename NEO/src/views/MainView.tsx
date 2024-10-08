import React, { useState } from "react";
import { BarChart } from "../components/BarChart";
import { FilterDropdown } from "../components/FilterDropdown";
import { DataTable } from "../components/DataTable";
import { useFilteredNEOData } from "../hooks/useFilteredNEOData";
import { CSVDownloadButton } from "../components/CSVDownloadButton";

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

  const [view, setView] = useState<"chart" | "table">("chart");

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        NEO Data Visualization
      </h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search NEO by name"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
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

      {/* View Switcher */}
      <div className="flex justify-between items-center mb-6">
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition duration-200 ${
            view === "chart"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => setView("chart")}
        >
          Chart View
        </button>
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition duration-200 ${
            view === "table"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => setView("table")}
        >
          Table View
        </button>
        {view === "table" && <CSVDownloadButton data={filteredData} />}
      </div>

      {/* Conditional rendering based on view */}
      {view === "chart" ? (
        <BarChart data={filteredData} />
      ) : (
        <DataTable data={filteredData} />
      )}
    </div>
  );
};
