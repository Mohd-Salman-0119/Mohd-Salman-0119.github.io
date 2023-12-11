import React from "react";

const EducationComponent = ({
  image,
  course,
  institute,
  description,
  duration,
  skills,
}) => {
  return (
    <div className="border border-blue-900 hover:border-gray-500 md:p-5 p-3 rounded-md hover:bg-glass transition-all duration-1000 ease-in-out shadow-sm shadow-blue-900">
      <div className="flex gap-3 items-center">
        <img src={image} className="w-16 h-16 rounded-md" />
        <div>
          <h1 className="lg:text-xl sm:text-lg text-sm font-semibold text-gray-200">
            {course}
          </h1>
          <h4 className="lg:text-lg text-md text-gray-500 font-semibold sm:mt-3">
            {institute}
          </h4>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>
      </div>
      <p className="mt-3 text-sm md:text-base text-gray-300">{description}</p>
      <p className="text-gray-500 font-semibold mt-2">
        <span className="font-bold mr-2">Skills:</span>
        {skills}
      </p>
    </div>
  );
};

export default EducationComponent;
