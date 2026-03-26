import React from "react";
import ExperienceComponent from "./common/ExperienceComponent";
import { experience } from "../constants/constants";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-in {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .exp-item {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <div className="mb-16 slide-in">
        <h2 className="section-title text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          My journey in tech with roles that shaped my expertise and passion
        </p>
      </div>

      {/* Experience Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {experience.map((item, index) => (
          <div key={index} className="exp-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <ExperienceComponent
              icon={item.image}
              role={item.role}
              details={item.description}
              duration={item.duration}
              company={item.company}
              skills={item.skills}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
