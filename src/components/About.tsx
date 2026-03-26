import React from "react";

const About: React.FC = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
    { category: "Languages", items: ["JavaScript", "Java", "HTML", "CSS"] },
    { category: "Tools", items: ["Git", "REST API", "Firebase"] },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
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

        .slide-in {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .skill-card {
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }

        .skill-badge {
          transition: all 0.2s ease;
        }

        .skill-badge:hover {
          transform: translateY(-2px);
          background-color: rgba(0, 212, 255, 0.2);
          border-color: var(--primary);
        }
      `}</style>

      {/* Header */}
      <div className="mb-16 slide-in">
        <h2 className="section-title text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          Full Stack Developer with 2+ years of experience building scalable web applications
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="card-modern slide-in">
          <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            A passionate <span className="text-primary font-semibold">Full Stack Web Developer</span> specializing in the <span className="text-primary font-semibold">MERN Stack</span>. I transform ideas into elegant, efficient solutions with a keen focus on user experience and code quality.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            With a proven track record in both front-end and back-end development, I excel at solving complex problems and collaborating with teams to build innovative applications.
          </p>
        </div>

        <div className="card-modern slide-in">
          <h3 className="text-2xl font-bold mb-4 text-secondary">My Approach</h3>
          <ul className="space-y-3 text-muted-foreground text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Writing clean, maintainable code following best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Creating responsive, user-friendly interfaces</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Building scalable backend architectures</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Continuous learning and technical growth</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {skills.map((skillGroup, idx) => (
          <div
            key={skillGroup.category}
            className="card-modern skill-card"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <h4 className="text-lg font-bold mb-4 text-primary">
              {skillGroup.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge px-3 py-1 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { number: "20+", label: "Projects Completed" },
          { number: "500+", label: "DSA Problems Solved" },
          { number: "2+", label: "Years Experience" },
        ].map((stat, idx) => (
          <div
            key={stat.label}
            className="card-modern text-center"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-4xl font-bold gradient-text">{stat.number}</div>
            <p className="text-muted-foreground mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
