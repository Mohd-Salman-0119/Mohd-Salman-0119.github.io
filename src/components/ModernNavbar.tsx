import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { BsDownload } from "react-icons/bs";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 border-b border-border backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        nav {
          animation: slideDown 0.5s ease-out;
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .menu-toggle {
          transition: all 0.3s ease;
        }

        .menu-toggle:hover {
          color: var(--primary);
        }

        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold gradient-text">
              MS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-foreground text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <button
              onClick={handleDwonloadResume}
              className="btn-modern inline-flex items-center gap-2"
            >
              <BsDownload size={18} />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="menu-toggle text-foreground"
            >
              {toggleMenu ? (
                <HiOutlineX size={28} />
              ) : (
                <HiMenuAlt3 size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {toggleMenu && (
          <div className="mobile-menu md:hidden pb-6 border-t border-border">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                  onClick={() => setToggleMenu(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  handleDwonloadResume();
                  setToggleMenu(false);
                }}
                className="w-full btn-modern inline-flex items-center justify-center gap-2"
              >
                <BsDownload size={18} />
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavbar;
