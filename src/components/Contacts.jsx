import React from "react";
import { contactsImage, sendEmail, tickIcon } from "../assets/imports";
import {
  MdEventNote,
  MdLocalPhone,
  MdLocationPin,
  MdOutlineMarkEmailRead,
} from "react-icons/md";
import { FaGithub, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {
  handleVisitEmail,
  handleVisitGitHub,
  handleVisitLinkedIn,
} from "../constants/constants";
import { CiLinkedin } from "react-icons/ci";
import { useState } from "react";

const Contacts = () => {
  const [send, setSend] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("from_name"),
      email: formData.get("from_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    
    // Show success state
    setSend(true);
    e.target.reset();
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSend(false);
    }, 3000);
  };
  return (
    <div id="contact" className="my-12 md:my-24">
      <div className="mb-12">
        <h1 className="text-center text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent mb-4">Contact Me</h1>
        <p className="text-center text-lg md:text-xl lg:w-[60%] w-[90%] m-auto text-slate-300 leading-relaxed">
          Let's connect! I'm always open to new opportunities and collaborations. Feel free to reach out.
        </p>
      </div>
      <div className="md:p-8 p-6 grid md:grid-cols-2 gap-8 glass border border-glass rounded-glass justify-center hover:shadow-glow transition-all duration-300">
        <div className="md:w-[80%] md:m-auto rounded-md justify-center flex items-center">
          <div className="md:p-5 p-2">
            <img src={contactsImage} className="w-[35%] md:my-3 my-1" />
            <h1 className="text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent md:mt-3 mt-2">
              Get In Touch
            </h1>
            <p className="md:text-lg text-slate-300 md:my-3 my-2 leading-relaxed">
              I'm actively seeking exciting opportunities and collaborations. My inbox is always open 
              for meaningful conversations, project inquiries, or just a friendly hello!
            </p>
            <div className="flex gap-2 items-center text-sm md:text-md font-medium text-slate-300 md:my-3 my-2">
              <MdLocalPhone className="text-accent" />
              <h1 id="contact-phone">+91 8273691527 | +91 7668264646</h1>
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-medium text-slate-300 contact-email">
              <MdOutlineMarkEmailRead className="text-accent2" />
              <h1 onClick={handleVisitEmail} className="cursor-pointer hover:text-accent transition-colors">salmanansari910550@gmail.com</h1>
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-medium text-slate-300 md:my-3 my-2">
              <MdLocationPin className="text-accent3" />
              <h1>Pilibhit, Uttar Pradesh</h1>
            </div>
            <div className="flex gap-4 text-2xl md:text-3xl my-6">
              <FaGithub
                className="text-slate-300 hover:text-accent hover:scale-125 rounded-lg p-2 transition-all duration-300 cursor-pointer hover:bg-glass"
                onClick={handleVisitGitHub}
                id="contact-github"
              />

              <MdEmail
                className="text-slate-300 hover:text-accent2 hover:scale-125 rounded-lg p-2 transition-all duration-300 cursor-pointer hover:bg-glass"
                onClick={handleVisitEmail}
                id="contact-email"
              />
              <CiLinkedin
                className="text-slate-300 hover:text-accent3 hover:scale-125 rounded-lg p-2 transition-all duration-300 cursor-pointer hover:bg-glass"
                onClick={handleVisitLinkedIn}
                id="contact-linkedin"
              />
            </div>
          </div>
        </div>
        <form
          className="text-slate-300 md:p-6 p-4 justify-center rounded-glass flex flex-col gap-4 items-end"
          onSubmit={handleSendEmail}
        >
          <div className="py-3 px-4 flex gap-3 items-center rounded-lg border-accent border bg-glass w-full hover:border-accent2 transition-colors">
            <FaUser className="text-accent" />
            <input
              text="text"
              placeholder="Your Name"
              name="from_name"
              className="bg-transparent outline-none w-full text-slate-300 placeholder-slate-500"
              required
            />
          </div>
          <div className="py-3 px-4 flex gap-3 items-center rounded-lg border-accent border bg-glass w-full hover:border-accent2 transition-colors">
            <MdEmail className="text-accent" />
            <input
              text="email"
              placeholder="Your Email"
              name="from_email"
              className="bg-transparent outline-none w-full text-slate-300 placeholder-slate-500"
              required
            />
          </div>
          <div className="py-3 px-4 flex gap-3 items-center rounded-lg border-accent border bg-glass w-full hover:border-accent2 transition-colors">
            <MdEventNote className="text-accent" />
            <input
              text="text"
              placeholder="Subject"
              name="subject"
              className="bg-transparent outline-none w-full text-slate-300 placeholder-slate-500"
              required
            />
          </div>
          <textarea
            cols="4"
            rows="5"
            placeholder="Your Message"
            name="message"
            className="w-full rounded-lg p-3 bg-glass outline-none border border-accent text-slate-300 placeholder-slate-500 hover:border-accent2 transition-colors"
            required
          />
          <button
            className={`w-full justify-center border-accent cursor-pointer flex flex-row-reverse gap-2 items-center rounded-lg py-3 border px-4 bg-glass hover:bg-accent hover:text-primary transition-all duration-300`}
            text="submit"
          >
            {send ? "Message Sent!" : "Send Message"}
            <img
              src={send ? tickIcon : sendEmail}
              className="w-5 md:w-6 transition-all duration-500"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
