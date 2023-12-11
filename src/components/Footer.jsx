import React from "react";
import { Menu } from "./Navbar";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t flex flex-col items-center border-blue-900 mt-10 text-white py-5">
      <h1 className="text-center text-3xl md:text-4xl md:py-6">Mohd Salman</h1>
      <div className="lg:gap-10 lg:flex hidden gap-4 text-xl">
        <Menu />
      </div>
      <div className="flex justify-center items-center mt-10 gap-2 md:text-md text-xs">
        <FaRegCopyright />
        <h5>2023 Mohd Salman. All right reserved</h5>
      </div>
    </div>
  );
};

export default Footer;
