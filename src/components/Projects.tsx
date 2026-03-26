import React from "react";
import { projects } from "../constants/constants";
import Project from "./common/Project";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-in {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .project-item {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <div className="mb-16 slide-in">
        <h2 className="section-title text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          A showcase of my recent work demonstrating expertise in full-stack development,
          modern technologies, and creative problem-solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="project-item" style={{ animationDelay: `${index * 0.15}s` }}>
            <Project
              image={project.image}
              projectName={project.projectName}
              techStack={project.techStack}
              duration={project.duration}
              description={project.description}
              sourceCode={project.sourceCode}
              liveLink={project.liveLink}
              flexRow={project.flexRow}
              disabled={project.disabled}
            />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 p-8 card-modern text-center max-w-2xl mx-auto slide-in">
        <p className="text-lg text-muted-foreground mb-4">
          Interested in seeing more of my work?
        </p>
        <a
          href="#contact"
          className="btn-modern inline-block"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Projects;
