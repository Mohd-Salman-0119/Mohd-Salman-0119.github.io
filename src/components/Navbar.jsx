import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { BsDownload } from "react-icons/bs";
import { HiMenuAlt3, HiOutlinePlus } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Events, animateScroll as scroll } from "react-scroll";
import IconButton from "./IconButton";
import { downloadIcon } from "../assets/imports";
import { handleDownloadResume } from "../constants/constants.js";

export const Menu = () => (
  <>
    <a href="#home" className="nav-link home hover:text-accent transition-colors">
      Home
    </a>
    <a href="#about" className="nav-link about hover:text-accent transition-colors">
      About
    </a>
    <a href="#skills" className="nav-link skills hover:text-accent transition-colors">
      Skills
    </a>
    <a href="#projects" className="nav-link projects hover:text-accent transition-colors">
      Projects
    </a>
    <a href="#education" className="hover:text-accent transition-colors">Education</a>
    <a href="#contact" className="nav-link contact hover:text-accent transition-colors">
      Contact Me
    </a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setToggleMenu((p) => !p);
  };

  return (
    <div
      className={`flex lg:justify-around justify-between items-center cursor-pointer py-4 px-3 lg:px-8 sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-glass shadow-glass backdrop:filter-glass border-b border-glass"
          : "bg-transparent"
      }`}
      id="nav-menu"
    >
      <a href="#home" className="flex text-2xl sm:text-3xl items-center gap-2 font-bold bg-gradient-accent bg-clip-text text-transparent hover:scale-105 transition-transform">
        <DiCssdeck className="text-accent" /> <span>Portfolio</span>
      </a>
      <div className="lg:gap-10 lg:flex hidden gap-4 text-lg font-medium text-slate-300">
        <Menu />
      </div>
      <IconButton
        skill="Resume"
        icon={downloadIcon}
        className={"border-accent text-accent py-2 px-4 hidden lg:flex nav-link resume hover:bg-accent hover:text-primary transition-all rounded-lg"}
        onClick={handleDownloadResume}
        id={"resume-button-1"}
      />

      <div className="text-accent text-2xl sm:text-3xl lg:hidden hover:text-accent2 transition-colors">
        {toggleMenu ? (
          <RxCross2
            onClick={handleToggleMenu}
            className="transition-all duration-100 ease-in"
          />
        ) : (
          <HiMenuAlt3
            onClick={handleToggleMenu}
            className="transition-all duration-100 ease-in"
          />
        )}
      </div>
      {toggleMenu && (
        <div className="flex flex-col lg:hidden text-lg items-start gap-3 py-8 px-10 rounded-glass absolute right-8 top-16 z-10 sm:min-w-[240px] bg-glass border border-glass shadow-glass backdrop:filter-glass animate-scale-up-center font-medium text-slate-300">
          <Menu />
          <IconButton
            skill="Resume"
            icon={downloadIcon}
            className={"border-accent text-accent py-2 px-4 mt-3 nav-link resume hover:bg-accent hover:text-primary transition-all rounded-lg"}
            onClick={handleDownloadResume}
            id={"resume-button-2"}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
