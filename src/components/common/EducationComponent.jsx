import React from "react";

const EducationComponent = ({
  image,
  course,
  Institute,
  description,
  duration,
  skills,
}) => {
  return (
    <div className="border-t border-b border-blue-900 hover:border-gray-500 md:p-5 p-3 rounded-md transition-all duration-1000 ease-in-out shadow-sm shadow-blue-900 group">
      <div className="flex gap-3 items-center">
        <img src={image} className="w-16 h-16 rounded-md" />
        <div>
          <h1 className="lg:text-xl sm:text-lg text-sm font-semibold text-gray-200">
            {course}
          </h1>
          <h4 className="lg:text-lg text-xs text-gray-500 font-semibold">
            {Institute}
          </h4>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>
      </div>
      <p className="mt-3 text-sm md:text-base text-gray-300 md:line-clamp-none line-clamp-3 group-hover:line-clamp-none transition-all duration-1000 ease">{description}</p>
      <p className="text-gray-500 font-semibold mt-2 md:text-base text-sm">
        <span className="font-bold mr-2">Skills:</span>
        {skills}
      </p>
    </div>
  );
};

export default EducationComponent;
