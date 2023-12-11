import React from "react";
import IconButton from "../IconButton";

const Skill = ({ text, array }) => {
  return (
    <div className="border border-blue-900 flex justify-center flex-col items-center rounded-md p-5 shadow-sm shadow-blue-900">
      <h1 className="text-2xl">{text}</h1>
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {array?.map((e, idx) => {
          return (
            <IconButton
              key={idx}
              skill={e.skill}
              icon={e.icon}
              className={"border-gray-500"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
