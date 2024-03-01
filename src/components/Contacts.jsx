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
import emailjs from "emailjs-com";
import { useState } from "react";

const Contacts = () => {
  const [send, setSend] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yxy0t8",
        "template_sydt581",
        e.target,
        "VqRu7XVgGoTX3JrVY"
      )
      .then(
        (result) => {
          setSend(true);
          e.target.reset;
        },
        (error) => {
          console.log(error.text);
          setSend(false);
        }
      );
  };
  return (
    <div id="contact">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">Contacts</h1>
        <p className="text-center text-md md:text-xl lg:w-[50%] w-[90%] m-auto mt-2 md:mt-4">
          Here are my overall experience.
        </p>
      </div>
      <div className="md:p-5 p-3 grid md:grid-cols-2 gap-3 border-t border-b border-blue-900 rounded-md mt-5 justify-center shadow-sm shadow-blue-900">
        <div className="md:w-[80%] md:m-auto rounded-md justify-center flex items-center">
          <div className="md:p-5 p-2">
            <img src={contactsImage} className="w-[35%] md:my-3 my-1" />
            <h1 className="text-lg md:text-2xl font-semibold md:mt-3">
              Contacts Us
            </h1>
            <p className="md:text-lg text-gray-300 md:my-3 my-2">
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
            <div className="flex gap-2 items-center text-sm md:text-md font-semibold text-gray-500">
              <MdLocalPhone />

              <h1 id="contact-phone">+91 8273691527 | +91 7668264646</h1>
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-semibold md:my-2 my-1 text-gray-500 contact-email">
              <MdOutlineMarkEmailRead />
              <h1 onClick={handleVisitEmail} className="cursor-pointer">salmanansari910550@gmail.com</h1>
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-semibold md:my-2 my-1 text-gray-500">
              <MdLocationPin />
              <h1>Pilibhit, Uttar Pradesh</h1>
            </div>
            <div className="flex gap-3 text-xl md:text-3xl my-3 md:my-5">
              <FaGithub
                className="hover:scale-125 border-blue-900 hover:border-gray-500 rounded-md hover:bg-glass transition-all duration-1000 ease-in-out cursor-pointer"
                onClick={handleVisitGitHub}
                id="contact-github"
              />

              <MdEmail
                className="hover:scale-125 border-blue-900 hover:border-gray-500 rounded-md hover:bg-[#F05941] transition-all duration-1000 ease-in-out cursor-pointer"
                onClick={handleVisitEmail}
                id="contact-email"
              />
              <CiLinkedin
                className="hover:scale-125 border-blue-900 hover:border-gray-500 rounded-md hover:bg-blue-800 transition-all duration-1000 ease-in-out cursor-pointer"
                onClick={handleVisitLinkedIn}
                id="contact-linkedin"
              />
            </div>
          </div>
        </div>
        <form
          className="text-white md:p-5 p-3 justify-center rounded-md flex flex-col gap-3 items-end md:mt-5 mt-2"
          onSubmit={handleSendEmail}
        >
          <div className="py-2 px-3 flex gap-2 items-center rounded-md border-blue-900 border w-[100%]">
            <FaUser />
            <input
              text="text"
              placeholder="Name"
              name="from_name"
              className="bg-transparent outline-none"
              required
            />
          </div>
          <div className="py-2 px-3 flex gap-2 items-center rounded-md border-blue-900 border w-[100%]">
            <MdEmail />
            <input
              text="email"
              placeholder="Email"
              name="from_email"
              className="bg-transparent outline-none"
              required
            />
          </div>
          <div className="py-2 px-3 flex gap-2 items-center rounded-md border-blue-900 border w-[100%]">
            <MdEventNote />
            <input
              text="text"
              placeholder="Subject"
              name="subject"
              className="bg-transparent outline-none"
              required
            />
          </div>
          <textarea
            cols="4"
            rows="5"
            placeholder="Message"
            name="message"
            className="w-full rounded-md p-2 bg-transparent outline-none border-blue-900 border"
            required
          />
          <button
            className={`w-full justify-center border-blue-900 cursor-pointer flex flex-row-reverse gap-1 md:gap-3 items-center rounded-md py-2 border px-3 hover:bg-glass hover:border-gray-500 transition-all duration-1000 ease-in-out`}
            text="submit"
          >
            {send ? "Sended" : "Send"}
            <img
              src={send ? tickIcon : sendEmail}
              className="text-lg md:w-8 sml:w-6 w-5 transition-all duration-500 ease-in-out"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
