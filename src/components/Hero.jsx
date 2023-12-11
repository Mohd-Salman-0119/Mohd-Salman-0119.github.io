import React from "react";
import profile from "../assets/profile-pic.png";
import IconButton from "./IconButton";
import { dwonloadIcon, githubIcon } from "../assets/imports";
import {
  handleDwonloadResume,
  handleVisitGitHub,
} from "../constants/constants";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div
      className="sm:mt-10 mt-5 flex gap-5 items-center flex-col-reverse sm:grid sm:grid-cols-2 justify-between text-white"
      id="home"
    >
      <div className="text-center sm:text-left">
        <div className="xl:text-5xl lg:text-4xl text-3xl text-white font-semibold">
          <h1>Hii there👋,</h1>
          <h1 className="my-3">I am Mohd Salman</h1>
        </div>
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:mt-3 mt-2">
          I am a{" "}
          <span className="text-blue-700 font-semibold">
            <Typewriter
              words={[
                "Programmer",
                "MERN Developer",
                "Full Stack Web Developer",
                "Backend Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="md:font-medium xl:text-xl lg:text-lg sml:text-md sm:text-left md:mt-3 mt-1 text-center">
          I'm a go-getter, always up for new challenges! I love diving into
          opportunities to learn and am committed to delivering top-notch
          results. With a positive mindset and a hunger for growth, I'm geared
          up to make a significant impact and accomplish awesome things.
        </p>
        <div className="flex gap-5 mt-5 justify-center sm:justify-start">
          <IconButton
            skill="GitHub"
            icon={githubIcon}
            className={"border-gray-500"}
            onClick={handleVisitGitHub}
          />
          <IconButton
            skill="Resume"
            icon={dwonloadIcon}
            className={"border-gray-500"}
            onClick={handleDwonloadResume}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={profile}
          className="lg:w-[70%] sm:w-[85%] w-[60%] backdrop-blur-0 animate-floating motion-safe shadow-md shadow-blue-800 rounded-[50%]"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};

export default Hero;
