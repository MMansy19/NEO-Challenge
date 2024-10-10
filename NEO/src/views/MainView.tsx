import React, { useState } from "react";
import { BarChart } from "../components/BarChart";
import { FilterDropdown } from "../components/FilterDropdown";
import { DataTable } from "../components/DataTable";
import { useFilteredNEOData } from "../hooks/useFilteredNEOData";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ViewSwitcher } from "../components/ViewSwitcher.tsx";
import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";

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

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <p className="flex justify-center items-center h-screen italic text-center text-red-600">
        {error}
      </p>
    );

  return (
    <div className="max-w-5xl flex flex-col gap-2 mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterDropdown
        options={orbitalBodies}
        selected={selectedOrbitalBody}
        onChange={setSelectedOrbitalBody}
      />
      <ViewSwitcher view={view} setView={setView} filteredData={filteredData} />
      {view === "chart" ? (
        <BarChart data={filteredData} />
      ) : (
        <DataTable data={filteredData} />
      )}
    </div>
  );
};
