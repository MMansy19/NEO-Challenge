import React from "react";

interface CSVDownloadButtonProps {
  data: any[];
}

export const CSVDownloadButton: React.FC<CSVDownloadButtonProps> = ({
  data,
}) => {
  const downloadCSV = () => {
    const csvRows = [
      ["Name", "Min Diameter (km)", "Max Diameter (km)", "Orbital Body"],
      ...data.map((neo) => [
        neo.name,
        neo.estimated_diameter.kilometers.estimated_diameter_min,
        neo.estimated_diameter.kilometers.estimated_diameter_max,
        neo.close_approach_data[0]?.orbiting_body || "Unknown",
      ]),
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvRows.map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "neo_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      onClick={downloadCSV}
    >
      Download CSV
    </button>
  );
};
