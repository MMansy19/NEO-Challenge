import React from "react";
import { FilterDropdownProps } from "../types/types";

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="relative md:w-1/2 w-full">
      <select
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-4 pr-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.5 7.5l4 4 4-4H5.5z" />
        </svg>
      </div>
    </div>
  );
};
