import React from "react";

const IconButton = ({skill,icon, className,onClick, id,imgClass = ""}) => {
  return (
    <div className={`cursor-pointer flex flex-row-reverse gap-1 md:gap-3 items-center rounded-md py-2 border px-3 ${className}`} onClick={onClick} id={id}>
      {skill}
      <img src={icon} className={`text-lg md:w-8 sml:w-6 w-4 ${imgClass}`} />
    </div>
  );
};

export default IconButton;
