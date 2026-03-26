import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants/constants";
import Project from "./common/Project";

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 md:py-32"
    >
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16"
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
        >
          A showcase of my recent work demonstrating expertise in full-stack development,
          modern technologies, and creative problem-solving.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-12"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
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
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 p-8 card-modern text-center max-w-2xl mx-auto"
      >
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-4">
          Interested in seeing more of my work?
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="#contact"
          className="btn-modern inline-block"
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
