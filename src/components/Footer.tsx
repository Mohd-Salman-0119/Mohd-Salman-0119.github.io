import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsEnvelope } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: BsGithub, href: "https://github.com", label: "GitHub" },
    { icon: BsLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: BsTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: BsEnvelope, href: "mailto:mohd@example.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border mt-20 py-16 md:py-20">
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-in {
          animation: slideInUp 0.4s ease-out forwards;
        }

        .social-link {
          transition: all 0.3s ease;
        }

        .social-link:hover {
          transform: scale(1.2) rotate(10deg);
          color: var(--accent);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left slide-in">
            <h3 className="text-2xl font-bold gradient-text mb-2">MS</h3>
            <p className="text-muted-foreground">
              Full-stack developer crafting digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center slide-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Navigate</h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right slide-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-primary p-2"
                  title={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm text-muted-foreground gap-4 slide-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2">
            <FaRegCopyright />
            <span>
              {currentYear} Mohd Salman. All rights reserved.
            </span>
          </div>
          <p className="text-xs">
            Designed & Built with{" "}
            <span className="text-primary">❤️</span> using React, TypeScript & CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
