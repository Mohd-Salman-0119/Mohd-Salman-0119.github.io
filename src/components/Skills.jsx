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
    <div className="text-white my-8 md:my-20 flex flex-col" id="skills">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">Skills</h1>
        <p className="text-center text-md md:text-xl lg:w-[50%] w-[90%] m-auto mt-2 md:mt-4">
          Here are some of my skills on which I have been working on for the
          past 1 years.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-5 justify-center">
        <Skill text="Frontend" array={frontend} />
        <Skill text="Backend" array={backend} />
        <Skill text="Tools" array={tools} />
        <Skill text="Soft Skills" array={softSkills} />
      </div>
    </div>
  );
};

export default Skills;
