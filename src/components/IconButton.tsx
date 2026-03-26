import React from "react";
import { IconButtonProps } from "../types";

const IconButton: React.FC<IconButtonProps> = ({
  skill,
  icon,
  className = "",
  imgClass = "",
  onClick,
  id,
  disabled = false,
}) => {
  return (
    <div
      className={`cursor-pointer flex flex-row-reverse gap-1 md:gap-3 items-center rounded-md py-2 border px-3 ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={!disabled ? onClick : undefined}
      id={id}
    >
      {skill}
      <img src={icon} className={`text-lg md:w-8 sml:w-6 w-4 ${imgClass}`} />
    </div>
  );
};

export default IconButton;
