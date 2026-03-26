import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
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

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "GraphQL"] },
    { category: "Languages", items: ["JavaScript", "Java", "HTML", "CSS"] },
    { category: "Tools", items: ["Git", "REST API", "Axios", "Firebase"] },
  ];

  return (
    <motion.section
      id="about"
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
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
        >
          Full Stack Developer with 2+ years of experience building scalable web applications
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        <motion.div variants={itemVariants} className="card-modern">
          <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            A passionate <span className="text-primary font-semibold">Full Stack Web Developer</span> specializing in the <span className="text-primary font-semibold">MERN Stack</span>. I transform ideas into elegant, efficient solutions with a keen focus on user experience and code quality.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            With a proven track record in both front-end and back-end development, I excel at solving complex problems and collaborating with teams to build innovative applications.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="card-modern">
          <h3 className="text-2xl font-bold mb-4 text-secondary">My Approach</h3>
          <ul className="space-y-3 text-muted-foreground text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Writing clean, maintainable code following best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Creating responsive, user-friendly interfaces</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Building scalable backend architectures</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Continuous learning and technical growth</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            variants={itemVariants}
            className="card-modern group"
          >
            <h4 className="text-lg font-bold mb-4 text-primary group-hover:text-accent transition-colors">
              {skillGroup.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-3 gap-6 mt-16"
      >
        {[
          { number: "20+", label: "Projects Completed" },
          { number: "500+", label: "DSA Problems Solved" },
          { number: "2+", label: "Years Experience" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="card-modern text-center"
          >
            <div className="text-4xl font-bold gradient-text">{stat.number}</div>
            <p className="text-muted-foreground mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
