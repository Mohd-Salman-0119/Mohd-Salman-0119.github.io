import React from "react";
import { masaiImage } from "../assets/imports";
import EducationComponent from "./common/EducationComponent";
import { education } from "../constants/constants";

const Education = () => {
  return (
    <div className="my-12 md:my-24" id="education">
      <div className="mb-12">
        <h1 className="text-center text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent mb-4">Education</h1>
        <p className="text-center text-lg md:text-xl md:w-[60%] m-auto text-slate-300 leading-relaxed">
          My educational journey has been transformative, marked by continuous learning and significant milestones.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        {education.map((e, idx) => (
          <EducationComponent
            image={e.image}
            duration={e.duration}
            course={e.course}
            description={e.description}
            skills={e.skills}
            Institute={e.Institute}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
