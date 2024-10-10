import React from "react";
import { SearchBarProps } from "../types/types";

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="relative w-full md:w-1/2">
      <input
        type="text"
        placeholder="Search NEO by name"
        className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-[19px] w-6 h-6 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16s1.5-2 4-2 4 2 4 2M12 12a4 4 0 110-8 4 4 0 010 8z"
        />
      </svg>
    </div>
  );
};
