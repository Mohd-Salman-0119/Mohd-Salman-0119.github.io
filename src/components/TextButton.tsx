import React from "react";
import { TextButtonProps } from "../types";

const TextButton: React.FC<TextButtonProps> = ({ text, className = "" }) => {
  return (
    <div
      className={`text-center bg-glass text-xs py-1 px-2 border border-blue-900 rounded-md sm:text-sm shadow-sm ${className}`}
    >
      {text}
    </div>
  );
};

export default TextButton;
