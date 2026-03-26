import React from "react";
import { BsGithub, BsDownload } from "react-icons/bs";
import { profile } from "../assets/imports";
import { Typewriter } from "react-simple-typewriter";
import { handleDwonloadResume, handleVisitGitHub } from "../constants/constants";

const ModernHero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 pb-10"
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in-up:nth-child(1) {
          animation-delay: 0.1s;
        }

        .fade-in-up:nth-child(2) {
          animation-delay: 0.2s;
        }

        .fade-in-up:nth-child(3) {
          animation-delay: 0.3s;
        }

        .fade-in-up:nth-child(4) {
          animation-delay: 0.4s;
        }

        .fade-in-scale {
          animation: fadeInScale 1s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl w-full">
        {/* Left Content */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-6">
          <div className="fade-in-up">
            <span className="text-primary text-lg font-semibold">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight fade-in-up">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Mohd Salman</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground fade-in-up">
            I&apos;m a{" "}
            <span className="text-primary">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Specialist",
                  "Backend Engineer",
                  "Problem Solver",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg fade-in-up">
            I build exceptional digital experiences with modern technologies. Passionate about
            creating scalable solutions and delivering high-quality code that makes an impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start fade-in-up">
            <button
              onClick={handleDwonloadResume}
              className="btn-modern inline-flex items-center gap-2 group"
            >
              <BsDownload className="group-hover:animate-bounce" />
              Download Resume
            </button>
            <button
              onClick={handleVisitGitHub}
              className="btn-modern-outline inline-flex items-center gap-2"
            >
              <BsGithub />
              Visit GitHub
            </button>
          </div>

          {/* Social Stats */}
          <div className="flex gap-8 justify-center md:justify-start text-center fade-in-up pt-4">
            <div className="hover:glow-primary transition-all p-3 rounded-lg">
              <div className="text-3xl font-bold gradient-text">20+</div>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="hover:glow-primary transition-all p-3 rounded-lg">
              <div className="text-3xl font-bold gradient-text">2+</div>
              <p className="text-sm text-muted-foreground">Years</p>
            </div>
            <div className="hover:glow-primary transition-all p-3 rounded-lg">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <p className="text-sm text-muted-foreground">DSA Problems</p>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="order-1 md:order-2 flex justify-center fade-in-scale">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl opacity-20 animate-pulse" />

            {/* Image container */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 overflow-hidden">
              <img
                src={profile}
                alt="Mohd Salman"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Animated ring */}
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-primary">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
