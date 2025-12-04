// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
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

// === IMPORT YOUR IMAGES ===
import stoneyRoad from "../assets/stoney-road.PNG";
import jamalMedical from "../assets/jamal-medical.jpg";
import pakizaFoods from "../assets/pakiza-foods.PNG";
import explorationBlog from "../assets/exploration-blog.PNG";
import satpk from "../assets/satpk.PNG";
import princessHubs from "../assets/princess-hubs.PNG";
import sheryWholesale from "../assets/shery-wholesale.PNG";
import inventoryVisit from "../assets/inventory-visit.PNG";
import gulisCollection from "../assets/gulis-collection.PNG";

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

const projects = [
  {
    title: "Stoney Road Cannabis",
    desc: "Modern cannabis e-commerce website with real-time products and smooth UI.",
    image: stoneyRoad,
    link: "https://stoneyroadcannabis.com",
  },
  {
    title: "Jamal Medical Center",
    desc: "Healthcare website with appointment flow, services, and responsive UI.",
    image: jamalMedical,
    link: "https://jamalmedicalcenter.com",
  },
  {
    title: "Pakiza Foods",
    desc: "E-commerce store selling organic foods with clean, fast shopping experience.",
    image: pakizaFoods,
    link: "https://pakizafood.com",
  },
  {
    title: "Exploration Blog",
    desc: "SEO optimized blog with categories, tags, and modern reading experience.",
    image: explorationBlog,
    link: "https://explorationblog.com",
  },
  {
    title: "SAT Software House",
    desc: "Educational institute website with clean design and course highlights.",
    image: satpk,
    link: "https://satpk.com",
  },
  {
    title: "Princess Hubs",
    desc: "Women’s clothing e-commerce store with elegant modern UI.",
    image: princessHubs,
    link: "https://princesshubs.com",
  },
  {
    title: "Shery Wholesale",
    desc: "Wholesale store website designed with clean product showcasing.",
    image: sheryWholesale,
    link: "https://sherywholesale.com",
  },
  {
    title: "Inventory Visit",
    desc: "Multi-category e-commerce platform with sleek interface.",
    image: inventoryVisit,
    link: "https://inventoryvisit.com",
  },
  {
    title: "Gulis Collection",
    desc: "Fashion and accessories shop with premium product display UI.",
    image: gulisCollection,
    link: "https://guliscollection.com",
  },
];

export default function Projects() {
  const primaryColor = "#0A2647"; // Navy Blue
  const secondaryColor = "#FF7A00"; // Orange

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-16 overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Background Gradient */}
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,122,0,0.05), transparent 80%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.03), transparent 80%)",
          zIndex: 0,
        }}
      />

      {/* Animated Floating Icons */}
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

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span style={{ color: secondaryColor }}>Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl shadow-sm border-2 border-transparent hover:border-orange-500 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">
              {project.title}
            </h3>

            <p className="text-white/70 text-sm">{project.desc}</p>

            {/* Button */}
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
    </section>
  );
}
