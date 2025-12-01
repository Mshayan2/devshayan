import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer in E-Commerce Development?",
    answer:
      "I build high-performance online stores with custom features, secure payments, responsive UI, and optimized product management.",
  },
  {
    question: "How can Branding & Graphic Design help my business?",
    answer:
      "Professional branding improves identity, builds trust, and helps your business stand out with consistent visuals and messaging.",
  },
  {
    question: "Do you develop websites in WordPress?",
    answer:
      "Yes, I create fast, secure, and fully customizable WordPress websites, including themes, plugins, and optimizations.",
  },
  {
    question: "What does Full Stack Development include?",
    answer:
      "It includes frontend, backend, APIs, databases, and deployment to deliver complete, production-ready web applications.",
  },
  {
    question: "How does SEO & Digital Marketing help my website?",
    answer:
      "SEO improves your ranking on Google, while digital marketing drives targeted traffic and increases conversions.",
  },
];

const floatingShapes = ["circle", "triangle", "pentagon", "star", "hexagon"];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
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
      id="faq"
      className="relative w-full min-h-screen py-20 px-4 md:px-20 overflow-hidden text-white"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Floating Background Shapes */}
      {Array.from({ length: 30 }).map((_, i) => {
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

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 drop-shadow-xl"
      >
        Frequently Asked <span style={{ color: secondaryColor }}>Questions</span>
      </motion.h2>

      {/* FAQ Grid */}
      <div className="relative grid md:grid-cols-2 gap-8 max-w-6xl mx-auto z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="relative group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl cursor-pointer overflow-hidden hover:shadow-[0_0_40px_#FF7A00]/50 transition-all duration-300"
          >
            {/* Gradient Glow Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#FF7A00]/20 to-[#0A2647]/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            <div className="relative flex justify-between items-center z-10">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl text-[#FF7A00]"
              >
                ⌄
              </motion.span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-4 text-gray-300 leading-relaxed z-10"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
