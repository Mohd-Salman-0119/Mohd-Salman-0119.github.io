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
    <div className="my-12 md:my-24" id="projects">
      <div className="mb-12">
        <h1 className="text-center text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent mb-4">Projects</h1>
        <p className="text-center text-lg md:text-xl md:w-[90%] m-auto text-slate-300 leading-relaxed">
          I've had the privilege of working on diverse projects that showcase innovation and technical excellence. 
          Here are some of my most significant creations that demonstrate my capabilities as a developer.
        </p>
      </div>

      <div className="mt-8 grid gap-8">
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
