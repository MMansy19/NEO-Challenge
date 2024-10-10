import React, { useState } from "react";
import { BarChart } from "../components/BarChart";
import { DataTable } from "../components/DataTable";
import { useFilteredNEOData } from "../hooks/useFilteredNEOData";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ViewSwitcher } from "../components/ViewSwitcher.tsx";
<<<<<<< HEAD
import { Header } from "../components/Header";
import { SearchComp } from "../components/SearchComp";
=======
import { SearchBar } from "../components/SearchBar";
>>>>>>> parent of 5987418 (enhance UI)

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
<<<<<<< HEAD
    <div className="max-w-5xl flex flex-col gap-2 mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl ">
      <Header />
      <SearchComp
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        orbitalBodies={orbitalBodies}
        selectedOrbitalBody={selectedOrbitalBody}
        setSelectedOrbitalBody={setSelectedOrbitalBody}
=======
    <div className="max-w-5xl flex flex-col gap-2 mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        NEO Data Visualization
      </h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterDropdown
        options={orbitalBodies}
        selected={selectedOrbitalBody}
        onChange={setSelectedOrbitalBody}
>>>>>>> parent of 5987418 (enhance UI)
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
