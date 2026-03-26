import React from "react";
import EducationComponent from "./common/EducationComponent";
import { education } from "../constants/constants";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-32">
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

        .edu-item {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <div className="mb-16 slide-in">
        <h2 className="section-title text-center">
          <span className="gradient-text">Education</span> & Learning
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          My educational journey marked by growth, learning, and key milestones
        </p>
      </div>

      {/* Education Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {education.map((e, idx) => (
          <div key={idx} className="edu-item" style={{ animationDelay: `${idx * 0.1}s` }}>
            <EducationComponent
              image={e.image}
              duration={e.duration}
              course={e.course}
              description={e.description}
              skills={e.skills}
              Institute={e.Institute}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
