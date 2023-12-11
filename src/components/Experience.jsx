import React from "react";
import { internshalaImage } from "../assets/imports";
import { HiOutlinePlus } from "react-icons/hi2";

const Experience = () => {
  return (
    <div className="text-white" id="experience">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">Experience</h1>
        <p className="text-center text-md md:text-xl lg:w-[50%] w-[90%] m-auto mt-2 md:mt-4">
          Here are my overall experience.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="border border-blue-900 p-5 rounded-md mt-5 shadow-sm shadow-blue-900">
          <div className="flex gap-3 items-center">
            <img src={internshalaImage} className="w-16 h-16 rounded-md" />
            <div>
              <h1 className="lg:text-xl text-lg font-semibold text-gray-200">
                Core Java
              </h1>
              <h4 className="lg:text-lg text-md text-gray-500 font-semibold">
                Internshala Pvt. Ltd.
              </h4>
              <p className="text-sm text-gray-500">January-2022 - March-2022</p>
            </div>
          </div>
          <p className="mt-3 text-sm md:text-base">
            Completed intensive 6-week Core Java training at Internshala.
            Specialized in desktop application development.
          </p>
          <p className="text-gray-500 font-semibold mt-2">
            <span className="font-bold mr-2">Skills:</span>Core Java, XML
          </p>
        </div>
        <div className="border border-blue-900 p-5 rounded-md mt-5 hidden lg:flex justify-center items-center shadow-sm shadow-blue-900">
          <HiOutlinePlus className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
