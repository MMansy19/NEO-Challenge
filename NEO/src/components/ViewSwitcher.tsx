import React from "react";
import { ButtonComponent } from "./ButtonComponent";
import { CSVDownloadButton } from "./CSVDownloadButton";
import { ViewSwitcherProps } from "../types/types";

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  view,
  setView,
  filteredData,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <ButtonComponent
        text="Chart View"
        onClick={() => setView("chart")}
        variant={view === "chart" ? "primary" : "secondary"}
      />
      <ButtonComponent
        text="Table View"
        onClick={() => setView("table")}
        variant={view === "table" ? "primary" : "secondary"}
      />
      {view === "table" && <CSVDownloadButton data={filteredData} />}
    </div>
  );
};
