import React from "react";
import { internshalaImage, InspironLabs } from "../assets/imports";
import ExperienceComponent from "./common/ExperienceComponent";
import { experience } from "../constants/constants";

const Experience = () => {
  return (
    <div className="my-12 md:my-24" id="experience">
      <div className="mb-12">
        <h1 className="text-center text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent mb-4">Experience</h1>
        <p className="text-center text-lg md:text-xl lg:w-[60%] w-[90%] m-auto text-slate-300 leading-relaxed">
          My professional journey showcasing real-world project experience and continuous growth.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
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
