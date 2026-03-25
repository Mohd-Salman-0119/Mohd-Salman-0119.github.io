import React from "react";
import { Menu } from "./Navbar";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t border-glass flex flex-col items-center mt-12 py-8 relative z-10">
      <h1 className="text-center text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent md:py-6 py-4">Mohd Salman</h1>
      <div className="lg:gap-10 lg:flex hidden gap-4 text-lg text-slate-300">
        <Menu />
      </div>
      <div className="flex justify-center items-center mt-10 gap-2 md:text-md text-xs text-slate-400">
        <FaRegCopyright />
        <h5>2024 Mohd Salman. All rights reserved</h5>
      </div>
    </div>
  );
};

export default Footer;
