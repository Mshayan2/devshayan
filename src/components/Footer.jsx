import React from "react";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Mshayan2" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/muhammad-shayan-631973318/" },
    { icon: <FaWhatsapp />, href: "https://wa.me/923365006551" },
    { icon: <FaEnvelope />, href: "mailto:shayan1236y@gmail.com" },
    { icon: <FaGlobe />, href: "https://devshayan-seven.vercel.app/" },
  ];

  return (
    <footer className="relative bg-[#010B2D] text-white py-12 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500 rounded-full blur-[140px] opacity-55 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[180px] opacity-45 animate-pulse-slower" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="text-3xl font-extrabold text-white tracking-wide mb-6 md:mb-0">
          <span style={{ color: "#FF7A00" }}>{`</`}</span>MS
          <span style={{ color: "#FF7A00" }}>{`>`}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-white hover:text-[#FF7A00] transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF7A00] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              target="_blank"
              href={social.href}
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF7A00] transition transform hover:scale-110 text-xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-[#FF7A00] mt-8"></div>

      <div className="relative z-10 text-center text-gray-300 mt-4 text-sm">
        © {new Date().getFullYear()} &lt;MS&gt;. All rights reserved.
      </div>

      <style>{`
        @keyframes pulseSlow {
          0%,100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.1); opacity: 0.45; }
        }
        @keyframes pulseSlower {
          0%,100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.2); opacity: 0.35; }
        }
        .animate-pulse-slow { animation: pulseSlow 8s infinite ease-in-out; }
        .animate-pulse-slower { animation: pulseSlower 10s infinite ease-in-out; }
      `}</style>
    </footer>
  );
}
