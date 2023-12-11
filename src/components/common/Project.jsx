import React from "react";
import TextButton from "../TextButton";
import IconButton from "../IconButton";
import { eyeIcon, githubIcon } from "../../assets/imports";

const Project = (props) => {
  const {
    image,
    projectName,
    duration,
    techStack,
    description,
    sourceCode,
    liveLink,
    flexRow,
  } = props;

  const handleSourceCode = () => {
    window.open(sourceCode, "_blank");
  };
  const handleLiveLink = () => {
    window.open(liveLink, "_blank");
  };

  return (
    <div
      className={`flex flex-col items-center gap-5 border border-blue-900 hover:border-gray-500 lg:p-5 p-3 rounded-md hover:bg-glass transition-all duration-1000 ${flexRow} shadow-sm shadow-blue-900`}
    >
      <img
        src={image}
        className="lg:w-[50%]  rounded-md shadow-md shadow-blue-950"
      />
      <div>
        <h1 className="lg:text-3xl text-lg font-semibold text-gray-200">
          {projectName}
        </h1>
        <p className="text-sm text-gray-500 ">{duration}</p>
        <div className="flex flex-wrap mt-3 gap-2">
          {techStack?.map((tech, index) => (
            <TextButton text={tech} key={index} />
          ))}
        </div>
        <p className="mt-3 overflow-hidden line-clamp-3 md:line-clamp-none text-sm">{description}</p>


        <div className="flex justify-around items-end gap-5 mt-5">
          <IconButton
            skill={"Source Code"}
            icon={githubIcon}
            className={
              "w-full justify-center border-blue-900 hover:border-gray-500 hover:bg-glass transition-all duration-1000 ease-in-out sml:text-sm text-[10px] shadow-md"
            }
            onClick={handleSourceCode}
          />
          <IconButton
            skill={"View Live App"}
            icon={eyeIcon}
            className={
              "w-full justify-center border-blue-900 hover:bg-glass hover:border-gray-500 transition-all duration-1000 ease-in-out sml:text-sm text-[10px] shadow-md"
            }
            onClick={handleLiveLink}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
