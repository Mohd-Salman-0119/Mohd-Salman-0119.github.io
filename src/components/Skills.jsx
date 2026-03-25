import React from "react";
import IconButton from "./IconButton";
import {
  reactIcon,
  htmlIcon,
  cssIcon,
  tailwindIcon,
  reduxIcon,
  javascriptIcon,
  javaIcon,
  mangoDBIcon,
  nodeIcons,
  expressIcon,
  jsonIcon,
  appwriteIcon,
  apiIcon,
  firebaseIcon,
} from "../assets/imports";
import { backend, frontend, softSkills, tools } from "../constants/constants";
import Skill from "./common/Skill";

const Skills = () => {
  return (
    <div className="my-12 md:my-24 flex flex-col" id="skills">
      <div className="mb-12">
        <h1 className="text-center text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent mb-4">Skills</h1>
        <p className="text-center text-lg md:text-xl lg:w-[60%] w-[100%] m-auto text-slate-300 leading-relaxed">
          A comprehensive collection of technologies and tools I've mastered over my development journey. 
          Each skill represents hands-on experience and continuous learning.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <Skill text="Frontend" array={frontend} />
        <Skill text="Backend" array={backend} />
        <Skill text="Tools" array={tools} />
        <Skill text="Soft Skills" array={softSkills} />
      </div>
    </div>
  );
};

export default Skills;
