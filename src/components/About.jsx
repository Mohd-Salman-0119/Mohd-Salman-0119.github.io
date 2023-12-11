import React from "react";

const About = () => {
  return (
    <div className="md:my-32 my-10 text-white nav-link about" id="about">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">About Me</h1>
        <p className="text-center text-md md:text-xl lg:w-[50%] w-[90%] m-auto mt-2 md:mt-4">
          Here are some of my skills on which I have been working on for the
          past 1 years.
        </p>
      </div>
      <div
        className={`flex flex-col items-center gap-5 border border-blue-900 hover:border-gray-500 lg:p-5 p-3 rounded-md transition-all duration-1000  my-5`}
      >
        <p>
          I am Mohd Salman, a Front-end Web Developer with a strong foundation
          in Java, JavaScript, CSS, HTML, REST API, React, Axios, and Tailwind
          CSS. I am currently enhancing my full-stack development skills at
          Masai School. I hold a Bachelor’s degree in Technology Computer
          Science from SR Institute of Management and Technology, BKT Lucknow.
        </p>

        <p>
          My experience includes 6 weeks of Core Virtual Java Training, during
          which I honed my technical skills and applied them to real-world
          scenarios. I have also worked on several projects, including a GPT-3
          Responsive Website, an Online Wine Shop, and an Education Website
          Project, showcasing my ability to deliver practical solutions.
        </p>

        <p>
          In addition to my technical skills, I bring to the table strong soft
          skills, including teamwork, collaboration, and problem-solving. I am a
          certified professional, with credentials from IIT Kanpur in Computer
          System Security and HackerRank Certificates in Basic JavaScript, Basic
          CSS, and Basic Java.
        </p>
      </div>
    </div>
  );
};

export default About;
