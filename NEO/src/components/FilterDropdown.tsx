// src/components/FilterDropdown.tsx
import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

interface FilterDropdownProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Orbital Body</InputLabel>
      <Select
        value={selected}
        onChange={(e) => onChange(e.target.value as string)}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
