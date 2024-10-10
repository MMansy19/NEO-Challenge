import React from "react";
import ReadmeComponent from "./Readme/ReadmeComp.js";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-row gap-2 items-start justify-center">
      <ReadmeComponent />
    </div>
  );
};
