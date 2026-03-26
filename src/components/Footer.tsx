import React from "react";
import { motion } from "framer-motion";
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="border-t border-border mt-20 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">MS</h3>
            <p className="text-muted-foreground">
              Full-stack developer crafting digital experiences.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="text-center">
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
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-primary hover:text-accent transition-colors p-2"
                  title={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-center text-sm text-muted-foreground gap-4"
        >
          <div className="flex items-center gap-2">
            <FaRegCopyright />
            <span>
              {currentYear} Mohd Salman. All rights reserved.
            </span>
          </div>
          <p className="text-xs">
            Designed & Built with{" "}
            <span className="text-primary">❤️</span> using React, TypeScript & Three.js
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
