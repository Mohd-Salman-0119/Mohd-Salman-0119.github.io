import React from "react";
import { backend, frontend, softSkills, tools } from "../constants/constants";
import Skill from "./common/Skill";

const Skills: React.FC = () => {
  const skillCategories = [
    { title: "Frontend", items: frontend, color: "from-primary to-accent" },
    { title: "Backend", items: backend, color: "from-secondary to-primary" },
    { title: "Tools", items: tools, color: "from-accent to-secondary" },
    { title: "Soft Skills", items: softSkills, color: "from-primary to-secondary" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
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

        .skill-card {
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
      `}</style>

      {/* Header */}
      <div className="mb-16 slide-in">
        <h2 className="section-title text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          Technologies and tools I&apos;ve mastered over 2+ years of development
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className="card-modern skill-card overflow-hidden group"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Category Header */}
            <div className={`h-1 bg-gradient-to-r ${category.color} mb-4 transform origin-left group-hover:scale-x-110 transition-transform duration-300`}></div>
            <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
              {category.title}
            </h3>

            {/* Skills List */}
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:border-primary hover:bg-primary/20 transition-all duration-200 cursor-default"
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>

            {/* Skill Count */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <span className="text-sm text-muted-foreground">
                {category.items.length} technologies
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Info */}
      <div className="mt-16 p-8 card-modern text-center max-w-2xl mx-auto">
        <p className="text-lg text-muted-foreground">
          Always expanding my skillset. Currently exploring <span className="text-primary font-semibold">Advanced Three.js</span> and <span className="text-primary font-semibold">System Design</span>.
        </p>
      </div>
    </section>
  );
};

export default Skills;
