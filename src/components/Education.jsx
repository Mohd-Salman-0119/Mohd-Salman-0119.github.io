import React from "react";
import { masaiImage } from "../assets/imports";
import EducationComponent from "./common/EducationComponent";
import { education } from "../constants/constants";

const Education = () => {
  return (
    <div className="my-6 md:my-20" id="education">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">Education</h1>
        <p className="text-center text-sm md:text-xl md:w-[50%] m-auto mt-2 md:mt-4">
        My educational journey has been transformative, marked by self-discovery and key milestones.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-5">
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
