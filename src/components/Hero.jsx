import React from "react";
import IconButton from "./IconButton";
import { downloadIcon, githubIcon, profile } from "../assets/imports";
import {
  handleDownloadResume,
  handleVisitGitHub,
} from "../constants/constants";
import { Typewriter } from "react-simple-typewriter";
import { ThreeDHero } from "./ThreeDHero";

const Hero = () => {
  return (
    <div
      className="sm:mt-24 mt-8 flex gap-8 items-center flex-col-reverse sm:grid sm:grid-cols-2 justify-between"
      id="home"
    >
      <div className="text-center sm:text-left">
        <div className="xl:text-6xl lg:text-5xl text-4xl font-display font-bold text-slate-100">
          <h1 className="text-transparent bg-clip-text bg-gradient-accent">Hi there</h1>
          <h1 className="my-3" id="user-detail-name">I'm Mohd Salman</h1>
        </div>
        <h1 className="xl:text-2xl lg:text-xl text-lg md:mt-4 mt-3 font-display font-semibold text-slate-300">
          I am a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-accent font-bold">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Specialist",
                "Backend Engineer",
                "UI/UX Enthusiast",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="md:font-medium xl:text-lg lg:text-base text-base sm:text-left md:mt-5 mt-3 text-slate-300 user-detail-intro leading-relaxed">
          I'm a passionate developer with a love for building elegant solutions. Always eager to learn, 
          I thrive on challenges and am committed to creating exceptional digital experiences. 
          Let's build something amazing together!
        </p>
        <div className="flex gap-4 mt-8 justify-center sm:justify-start">
          <IconButton
            skill="GitHub"
            icon={githubIcon}
            className={"border-accent text-accent hover:bg-accent hover:text-primary transition-all rounded-lg px-4 py-2 contact-github"}
            onClick={handleVisitGitHub}
          />
          <IconButton
            skill="Download Resume"
            icon={downloadIcon}
            className={"border-accent2 text-accent2 hover:bg-accent2 hover:text-primary transition-all rounded-lg px-4 py-2"}
            onClick={handleDownloadResume}
            id={"resume-button-3"}
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="relative w-full">
          <ThreeDHero />
          <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay rounded-glass" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
