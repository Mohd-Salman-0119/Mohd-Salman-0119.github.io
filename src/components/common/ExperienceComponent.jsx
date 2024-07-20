import React from "react";
import { HiOutlinePlus } from "react-icons/hi2";

const ExperienceComponent = ({ icon, role, company, details, skills, duration }) => {
  return (
    <>
      <div className="border border-blue-900 p-5 rounded-md mt-5 shadow-sm shadow-blue-900">
        <div className="flex gap-3 items-center">
          <img src={icon} className="w-16 h-16 rounded-md" />
          <div>
            <h1 className="lg:text-xl text-lg font-semibold text-gray-200"></h1>
            <h4 className="lg:text-lg text-md text-gray-500 font-semibold">
              {company}
            </h4>
            <p className="text-sm text-gray-500">{duration}</p>
          </div>
        </div>
        <p className="mt-3 text-sm md:text-base">
          {details}
        </p>
        <p className="text-gray-500 font-semibold mt-2">
          <span className="font-bold mr-2">Skills:</span>
          {skills}
        </p>
      </div>
      {/* <div className="border border-blue-900 p-5 rounded-md mt-5 hidden lg:flex justify-center items-center shadow-sm shadow-blue-900">
        <HiOutlinePlus className="text-4xl" />
      </div> */}
    </>
  );
};

export default ExperienceComponent;
