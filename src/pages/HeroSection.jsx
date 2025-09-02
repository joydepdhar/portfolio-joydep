import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub, FaBriefcase } from "react-icons/fa";

// Animation for letters
const letterVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};

function LetterByLetterGradient({ firstName, lastName }) {
  return (
    <motion.h1
      className="flex flex-wrap text-4xl sm:text-6xl font-extrabold leading-tight text-center md:text-left"
      aria-label={`${firstName} ${lastName}`}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {firstName.split("").map((char, idx) => (
        <motion.span
          key={`first-${char}-${idx}`}
          variants={letterVariants}
          className="inline-block text-white"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <span className="mx-2" />
      <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
        {lastName.split("").map((char, idx) => (
          <motion.span
            key={`last-${char}-${idx}`}
            variants={letterVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
      <motion.span variants={letterVariants} className="inline-block text-cyan-400">
        .
      </motion.span>
    </motion.h1>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-br from-[#0F172A] via-[#1F2937] to-[#1E293B] text-white mt-16 pt-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        {/* Left Content */}
        <div className="space-y-8 max-w-xl text-center md:text-left mx-auto md:mx-0">
          <p className="text-lg uppercase tracking-widest font-medium text-cyan-400">
            👋 Hello, I’m
          </p>

          <LetterByLetterGradient firstName="JOYDEP" lastName="DHAR" />

          <h2 className="text-xl sm:text-2xl font-semibold text-amber-500">
            Full Stack Developer · ERP Specialist · Freelance Consultant
          </h2>
          <p className="text-gray-300 font-medium">
            Python · Django · React · ASP.NET · Odoo ERP
          </p>

          <p className="text-gray-400 text-base sm:text-lg mt-2 leading-relaxed">
            I design and build <span className="text-cyan-400 font-medium">scalable software solutions</span> 
            that help <span className="text-cyan-400 font-medium">businesses grow</span> and 
            <span className="text-cyan-400 font-medium">teams operate efficiently</span>. 
            From <span className="text-cyan-400 font-medium">custom ERP automation</span> 
            to <span className="text-cyan-400 font-medium">full-stack applications</span>, 
            I focus on delivering <span className="text-cyan-400 font-medium">secure, reliable, and high-performance systems</span>.
          </p>

          {/* CTA Buttons */}
          <nav className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-black text-sm font-semibold shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
              aria-label="Hire Joydep Dhar for Freelance or Job Opportunities"
            >
              <FaBriefcase size={18} /> Hire Me
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] text-sm font-semibold transition-transform duration-300 hover:scale-105"
              aria-label="View Joydep Dhar's Projects"
            >
              💻 View Projects
            </a>

            <a
              href="/JoydepDharCV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-[#0F172A] text-sm font-semibold transition-transform duration-300 hover:scale-105"
              aria-label="Download Joydep Dhar's CV"
            >
              <FaDownload size={18} /> Download CV
            </a>
          </nav>
        </div>

        {/* Right Content: Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.07, rotate: 2 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-transparent shadow-xl ring-4 ring-indigo-500/30 hover:ring-indigo-500/60 transition-all duration-500">
            <div className="rounded-full overflow-hidden w-full h-full bg-[#1F2937]">
              <img
                src="/firstImage.jpg"
                alt="Portrait of Joydep Dhar, Full-Stack Developer"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
