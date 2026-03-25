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
    disabled,
  } = props;

  const handleSourceCode = () => {
    window.open(sourceCode, "_blank");
  };
  const handleLiveLink = () => {
    window.open(liveLink, "_blank");
  };

  return (
    <div
      className={`flex flex-col items-center gap-6 glass border border-glass rounded-glass lg:p-8 p-6 transition-all duration-300 ${flexRow} hover:shadow-glow project-card group`}
    >
      <img
        src={image}
        className="lg:w-[50%] w-full rounded-glass shadow-lg object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="w-full">
        <h1 className="lg:text-3xl text-xl font-semibold font-display text-slate-100 project-title mb-2">
          {projectName}
        </h1>
        <p className="text-sm text-accent font-medium">{duration}</p>
        <div className="flex flex-wrap mt-4 gap-2 project-tech-stack">
          {techStack?.map((tech, index) => (
            <TextButton text={tech} key={index} />
          ))}
        </div>
        <p className="mt-4 text-slate-300 text-sm leading-relaxed project-description">
          {description}
        </p>

        <div className="flex justify-around items-end gap-4 mt-6">
          <IconButton
            skill={"Source Code"}
            icon={githubIcon}
            className={
              "w-full justify-center border-accent text-accent hover:bg-accent hover:text-primary transition-all sml:text-sm text-sm rounded-lg project-github-link"
            }
            onClick={handleSourceCode}
          />
          <IconButton
            skill={"Live Demo"}
            icon={eyeIcon}
            className={
              "w-full justify-center border-accent2 text-accent2 hover:bg-accent2 hover:text-primary transition-all sml:text-sm text-sm rounded-lg project-deployed-link md:gap-2"
            }
            disabled={disabled}
            onClick={handleLiveLink}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
