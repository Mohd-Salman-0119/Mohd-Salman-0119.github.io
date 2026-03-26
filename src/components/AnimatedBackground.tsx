import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      {/* Animated floating orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top left with cyan glow */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)",
            top: "-50px",
            left: "-50px",
            animation: "float 8s ease-in-out infinite",
          }}
        />

        {/* Orb 2 - Top right with pink glow */}
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255, 0, 110, 0.25) 0%, transparent 70%)",
            top: "50px",
            right: "-30px",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />

        {/* Orb 3 - Center with accent glow */}
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 245, 255, 0.2) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "float 12s ease-in-out infinite",
          }}
        />

        {/* Orb 4 - Bottom right with gradient glow */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, rgba(255, 0, 110, 0.1) 100%)",
            bottom: "-50px",
            right: "-30px",
            animation: "float 9s ease-in-out infinite reverse",
          }}
        />

        {/* Animated grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, 0.1) 25%, rgba(0, 212, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.1) 75%, rgba(0, 212, 255, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, 0.1) 25%, rgba(0, 212, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.1) 75%, rgba(0, 212, 255, 0.1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
            animation: "moveGrid 20s linear infinite",
          }}
        />
      </div>

      {/* Top overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent" />

      {/* Bottom overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-30px) translateX(20px);
          }
          50% {
            transform: translateY(-60px) translateX(-20px);
          }
          75% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        @keyframes moveGrid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
