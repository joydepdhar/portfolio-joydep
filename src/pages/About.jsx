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
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const skillContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section id="about" className="bg-[#0F172A] text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header & Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-extrabold mb-8 text-center tracking-wide gradient-text">
            About Me
          </h2>
          <div className="flex flex-col items-center text-center">
            <motion.img
              src="/images/profile-pic.png"
              alt="Joydep Dhar"
              className="w-32 h-32 rounded-full border-4 border-indigo-400 shadow-md object-cover mb-4"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              I'm <span className="text-indigo-400 font-semibold">Joydep Dhar</span>, a Full Stack Developer based in South Asia with a strong focus on backend engineering and scalable SaaS solutions.  
              I specialize in building clean, efficient, and secure web applications using technologies like <span className="text-indigo-400">Python (Django)</span>, <span className="text-indigo-400">C# (.NET)</span>, and <span className="text-indigo-400">React</span>.  
              I love creating tools that solve real-world problems — with an emphasis on elegant UX, performance, and modular design.
            </p>
          </div>
        </motion.div>

        {/* Education + Certifications & Awards and Technical Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeInUp}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Education + Certifications Combined */}
          <motion.div className="bg-[#1F2937] rounded-2xl p-6 flex-1 shadow-lg space-y-6">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4 gradient-text">🎓 Education</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-bold">American International University-Bangladesh</p>
                  <p className="text-sm">B.Sc. in Computer Science & Engineering (2020–2024)</p>
                </div>
                <div>
                  <p className="font-bold">Shahid Syed Nazrul Islam College, Mymensingh</p>
                  <p className="text-sm">Higher Secondary Certificate (HSC), 2017–2019</p>
                </div>
              </div>
            </div>

            {/* Certifications & Awards */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4 gradient-text">🏅 Certifications & Awards</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                <li><span className="font-medium">CISCO IT Essentials</span> – Cisco Networking Academy</li>
                <li><span className="font-medium">Crash Course on Python</span> – Google via Coursera</li>
                <li><span className="font-medium">Dean’s List Honor</span> — Recognized from Fall 2021 to Spring 2023</li>
              </ul>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="bg-[#1F2937] rounded-2xl p-6 flex-1 shadow-lg"
            variants={skillContainer}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4 gradient-text">🛠️ Technical Skills</h3>

            <SkillGroup title="Programming Languages" skills={[
              { icon: <SiDotnet />, label: 'C#' },
              { icon: <SiPython />, label: 'Python' },
              { icon: <SiCplusplus />, label: 'C++' },
              { icon: <FaJsSquare />, label: 'JavaScript' },
              { icon: <FaTerminal />, label: 'Bash' },
            ]} />

            <SkillGroup title="Frameworks & Libraries" skills={[
              { icon: <SiDotnet />, label: 'ASP.NET' },
              { icon: <SiDjango />, label: 'Django' },
              { icon: <FaReact />, label: 'React' },
              { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
            ]} />

            <SkillGroup title="Databases" skills={[
              { icon: <SiMysql />, label: 'MySQL' },
              { label: 'SQLite' },
            ]} />

            <SkillGroup title="Version Control & Tools" skills={[
              { icon: <FaGitAlt />, label: 'Git' },
              { icon: <FaGithub />, label: 'GitHub' },
            ]} />

            <SkillGroup title="Operating Systems" skills={[
              { icon: <FaWindows />, label: 'Windows' },
              { icon: <FaLinux />, label: 'Ubuntu' },
            ]} />
          </motion.div>
        </motion.div>

      </div>

      {/* Extra styles for gradient text */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #7c3aed, #4f46e5, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease infinite;
          background-size: 200% 200%;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}

// Skill Group Component with staggered animation for each skill
function SkillGroup({ title, skills }) {
  return (
    <div className="mb-5">
      <h4 className="text-lg text-indigo-300 mb-2">{title}</h4>
      <motion.div className="flex flex-wrap gap-3" variants={skillContainer} initial="hidden" animate="visible">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg shadow-sm text-sm cursor-pointer transition-transform transform hover:scale-105 hover:shadow-indigo-500/70"
            variants={skillItem}
            whileHover={{ scale: 1.1, boxShadow: '0 0 8px 2px #7c3aed' }}
          >
            {skill.icon && <span className="text-indigo-300">{skill.icon}</span>}
            {skill.label}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
