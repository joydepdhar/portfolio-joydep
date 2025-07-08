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
          <h2 className="text-4xl font-extrabold text-indigo-400 mb-8 text-center tracking-wide">
            About Me
          </h2>
          <div className="flex flex-col items-center">
            <img
              src="/images/profile-pic.png"
              alt="Joydep Dhar"
              className="w-32 h-32 rounded-full border-4 border-indigo-400 shadow-md object-cover mb-4"
            />
            <p className="text-lg text-center text-gray-300 max-w-3xl leading-relaxed">
              Hi, I'm <span className="text-indigo-400 font-semibold">Joydep Dhar</span> — a passionate Full Stack Developer from South Asia.
              I build modern web apps using <span className="text-indigo-400">C# (.NET)</span>, <span className="text-indigo-400">Python (Django)</span>,
              and <span className="text-indigo-400">React</span> with a focus on scalable architecture, elegant UX, and real-world solutions.
            </p>
          </div>
        </motion.div>

        {/* Education + Skills Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeInUp}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Education */}
          <div className="bg-[#1F2937] rounded-2xl p-6 flex-1 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">🎓 Education</h3>
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

          {/* Skills */}
          <div className="bg-[#1F2937] rounded-2xl p-6 flex-1 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">🛠️ Technical Skills</h3>

            {/* Languages */}
            <SkillGroup title="Languages" skills={[
              { icon: <SiDotnet />, label: 'C#' },
              { icon: <SiPython />, label: 'Python' },
              { icon: <SiCplusplus />, label: 'C++' },
              { icon: <FaJsSquare />, label: 'JavaScript' },
              { icon: <FaTerminal />, label: 'Bash' },
            ]} />

            {/* Frameworks */}
            <SkillGroup title="Frameworks & Libraries" skills={[
              { icon: <SiDotnet />, label: 'ASP.NET' },
              { icon: <SiDjango />, label: 'Django' },
              { icon: <FaReact />, label: 'React' },
              { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
            ]} />

            {/* Databases */}
            <SkillGroup title="Databases" skills={[
              { icon: <SiMysql />, label: 'MySQL' },
              { label: 'SQLite' },
            ]} />

            {/* Tools */}
            <SkillGroup title="Tools" skills={[
              { icon: <FaGitAlt />, label: 'Git & GitHub' },
            ]} />

            {/* OS */}
            <SkillGroup title="Operating Systems" skills={[
              { icon: <FaWindows />, label: 'Windows' },
              { icon: <FaLinux />, label: 'Ubuntu' },
            ]} />
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeInUp}
          className="bg-[#1F2937] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-indigo-400 mb-4">🏅 Certifications & Awards</h3>
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

// Skill Group
function SkillGroup({ title, skills }) {
  return (
    <div className="mb-5">
      <h4 className="text-lg text-indigo-300 mb-2">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <Skill key={idx} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </div>
  );
}

// Individual Skill Badge
function Skill({ icon, label }) {
  return (
    <span className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg shadow-sm text-sm transition">
      {icon && <span className="text-indigo-300">{icon}</span>}
      {label}
    </span>
  );
}

export default About;
