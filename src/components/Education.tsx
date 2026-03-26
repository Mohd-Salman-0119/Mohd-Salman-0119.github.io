import React from "react";
import { motion } from "framer-motion";
import EducationComponent from "./common/EducationComponent";
import { education } from "../constants/constants";

const Education: React.FC = () => {
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
      id="education"
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
          <span className="gradient-text">Education</span> & Learning
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
        >
          My educational journey marked by growth, learning, and key milestones
        </motion.p>
      </motion.div>

      {/* Education Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid lg:grid-cols-2 gap-8"
      >
        {education.map((e, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <EducationComponent
              image={e.image}
              duration={e.duration}
              course={e.course}
              description={e.description}
              skills={e.skills}
              Institute={e.Institute}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;
