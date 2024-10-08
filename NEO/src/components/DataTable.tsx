import React from "react";
import { DataTableProps } from "../types/types";

export const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Min Diameter (km)</th>
            <th className="py-3 px-4 text-left">Max Diameter (km)</th>
            <th className="py-3 px-4 text-left">Orbital Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((neo, index) => (
            <tr
              key={index}
              className={`border-t border-gray-200 text-gray-700 text-sm ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="py-3 px-4">{neo.name}</td>
              <td className="py-3 px-4">
                {neo.estimated_diameter.kilometers.estimated_diameter_min}
              </td>
              <td className="py-3 px-4">
                {neo.estimated_diameter.kilometers.estimated_diameter_max}
              </td>
              <td className="py-3 px-4">
                {neo.close_approach_data[0]?.orbiting_body || "Unknown"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
