// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "SAT Software House",
    period: "2024 - Present",
    icon: <FaLaptopCode className="text-[#FF7A00]" />,
    details: [
      "Developed and deployed 5+ full-stack MERN applications",
      "Built responsive and optimized user interfaces with React.js",
      "Designed and integrated REST APIs for dynamic data handling",
    ],
  },
  {
    role: "Project Manager",
    company: "Pakistan Software Export Board (PSEB)",
    period: "Internship Program",
    icon: <FaProjectDiagram className="text-[#FF7A00]" />,
    details: [
      "Managed and trained a team of 25+ trainees across multiple tech domains",
      "Led development of startup project HireExpert",
      "Conducted code reviews, technical sessions, and feedback sessions",
    ],
  },
  {
    role: "MERN Stack Trainer",
    company: "Training & Mentorship",
    period: "Ongoing",
    icon: <FaChalkboardTeacher className="text-[#FF7A00]" />,
    details: [
      "Delivered 10+ MERN Stack training batches",
      "Designed structured curriculum with practical assignments",
      "Mentored 50+ students from fundamentals to professional level",
    ],
  },
  {
    role: "Team Collaboration & Leadership",
    company: "Cross-Functional Projects",
    period: "2024 - Present",
    icon: <FaUsers className="text-[#FF7A00]" />,
    details: [
      "Collaborated with cross-functional teams to deliver projects on time",
      "Improved application performance and cross-browser compatibility",
      "Created and maintained WordPress sites for clients",
    ],
  },
];

const floatingShapes = ["circle", "triangle", "pentagon", "star", "hexagon"];

export default function Experience() {
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
      id="experience"
      className="relative py-24 px-6 md:px-20 text-white overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#0A2647] opacity-30 rounded-full blur-3xl animation-pulse-slow -top-40 -left-24" />
        <div className="absolute w-[400px] h-[400px] bg-[#FF7A00] opacity-18 rounded-full blur-3xl animation-pulse-slower -bottom-36 -right-16" />
      </div>

      {Array.from({ length: 35 }).map((_, i) => {
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

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-bold">
          My <span style={{ color: secondaryColor }}>Experience</span>
        </h2>
        <p className="text-gray-300 mt-2">Professional journey & achievements</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => {
          const bgGradient =
            idx % 2 === 0
              ? "bg-gradient-to-r from-[#0A2647]/80 to-[#FF7A00]/20"
              : "bg-gradient-to-r from-[#FF7A00]/20 to-[#0A2647]/80";

          return (
            <motion.div
              key={idx}
              className={`backdrop-blur-md rounded-2xl border border-transparent p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer text-left ${bgGradient}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-4xl">{exp.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {exp.company} | {exp.period}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
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
