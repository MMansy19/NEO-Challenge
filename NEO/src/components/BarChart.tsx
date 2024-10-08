import React from "react";
import { Chart } from "react-google-charts";

interface BarChartProps {
  data: any[];
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = [
    ["Name", "Min Diameter", "Max Diameter"],
    ...data.map((neo) => [
      neo.name,
      neo.estimated_diameter.kilometers.estimated_diameter_min,
      neo.estimated_diameter.kilometers.estimated_diameter_max,
    ]),
  ];

  const options = {
    title: "NEO Diameter Visualization",
    chartArea: { width: "50%" },
    hAxis: { title: "Diameter (km)", minValue: 0 },
    vAxis: { title: "NEO" },
  };

  return (
    <Chart
      chartType="BarChart"
      data={chartData}
      options={options}
      width="100%"
      height="400px"
    />
  );
};