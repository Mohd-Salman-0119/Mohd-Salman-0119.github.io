import React from "react";

const IconButton = ({skill,icon, className,onClick}) => {
  return (
    <div className={`cursor-pointer flex flex-row-reverse gap-1 md:gap-3 items-center rounded-md py-2 border px-3 ${className}`} onClick={onClick}>
      {skill}
      <img src={icon} className="text-lg md:w-8 sml:w-6 w-4" />
    </div>
  );
};

export default IconButton;
