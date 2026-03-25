import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import AllProjectsPage from "./pages/AllProjectsPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-[#0A0A0C] text-white min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="services"><Services /></section>
              <section id="projects"><Projects /></section>
              <section id="skills"><Skills /></section>
              <section id="experience"><Experience /></section>
              <section id="education"><Education /></section>
              <section id="testimonials"><Testimonials /></section>
              <section id="faq"><FAQ /></section>
              <section id="contact"><Contact /></section>
            </main>
            <WhatsAppButton />
            <Footer />
          </div>
        }
      />
      <Route path="/projects" element={<AllProjectsPage />} />
    </Routes>
  );
}

export default App;
