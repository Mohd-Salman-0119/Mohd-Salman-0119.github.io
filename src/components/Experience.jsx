import React from "react";
import { internshalaImage, InspironLabs } from "../assets/imports";
import ExperienceComponent from "./common/ExperienceComponent";
import { experience } from "../constants/constants";

const Experience = () => {
  return (
    <div className="text-white" id="experience">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">Experience</h1>
        <p className="text-center text-md md:text-xl lg:w-[50%] w-[90%] m-auto mt-2 md:mt-4">
          Here are my overall experience.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        {experience.map((item, index) => (
          <ExperienceComponent
            key={index}
            icon={item.image}
            role={item.role}
            details={item.description}
            duration={item.duration}
            company={item.company}
            skills={item.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
