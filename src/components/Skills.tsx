import React from "react";
import { motion } from "framer-motion";
import { backend, frontend, softSkills, tools } from "../constants/constants";
import Skill from "./common/Skill";

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillCategories = [
    { title: "Frontend", items: frontend, color: "from-primary to-accent" },
    { title: "Backend", items: backend, color: "from-secondary to-primary" },
    { title: "Tools", items: tools, color: "from-accent to-secondary" },
    { title: "Soft Skills", items: softSkills, color: "from-primary to-secondary" },
  ];

  return (
    <motion.section
      id="skills"
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
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
        >
          Technologies and tools I&apos;ve mastered over 2+ years of development
        </motion.p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="card-modern overflow-hidden group"
          >
            {/* Category Header */}
            <div className={`h-1 bg-gradient-to-r ${category.color} mb-4 transform origin-left group-hover:scale-x-110 transition-transform duration-300`}></div>
            <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
              {category.title}
            </h3>

            {/* Skills List */}
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:border-primary hover:bg-primary/20 transition-all duration-200 cursor-default"
                >
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>

            {/* Skill Count */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <span className="text-sm text-muted-foreground">
                {category.items.length} technologies
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Proficiency Info */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 p-8 card-modern text-center max-w-2xl mx-auto"
      >
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
          Always expanding my skillset. Currently exploring <span className="text-primary font-semibold">Advanced Three.js</span> and <span className="text-primary font-semibold">System Design</span>.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
