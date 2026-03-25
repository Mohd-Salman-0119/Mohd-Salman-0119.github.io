import React from "react";
import { HiOutlinePlus } from "react-icons/hi2";

const ExperienceComponent = ({ icon, role, company, details, skills, duration }) => {
  return (
    <>
      <div className="glass border border-glass rounded-glass p-6 transition-all duration-300 hover:shadow-glow">
        <div className="flex gap-4 items-center">
          <img src={icon} className="w-16 h-16 rounded-lg object-cover shadow-md" />
          <div>
            <h1 className="lg:text-lg text-base font-display font-bold text-slate-100">{role}</h1>
            <h4 className="lg:text-base text-sm text-accent font-semibold">
              {company}
            </h4>
            <p className="text-xs text-slate-400">{duration}</p>
          </div>
        </div>
        <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">
          {details}
        </p>
        <p className="text-slate-400 font-medium mt-3 md:text-sm text-xs">
          <span className="font-bold text-accent mr-2">Skills:</span>
          <span className="text-slate-300">{skills}</span>
        </p>
      </div>
      {/* <div className="border border-blue-900 p-5 rounded-md mt-5 hidden lg:flex justify-center items-center shadow-sm shadow-blue-900">
        <HiOutlinePlus className="text-4xl" />
      </div> */}
    </>
  );
};

export default ExperienceComponent;
