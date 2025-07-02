import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaGitAlt, FaWindows, FaLinux, FaJsSquare, FaReact, FaTerminal,
} from 'react-icons/fa';
import {
  SiPython, SiCplusplus, SiDjango, SiMysql, SiTailwindcss, SiDotnet,
} from 'react-icons/si';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

function About() {
  return (
    <section id="about" className="bg-[#0F172A] text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading & Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">About Me</h2>
          <div className="flex flex-col items-center">
            <img
              src="/images/profile-pic.png"
              alt="Joydep Dhar"
              className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-md object-cover mb-4"
            />
            <p className="text-lg text-center text-gray-300 max-w-3xl">
              Hi, I'm <span className="text-yellow-400 font-semibold">Joydep Dhar</span> — a passionate Full Stack Developer from South Asia. I specialize in building web apps using <span className="text-yellow-400">C# (.NET)</span>, <span className="text-yellow-400">Python (Django)</span>, and <span className="text-yellow-400">React</span>. My focus is on clean architecture, responsive design, and solving real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Flex Row: Education + Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeInUp}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Education Card */}
          <div className="bg-[#1E293B] rounded-2xl p-6 flex-1 shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🎓 Education</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold">American International University-Bangladesh</p>
                <p className="text-sm">B.Sc. in CSE (2020–2024)</p>
              </div>
              <div>
                <p className="font-bold">Shahid Syed Nazrul Islam College, Mymensingh</p>
                <p className="text-sm">HSC (2017–2019)</p>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-[#1E293B] rounded-2xl p-6 flex-1 shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🛠️ Technical Skills</h3>

            {/* Languages */}
            <div className="mb-4">
              <h4 className="text-lg text-yellow-300 mb-1">Languages</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                <Skill icon={<SiDotnet />} label="C#" />
                <Skill icon={<SiPython />} label="Python" />
                <Skill icon={<SiCplusplus />} label="C++" />
                <Skill icon={<FaJsSquare />} label="JavaScript" />
                <Skill icon={<FaTerminal />} label="Bash" />
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-4">
              <h4 className="text-lg text-yellow-300 mb-1">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                <Skill icon={<SiDotnet />} label="ASP.NET" />
                <Skill icon={<SiDjango />} label="Django" />
                <Skill icon={<FaReact />} label="React" />
                <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
              </div>
            </div>

            {/* Databases */}
            <div className="mb-4">
              <h4 className="text-lg text-yellow-300 mb-1">Databases</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                <Skill icon={<SiMysql />} label="MySQL" />
                <Skill label="SQLite" />
              </div>
            </div>

            {/* Tools */}
            <div className="mb-4">
              <h4 className="text-lg text-yellow-300 mb-1">Tools</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                <Skill icon={<FaGitAlt />} label="Git & GitHub" />
              </div>
            </div>

            {/* Operating Systems */}
            <div>
              <h4 className="text-lg text-yellow-300 mb-1">Operating Systems</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                <Skill icon={<FaWindows />} label="Windows" />
                <Skill icon={<FaLinux />} label="Ubuntu" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeInUp}
          className="bg-[#1E293B] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🏅 Certifications & Awards</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
            <li><span className="font-medium">CISCO IT Essentials</span> – Cisco Network Academy</li>
            <li><span className="font-medium">Crash Course on Python</span> – Google (Coursera)</li>
            <li><span className="font-medium">Dean’s List Honor</span> — Fall 2021 to Spring 2023</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable skill component
function Skill({ icon, label }) {
  return (
    <span className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-lg shadow text-sm">
      {icon && <span className="text-yellow-300">{icon}</span>}
      {label}
    </span>
  );
}

export default About;
