// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaShieldAlt,
  FaChartLine,
  FaPaintBrush,
  FaWordpress,
  FaPenNib,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCloud,
} from "react-icons/fa";
import { projects } from "../data/projects";

const backgroundIcons = [
  FaLaptopCode,
  FaShoppingCart,
  FaShieldAlt,
  FaChartLine,
  FaPaintBrush,
  FaWordpress,
  FaPenNib,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCloud,
];

export default function Projects({ showAll = false }) {
  const primaryColor = "#0A2647";
  const secondaryColor = "#FF7A00";
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-16 overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,122,0,0.05), transparent 80%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.03), transparent 80%)",
          zIndex: 0,
        }}
      />

      {Array.from({ length: 25 }).map((_, index) => {
        const Icon = backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)];
        return (
          <motion.div
            key={index}
            className="absolute text-white/20 text-6xl"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
              zIndex: 0,
            }}
            animate={{ rotate: [0, 360, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {showAll ? "All " : "Featured "}
        <span style={{ color: secondaryColor }}>Projects</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl shadow-sm border-2 border-transparent hover:border-orange-500 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <h3 className="text-xl font-semibold text-white mt-4 mb-2">{project.title}</h3>
            <p className="text-white/70 text-sm">{project.desc}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 rounded-full font-semibold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>

      {!showAll && (
        <motion.div
          className="relative z-10 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/projects"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
          >
            View All Projects
          </Link>
        </motion.div>
      )}
    </section>
  );
}
