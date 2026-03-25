// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiBootstrap,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { FaCode, FaDatabase, FaLaptopCode, FaTools } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <SiReact className="text-[#FF7A00]" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#FF7A00]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#FF7A00]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#FF7A00]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#FF7A00]" /> },
  { name: "REST APIs", icon: <FaCode className="text-[#FF7A00]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#FF7A00]" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-[#FF7A00]" /> },
  { name: "GitHub", icon: <SiGithub className="text-[#FF7A00]" /> },
  { name: "WordPress", icon: <SiWordpress className="text-[#FF7A00]" /> },
  { name: "API Integration", icon: <FaDatabase className="text-[#FF7A00]" /> },
  { name: "Full Stack Development", icon: <FaLaptopCode className="text-[#FF7A00]" /> },
  { name: "Postman", icon: <FaTools className="text-[#FF7A00]" /> },
];

const floatingShapes = ["circle", "triangle", "pentagon", "star", "hexagon"];

export default function Skills() {
  const primaryColor = "#0A2647";
  const secondaryColor = "#FF7A00";

  const renderShape = (shape, size) => {
    switch (shape) {
      case "circle":
        return <div className="rounded-full w-full h-full border-2 border-white/10" />;

      case "triangle":
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid rgba(255,255,255,0.1)`,
            }}
          />
        );

      case "pentagon":
        return (
          <div
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              backgroundColor: "rgba(255,255,255,0.1)",
              width: "100%",
              height: "100%",
            }}
          />
        );

      case "star":
        return (
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              backgroundColor: "rgba(255,255,255,0.08)",
              width: "100%",
              height: "100%",
            }}
          />
        );

      case "hexagon":
        return (
          <div
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              backgroundColor: "rgba(255,255,255,0.08)",
              width: "100%",
              height: "100%",
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-20 text-white overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#0A2647] opacity-30 rounded-full blur-3xl animation-pulse-slow -top-40 -left-24" />
        <div className="absolute w-[400px] h-[400px] bg-[#FF7A00] opacity-18 rounded-full blur-3xl animation-pulse-slower -bottom-36 -right-16" />
      </div>

      {Array.from({ length: 28 }).map((_, i) => {
        const shape = floatingShapes[Math.floor(Math.random() * floatingShapes.length)];
        const size = Math.random() * 36 + 12;

        return (
          <motion.div
            key={i}
            className="absolute z-0 pointer-events-none"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
            }}
            animate={{ y: [0, 14, 0], rotate: [0, 360, 0] }}
            transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, ease: "linear" }}
          >
            {renderShape(shape, size)}
          </motion.div>
        );
      })}

      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span style={{ color: secondaryColor }}>Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white/8 backdrop-blur-md rounded-2xl border border-transparent p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center"
              whileHover={{ y: -6 }}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <p className="text-lg font-semibold text-gray-100 group-hover:text-[#FF7A00] transition-colors text-center">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseSlow {
          0%,100% { transform: scale(1); opacity: 0.22; }
          50% { transform: scale(1.15); opacity: 0.35; }
        }
        @keyframes pulseSlower {
          0%,100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.25); opacity: 0.22; }
        }
        .animation-pulse-slow { animation: pulseSlow 7s infinite ease-in-out; }
        .animation-pulse-slower { animation: pulseSlower 9s infinite ease-in-out; }
      `}</style>
    </section>
  );
}
