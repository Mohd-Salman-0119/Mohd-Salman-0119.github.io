import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { BsDownload } from "react-icons/bs";
import { HiMenuAlt3, HiOutlinePlus } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Events, animateScroll as scroll } from "react-scroll";
import IconButton from "./IconButton";
import { dwonloadIcon } from "../assets/imports";
import { handleDwonloadResume } from "../constants/constants.js";

export const Menu = () => (
  <>
    <a href="#home" className="nav-link home">
      Home
    </a>
    <a href="#about" className="nav-link about">
      About
    </a>
    <a href="#skills" className="nav-link skills">
      Skills
    </a>
    <a href="#projects" className="nav-link projects">
      Projects
    </a>
    <a href="#education">Education</a>
    <a href="#contact" className="nav-link contact">
      Contacts
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
      className={`flex lg:justify-around justify-between items-center cursor-pointer py-3 px-3 lg:px-8 sticky top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-glass shadow-glass backdrop:filter-glass"
          : "bg-transparent"
      }`}
      id="nav-menu"
    >
      <a href="#home" className="flex text-2xl sm:text-3xl items-center">
        <DiCssdeck /> <span>Portfolio</span>
      </a>
      <div className="lg:gap-10 lg:flex hidden gap-4 text-xl">
        <Menu />
      </div>
      <IconButton
        skill="Resume"
        icon={dwonloadIcon}
        className={"border-gray-500 py-1 hidden lg:flex nav-link resume"}
        onClick={handleDwonloadResume}
        id={"resume-button-1"}
      />

      <div className="text-white text-2xl sm:text-3xl lg:hidden">
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
        <div className="flex flex-col lg:hidden text-lg items-start gap-1 py-8 px-10 rounded-md absolute right-8 top-16 z-10 sm:min-w-[221px] bg-glass border-glass shadow-glass backdrop:filter-glass animate-scale-up-center">
          <>
            <Menu />
            <IconButton
              skill="Resume"
              icon={dwonloadIcon}
              className={"border-gray-500 py-1 lg:flex bg-blue-950 mt-3 nav-link resume"}
              onClick={handleDwonloadResume}
              id={"resume-button-1"}
            />
          </>
        </div>
      )}
    </div>
  );
};

export default Navbar;
