import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";
import { handleDwonloadResume } from "../constants/constants";

const ModernNavbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-xl">MS</span>
            </div>
            <span className="gradient-text hidden sm:inline">Mohd Salman</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center gap-1"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                variants={itemVariants}
                href={item.href}
                className="nav-link px-4 py-2 rounded-lg hover:bg-card transition-smooth"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDwonloadResume}
            className="hidden lg:flex items-center gap-2 btn-modern"
          >
            <BsDownload size={18} />
            Resume
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setToggleMenu(!toggleMenu)}
            className="lg:hidden text-primary text-2xl"
          >
            {toggleMenu ? <HiOutlineX /> : <HiMenuAlt3 />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden pb-6 border-t border-border"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2 pt-4"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  variants={itemVariants}
                  href={item.href}
                  onClick={() => setToggleMenu(false)}
                  className="nav-link px-4 py-3 rounded-lg hover:bg-card transition-smooth"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDwonloadResume}
                className="flex items-center justify-center gap-2 btn-modern mt-4 w-full"
              >
                <BsDownload size={18} />
                Resume
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default ModernNavbar;
