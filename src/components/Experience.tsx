import React from "react";
import { motion } from "framer-motion";
import ExperienceComponent from "./common/ExperienceComponent";
import { experience } from "../constants/constants";

const Experience: React.FC = () => {
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

  return (
    <motion.section
      id="experience"
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
          Professional <span className="gradient-text">Experience</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
        >
          My journey in tech with roles that shaped my expertise and passion
        </motion.p>
      </motion.div>

      {/* Experience Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid lg:grid-cols-2 gap-8"
      >
        {experience.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ExperienceComponent
              icon={item.image}
              role={item.role}
              details={item.description}
              duration={item.duration}
              company={item.company}
              skills={item.skills}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
