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
    <div className="glass border border-glass rounded-glass md:p-6 p-4 transition-all duration-300 hover:shadow-glow group">
      <div className="flex gap-4 items-center">
        <img src={image} className="w-16 h-16 rounded-lg object-cover shadow-md" />
        <div>
          <h1 className="lg:text-lg sm:text-base text-sm font-display font-bold text-slate-100">
            {course}
          </h1>
          <h4 className="lg:text-base text-sm text-accent font-semibold">
            {Institute}
          </h4>
          <p className="text-xs text-slate-400">{duration}</p>
        </div>
      </div>
      <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">{description}</p>
      <p className="text-slate-400 font-medium mt-3 md:text-sm text-xs">
        <span className="font-bold text-accent mr-2">Skills:</span>
        <span className="text-slate-300">{skills}</span>
      </p>
    </div>
  );
};

export default EducationComponent;
