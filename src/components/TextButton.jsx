import React from "react";

const TextButton = ({text,className}) => {
  return <div className={`text-center glass text-xs py-2 px-3 border border-accent rounded-lg sm:text-sm text-slate-300 hover:border-accent2 hover:text-accent2 transition-colors ${className}`}>{text}</div>;
};

export default TextButton;
