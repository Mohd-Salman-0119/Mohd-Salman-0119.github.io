import React from "react";
import IconButton from "../IconButton";

const Skill = ({ text, array }) => {
  return (
    <div className="glass border border-glass rounded-glass p-8 hover:shadow-glow transition-all duration-300 skills-card group">
      <h1 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent mb-6 text-center">{text}</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {array?.map((e, idx) => {
          return (
            <IconButton
              key={idx}
              skill={e.skill}
              icon={e.icon}
              className={"border-accent text-accent hover:bg-accent hover:text-primary transition-all rounded-lg p-2 skills-card-name group-hover:scale-110"}
              imgClass={"skills-card-img"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
