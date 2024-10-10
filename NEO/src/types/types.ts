export type SearchCompProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  orbitalBodies: string[];
  selectedOrbitalBody: string;
  setSelectedOrbitalBody: React.Dispatch<React.SetStateAction<string>>;
};

export type ButtonComponentProps = {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "download";
};

export type CloseApproachData = {
  orbiting_body: string;
};

export type NeoObject = {
  name: any;
  close_approach_data: CloseApproachData[];
};

export type BarChartProps = {
  data: any[];
};

export type CSVDownloadButtonProps = {
  data: any[];
};

export type DataTableProps = {
  data: any[];
};

export type FilterDropdownProps = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

export type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export type ViewSwitcherProps = {
  view: "chart" | "table";
  setView: (view: "chart" | "table") => void;
  filteredData: any[];
};
