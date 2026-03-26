import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  MdEventNote,
  MdLocalPhone,
  MdLocationPin,
  MdOutlineMarkEmailRead,
} from "react-icons/md";
import { FaGithub, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import {
  handleVisitEmail,
  handleVisitGitHub,
  handleVisitLinkedIn,
} from "../constants/constants";
import { CiLinkedin } from "react-icons/ci";
import emailjs from "emailjs-com";

const Contacts: React.FC = () => {
  const [send, setSend] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_0yxy0t8",
        "template_sydt581",
        e.currentTarget,
        "VqRu7XVgGoTX3JrVY"
      )
      .then(
        (result) => {
          setSend(true);
          setIsLoading(false);
          e.currentTarget.reset();
          setTimeout(() => setSend(false), 3000);
        },
        (error) => {
          console.log(error.text);
          setSend(false);
          setIsLoading(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    { icon: MdLocalPhone, text: "+91 8273691527", id: "contact-phone" },
    { icon: MdEmail, text: "salmanansari910550@gmail.com", id: "contact-email" },
    { icon: MdLocationPin, text: "Pilibhit, Uttar Pradesh", id: "location" },
  ];

  const socialLinks = [
    { icon: FaGithub, onClick: handleVisitGitHub, id: "contact-github", label: "GitHub" },
    { icon: MdEmail, onClick: handleVisitEmail, id: "contact-email-btn", label: "Email" },
    { icon: CiLinkedin, onClick: handleVisitLinkedIn, id: "contact-linkedin", label: "LinkedIn" },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 md:py-32"
    >
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16"
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
        >
          I&apos;m always open to new opportunities and interesting projects. Feel free to reach out!
        </motion.p>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="card-modern">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Let&apos;s Connect
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              I&apos;m currently looking for new opportunities and exciting projects. My inbox is always open for collaboration, questions, or just to say hello!
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.id}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <span className="text-lg">{info.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, onClick, id, label }) => (
                  <motion.button
                    key={id}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClick}
                    id={id}
                    title={label}
                    className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:border-primary hover:bg-primary/20 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="card-modern"
        >
          <h3 className="text-2xl font-bold mb-6 text-foreground">Send Me a Message</h3>

          <form onSubmit={handleSendEmail} className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute left-4 top-4 text-primary">
                <FaUser size={18} />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-4 top-4 text-primary">
                <MdEmail size={18} />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                name="from_email"
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Subject Input */}
            <div className="relative">
              <div className="absolute left-4 top-4 text-primary">
                <MdEventNote size={18} />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              className="w-full p-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              required
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                send
                  ? "bg-green-500 text-background"
                  : "btn-modern"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : send ? (
                <>
                  Message Sent! ✓
                </>
              ) : (
                <>
                  Send Message
                  <BsArrowRight />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contacts;
