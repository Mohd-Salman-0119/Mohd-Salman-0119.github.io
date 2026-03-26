import React, { useState, FormEvent } from "react";
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
    <section id="contact" className="py-20 md:py-32">
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-in {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .slide-in-down {
          animation: slideInDown 0.6s ease-out forwards;
        }

        .contact-item {
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
          color: var(--primary);
        }

        .social-btn {
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          transform: scale(1.15) rotate(10deg);
          border-color: var(--primary);
          background-color: rgba(0, 212, 255, 0.2);
        }

        .form-input {
          transition: all 0.3s ease;
        }

        .form-input:focus {
          border-color: var(--primary);
        }

        .submit-btn {
          transition: all 0.3s ease;
        }

        .submit-btn:hover:not(:disabled) {
          transform: scale(1.02);
        }

        .submit-btn:active:not(:disabled) {
          transform: scale(0.98);
        }
      `}</style>

      {/* Header */}
      <div className="mb-16 slide-in">
        <h2 className="section-title text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          I&apos;m always open to new opportunities and interesting projects. Feel free to reach out!
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 slide-in-down">
          <div className="card-modern">
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
                  <div
                    key={info.id}
                    id={info.id}
                    className="contact-item flex items-center gap-4 text-muted-foreground cursor-pointer"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <span className="text-lg">{info.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, onClick, id, label }) => (
                  <button
                    key={id}
                    onClick={onClick}
                    id={id}
                    title={label}
                    className="social-btn p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary"
                  >
                    <Icon size={24} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card-modern slide-in">
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
                className="form-input w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
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
                className="form-input w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
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
                className="form-input w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
                required
              />
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              className="form-input w-full p-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`submit-btn w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
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
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
