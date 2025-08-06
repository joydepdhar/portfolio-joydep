import React from "react";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-br from-[#0F172A] via-[#1F2937] to-[#1E293B] text-white mt-16 pt-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background overlays */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        {/* Text Content */}
        <div className="space-y-8 max-w-xl">
          <p className="text-xl uppercase tracking-widest font-semibold text-cyan-400">
            👋 Hello, I’m
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            <span className="text-white">JOYDEP</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              DHAR
            </span>
            <span className="text-black">.</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-amber-500">
            Full Stack Developer | Python · Django · React
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mt-2">
            I build secure, scalable, and intuitive web applications. Whether it's robust APIs with{" "}
            <span className="text-cyan-400 font-medium">Django</span>, interactive UIs with{" "}
            <span className="text-cyan-400 font-medium">React</span>, or backend engineering in{" "}
            <span className="text-cyan-400 font-medium">C# (.NET)</span>—I turn ideas into impact.
          </p>

          <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base space-y-2 mt-4 max-w-md">
            <li>🔒 Secure backend APIs & clean architecture</li>
            <li>⚡ Lightning-fast frontend with Tailwind + React</li>
            <li>☕ Runs on coffee, clean code & curiosity</li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="/JoydepDharCV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-black text-sm font-semibold shadow-md hover:brightness-110 hover:scale-105 transition duration-300"
            >
              <FaDownload size={18} /> Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] transition duration-300 text-sm font-semibold"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>

            <a
              href="https://github.com/joydepdhar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] transition duration-300 text-sm font-semibold"
            >
              <FaGithub size={18} /> GitHub
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-transparent shadow-xl hover:scale-105 transition-transform duration-500">
            <div className="rounded-full overflow-hidden w-full h-full bg-[#1F2937]">
              <img
                src="/firstImage.jpg"
                alt="Joydep Dhar"
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
