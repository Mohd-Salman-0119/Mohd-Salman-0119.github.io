import React from "react";

const TextButton = ({text,className}) => {
  return <div className={`text-center bg-glass text-sm py-1 px-2 border border-blue-900 rounded-md sml:text-md shadow-sm ${className}`}>{text}</div>;
};

export default TextButton;
