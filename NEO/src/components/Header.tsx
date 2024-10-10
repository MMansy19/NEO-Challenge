import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-row gap-2 items-start justify-center">
      <span className="text-2xl md:text-4xl underline hover:underline-offset-4 decoration-2 hover:decoration-4 hover:text-blue-500  font-bold text-center mb-6 text-gray-800 transition duration-500">
        <a href="https://github.com/MMansy19/NEO-Challenge" target="_blank">
          NEO Data Visualization
        </a>
      </span>
    </div>
  );
};
