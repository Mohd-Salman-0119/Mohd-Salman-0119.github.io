import React from "react";
import { journeyImage } from "../assets/imports";

const About = () => {
  return (
    <div
      className="my-8 sm:mt-20 md:mt-32 flex flex-col about section"
      id="about"
    >
      <div>
        <h1 className="text-center text-2xl md:text-4xl">About Me</h1>
        <p
          className="text-center text-md md:text-xl lg:w-[50%] m-auto mt-2 md:mt-4"
          id="user-detail-intro"
        >
          Skilled Front-end Developer, honing diverse technologies for the past
          year.
        </p>
      </div>
      <div
        className={`flex md:flex-row flex-col justify-center items-center gap-5 border-t border-b border-blue-900 hover:border-gray-500 lg:py-20 lg:px-10 p-3 rounded-md transition-all duration-1000 md:my-10 my-5 md:text-2xl text-center md:text-center text-sm shadow-sm shadow-blue-900`}
      >
        <p
          className="md:w-[90%] font-normal md:leading-9"
          id="user-detail-intro"
        >
          A proficient{" "}
          <span className="font-medium text-blue-700">
            Full Stack Web Developer
          </span>{" "}
          specializing in{" "}
          <span className="font-medium text-blue-700">MERN Stack</span>,
          front-end, and back-end development. Technical expertise spans{" "}
          <span className="font-medium">
            Java, JavaScript, CSS, HTML, REST API, React, Axios, Tailwind CSS,
            Node.js, Express, MongoDB, and GraphQL
          </span>{" "}
          Demonstrated problem-solving prowess with over 500+ DSA problems
          solved. Passionate about crafting efficient and elegant code, with a
          proven track record in both front-end and back-end development. Excels
          in problem-solving and relishes the opportunity to collaborate with
          teams to build innovative solutions. Ready to leverage technology to
          transform ideas into reality.
        </p>
      </div>
    </div>
  );
};

export default About;
