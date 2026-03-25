import React from "react";
import { journeyImage } from "../assets/imports";

const About = () => {
  return (
    <div
      className="my-12 sm:mt-24 md:mt-32 flex flex-col about section"
      id="about"
    >
      <div className="mb-12">
        <h1 className="text-center text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent mb-4">About Me</h1>
        <p
          className="text-center text-lg md:text-xl lg:w-[60%] m-auto text-slate-300 leading-relaxed"
          id="user-detail-intro"
        >
          A passionate and versatile developer with a strong foundation in modern web technologies, 
          always eager to learn and grow.
        </p>
      </div>
      <div
        className={`glass border border-glass rounded-glass lg:py-12 lg:px-12 p-8 transition-all duration-300 hover:shadow-glow md:my-12 my-6 text-center md:text-left`}
      >
        <p
          className="md:w-full font-normal text-slate-300 leading-relaxed text-lg"
          id="user-detail-intro"
        >
          I'm a proficient{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-accent">
            Full Stack Web Developer
          </span>{" "}
          specializing in{" "}
          <span className="font-semibold text-accent2">MERN Stack</span> technology. 
          With expertise in{" "}
          <span className="font-semibold text-accent">
            React, Node.js, Express, MongoDB, and modern frontend frameworks
          </span>, 
          I craft scalable and elegant solutions. I've solved 500+ DSA problems and bring a methodical approach to problem-solving. 
          Passionate about writing clean, efficient code and collaborating with teams to transform ideas into innovative digital products. 
          Ready to make a meaningful impact through technology.
        </p>
      </div>
    </div>
  );
};

export default About;
