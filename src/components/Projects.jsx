import React from "react";
import {
  bewakoofSite,
  woodFansSite,
  wineShopSite,
  educationSite,
  gpt3Site,
  reactIcon,
  githubIcon,
  eyeIcon,
} from "../assets/imports";
import TextButton from "./TextButton";
import IconButton from "./IconButton";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants/constants";
import Project from "./common/Project";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white my-6 md:my-20" id="project">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">Projects</h1>
        <p className="text-center text-sm md:text-xl md:w-[90%] m-auto mt-2 md:mt-4">
          I have had the privilege of working on a diverse range of projects,
          both as a contributing team member and in a solo capacity. Here are
          some of the significant projects that I’ve been involved in
        </p>
      </div>

      <div className="mt-5 grid gap-5">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              image={project.image}
              projectName={project.projectName}
              techStack={project.techStack}
              duration={project.duration}
              description={project.description}
              sourceCode={project.sourceCode}
              liveLink={project.liveLink}
              flexRow={project.flexRow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
