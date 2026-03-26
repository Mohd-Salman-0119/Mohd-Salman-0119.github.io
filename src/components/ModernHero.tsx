import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsDownload } from "react-icons/bs";
import { profile } from "../assets/imports";
import { Typewriter } from "react-simple-typewriter";
import { handleDwonloadResume, handleVisitGitHub } from "../constants/constants";

const ModernHero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 pb-10"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl w-full">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.div variants={itemVariants}>
            <span className="text-primary text-lg font-semibold">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Mohd Salman</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-muted-foreground">
            I&apos;m a{" "}
            <span className="text-primary">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Specialist",
                  "Backend Engineer",
                  "Problem Solver",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-lg"
          >
            I build exceptional digital experiences with modern technologies. Passionate about
            creating scalable solutions and delivering high-quality code that makes an impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVisitGitHub}
              className="btn-modern flex items-center gap-2 group"
            >
              <BsGithub className="group-hover:rotate-12 transition-transform" />
              GitHub
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDwonloadResume}
              className="btn-modern-outline flex items-center gap-2 group"
            >
              <BsDownload className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 mt-12 text-center md:text-left flex-wrap"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">20+</span>
              <span className="text-muted-foreground">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">2+</span>
              <span className="text-muted-foreground">Years Exp</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">50+</span>
              <span className="text-muted-foreground">Clients</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-20 animate-glow-pulse"></div>

            {/* Image Container */}
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-primary/30 bg-card p-2">
              <img
                src={profile}
                alt="Mohd Salman"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ float: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              animate={{ float: -1 }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center">
          <span className="text-muted-foreground text-sm">Scroll to explore</span>
          <div className="flex justify-center mt-2">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-2 bg-primary rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernHero;
