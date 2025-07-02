import React from 'react';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#1B1F3B] via-[#0F172A] to-[#2A2F5A] text-white px-6 sm:px-12 flex items-center justify-center mt-16 pt-4"
    >
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent z-0" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16 z-10">
        {/* LEFT — Intro */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl uppercase text-yellow-400 tracking-wider font-bold ">
            👋 Hello, I’m
          </p>

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-pink-400">
            Joydep Dhar<span className='text-purple-600'>.</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300">
            Full Stack Developer | Python, Django, React
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
            I specialize in building scalable, clean, and modern web applications using <span className="text-yellow-400 font-medium">Python (Django)</span>, <span className="text-yellow-400 font-medium">C# (.NET)</span>, and <span className="text-yellow-400 font-medium">React</span>. Passionate about problem-solving, clean architecture, and lifelong learning.
          </p>

          <ul className="text-gray-400 text-sm sm:text-base list-disc list-inside space-y-1">
            <li>🔧 Backend APIs, Auth, and Database Design</li>
            <li>🎯 Frontend UI/UX with React + Tailwind</li>
            <li>🤝 Team Player, Curious Learner, Tech Explorer</li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/JoydepDharCV.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-md font-semibold bg-yellow-400 text-[#1B1F3B] shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            >
              <FaDownload /> Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/joydep-dhar-15a8451aa" // Update this link if needed
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1F3B] border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#1B1F3B] transition-all duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/joydepdhar" // Update this link if needed
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1F3B] border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#1B1F3B] transition-all duration-300"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-tr from-yellow-400 via-yellow-300 to-pink-400 shadow-2xl hover:scale-105 transition-transform duration-500">
            <div className="rounded-full overflow-hidden w-full h-full bg-[#1B1F3B]">
              <img
                src="/firstImage.jpg"
                alt="Joydep Dhar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
