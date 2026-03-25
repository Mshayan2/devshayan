import React from "react";
import { Link } from "react-router-dom";
import Projects from "../components/Projects";

export default function AllProjectsPage() {
  return (
    <div className="bg-[#0A0A0C] text-white min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#0A2647]/90 shadow-xl">
        <div className="flex items-center justify-between px-6 md:px-16 py-4">
          <Link to="/" className="text-3xl font-extrabold text-white tracking-wide">
            <span style={{ color: "#FF7A00" }}>{`</`}</span>MS
            <span style={{ color: "#FF7A00" }}>{`>`}</span>
          </Link>

          <Link
            to="/"
            className="px-5 py-2 rounded-full font-semibold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
          >
            Back To Home
          </Link>
        </div>
      </div>

      <main className="pt-12">
        <Projects showAll />
      </main>
    </div>
  );
}
