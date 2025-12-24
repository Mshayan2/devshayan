// src/components/Services.jsx
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
  FaCloud 
} from "react-icons/fa";

const servicesList = [
  { name: "Full Stack Development", icon: <FaLaptopCode /> },
  { name: "E-Commerce Development", icon: <FaShoppingCart /> },
  { name: "Website Maintenance & Security", icon: <FaShieldAlt /> },
  { name: "Analytics & Reporting", icon: <FaChartLine /> },
  { name: "UI/UX Design", icon: <FaPaintBrush /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Branding & Graphic Design", icon: <FaPenNib /> },
  { name: "SEO & Digital Marketing", icon: <FaSearch /> },
];

const backgroundIcons = [
  <FaLaptopCode />,
  <FaShoppingCart />,
  <FaShieldAlt />,
  <FaChartLine />,
  <FaPaintBrush />,
  <FaWordpress />,
  <FaPenNib />,
  <FaSearch />,
  <FaPhone />,
  <FaEnvelope />,
  <FaGlobe />,
  <FaCloud />,
];

const Services = () => {
  const primaryColor = "#0A2647";   // Navy Blue
  const secondaryColor = "#FF7A00"; // Vibrant Orange

  return (
    <section className="relative min-h-screen px-6 py-16 overflow-hidden" style={{ backgroundColor: primaryColor }}>
      
      {/* Subtle Gradient Overlay */}
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          background: "radial-gradient(circle at 40% 40%, rgba(255,122,0,0.05), transparent 80%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.03), transparent 80%)",
          zIndex: 0,
        }}
      />

      {/* Rotating Background Icons */}
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
            transition={{ duration: 20 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
          >
            {Icon}
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
        Our <span style={{ color: secondaryColor }}>Services</span>
      </motion.h2>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center shadow-sm cursor-pointer border-2 border-transparent hover:border-orange-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-5xl mb-4" style={{ color: secondaryColor }}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
            <p className="text-white/70 text-sm">
              High-quality professional service to elevate your business online.
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        className="mt-16 text-center z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-white text-lg mb-4">
          I'm just a click away! Hire me for your next project.
        </p>
        <a
          href="https://www.upwork.com/freelancers/~01fb97ac898569e5bd?mp_source=share"
          className="inline-block bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
        >
          Hire Me
        </a>
      </motion.div>
    </section>
  );
};

export default Services;
