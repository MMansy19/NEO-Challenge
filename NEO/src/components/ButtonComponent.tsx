import React from "react";
import { ButtonComponentProps } from "../types/types";

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  onClick,
  variant,
}) => {
  const baseStyle =
    "md:text-base text-sm px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition duration-200 ease-in-out";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    download: "bg-green-500 text-white hover:bg-green-600",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};
