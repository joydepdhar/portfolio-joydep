import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub, FaGitAlt, FaWindows, FaLinux, FaJsSquare, FaReact, FaTerminal,
} from "react-icons/fa";
import {
  SiPython, SiCplusplus, SiDjango, SiMysql, SiTailwindcss, SiDotnet,
} from "react-icons/si";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function About() {
  return (
    <section id="about" className="bg-[#0F172A] text-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center gradient-text mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Profile + Bio */}
          <motion.div
            className="flex flex-col items-center text-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative w-40 h-40">
              <img
                src="/images/profile-pic.png"
                alt="Joydep Dhar - Full Stack Developer"
                className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-indigo-500/30 animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold">Joydep Dhar</h3>
            <p className="text-indigo-400 font-medium">Full Stack Developer · ERP Specialist</p>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              I specialize in building <span className="text-indigo-400">secure</span>, 
              <span className="text-indigo-400"> scalable</span>, and 
              <span className="text-indigo-400"> user-friendly</span> applications.  
              From SaaS platforms to Odoo ERP automation, I help businesses turn ideas into impactful digital solutions.
            </p>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            className="bg-[#1E293B] rounded-2xl p-6 shadow-lg space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">🎓 Education</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <span className="font-bold">AIUB</span> — B.Sc. in CSE (2020–2024)
                </li>
                <li>
                  <span className="font-bold">Shahid Syed Nazrul Islam College</span> — HSC (2017–2019)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">🏅 Certifications</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                <li>Full Stack Web Development (Django + React) – Ostad</li>
                <li>CISCO IT Essentials – Cisco Networking Academy</li>
                <li>Crash Course on Python – Google (Coursera)</li>
                <li>Dean’s List Honor (2021–2023)</li>
              </ul>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-[#1E293B] rounded-2xl p-6 shadow-lg space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-400">🛠️ Skills</h3>
            <SkillGroup title="Languages" skills={[
              { icon: <SiPython />, label: "Python" },
              { icon: <SiDotnet />, label: "C#" },
              { icon: <SiCplusplus />, label: "C++" },
              { icon: <FaJsSquare />, label: "JavaScript" },
              { icon: <FaTerminal />, label: "Bash" },
            ]} />
            <SkillGroup title="Frameworks" skills={[
              { icon: <SiDjango />, label: "Django" },
              { icon: <SiDotnet />, label: "ASP.NET" },
              { icon: <FaReact />, label: "React" },
              { icon: <SiTailwindcss />, label: "Tailwind CSS" },
            ]} />
            <SkillGroup title="Databases" skills={[
              { icon: <SiMysql />, label: "MySQL" },
              { label: "SQLite" },
            ]} />
            <SkillGroup title="Tools" skills={[
              { icon: <FaGitAlt />, label: "Git" },
              { icon: <FaGithub />, label: "GitHub" },
            ]} />
            <SkillGroup title="OS" skills={[
              { icon: <FaWindows />, label: "Windows" },
              { icon: <FaLinux />, label: "Ubuntu" },
            ]} />
          </motion.div>
        </div>
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #7c3aed, #4f46e5, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}

// Reusable Skill Group
function SkillGroup({ title, skills }) {
  return (
    <div>
      <h4 className="text-sm uppercase text-indigo-300 mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg text-sm text-gray-200 transition-transform hover:scale-105"
          >
            {skill.icon && <span className="text-indigo-300">{skill.icon}</span>}
            {skill.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default About;





// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaGithub, FaGitAlt, FaWindows, FaLinux, FaJsSquare, FaReact, FaTerminal,
// } from 'react-icons/fa';
// import {
//   SiPython, SiCplusplus, SiDjango, SiMysql, SiTailwindcss, SiDotnet,
// } from 'react-icons/si';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
//   }),
// };

// const skillContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const skillItem = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// function About() {
//   return (
//     <section id="about" className="bg-[#0F172A] text-white py-20 px-6 sm:px-12">
//       <div className="max-w-6xl mx-auto space-y-16">

//         {/* Header & Introduction */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-4xl font-extrabold mb-8 text-center tracking-wide gradient-text">
//             About Me
//           </h2>
//           <div className="flex flex-col items-center text-center">
//             <motion.img
//               src="/images/profile-pic.png"
//               alt="Joydep Dhar"
//               className="w-32 h-32 rounded-full border-4 border-indigo-400 shadow-md object-cover mb-4"
//               initial={{ scale: 1 }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
//             />
//             <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
//               I'm <span className="text-indigo-400 font-semibold">Joydep Dhar</span>, a Full Stack Developer based in South Asia with a strong focus on backend engineering and scalable SaaS solutions.  
//               I specialize in building clean, efficient, and secure web applications using technologies like <span className="text-indigo-400">Python (Django)</span>, <span className="text-indigo-400">C# (.NET)</span>, and <span className="text-indigo-400">React</span>.  
//               I love creating tools that solve real-world problems — with an emphasis on elegant UX, performance, and modular design.
//             </p>
//           </div>
//         </motion.div>

//         {/* Education + Certifications & Awards and Technical Skills */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           custom={2}
//           variants={fadeInUp}
//           className="flex flex-col md:flex-row gap-8"
//         >
//           {/* Education + Certifications Combined */}
//           <motion.div className="bg-[#1F2937] rounded-2xl p-6 flex-1 shadow-lg space-y-6">
//             {/* Education */}
//             <div>
//               <h3 className="text-2xl font-semibold text-indigo-400 mb-4 gradient-text">🎓 Education</h3>
//               <div className="space-y-4 text-gray-300">
//                 <div>
//                   <p className="font-bold">American International University-Bangladesh</p>
//                   <p className="text-sm">B.Sc. in Computer Science & Engineering (2020–2024)</p>
//                 </div>
//                 <div>
//                   <p className="font-bold">Shahid Syed Nazrul Islam College, Mymensingh</p>
//                   <p className="text-sm">Higher Secondary Certificate (HSC), 2017–2019</p>
//                 </div>
//               </div>
//             </div>

//             {/* Certifications & Awards */}
//             <div>
//               <h3 className="text-2xl font-semibold text-indigo-400 mb-4 gradient-text">🏅 Certifications & Awards</h3>
//               <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
//                 <li><span className="font-medium">CISCO IT Essentials</span> – Cisco Networking Academy</li>
//                 <li><span className="font-medium">Crash Course on Python</span> – Google via Coursera</li>
//                 <li><span className="font-medium">Dean’s List Honor</span> — Recognized from Fall 2021 to Spring 2023</li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* Technical Skills */}
//           <motion.div
//             className="bg-[#1F2937] rounded-2xl p-6 flex-1 shadow-lg"
//             variants={skillContainer}
//             initial="hidden"
//             animate="visible"
//           >
//             <h3 className="text-2xl font-semibold text-indigo-400 mb-4 gradient-text">🛠️ Technical Skills</h3>

//             <SkillGroup title="Programming Languages" skills={[
//               { icon: <SiDotnet />, label: 'C#' },
//               { icon: <SiPython />, label: 'Python' },
//               { icon: <SiCplusplus />, label: 'C++' },
//               { icon: <FaJsSquare />, label: 'JavaScript' },
//               { icon: <FaTerminal />, label: 'Bash' },
//             ]} />

//             <SkillGroup title="Frameworks & Libraries" skills={[
//               { icon: <SiDotnet />, label: 'ASP.NET' },
//               { icon: <SiDjango />, label: 'Django' },
//               { icon: <FaReact />, label: 'React' },
//               { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
//             ]} />

//             <SkillGroup title="Databases" skills={[
//               { icon: <SiMysql />, label: 'MySQL' },
//               { label: 'SQLite' },
//             ]} />

//             <SkillGroup title="Version Control & Tools" skills={[
//               { icon: <FaGitAlt />, label: 'Git' },
//               { icon: <FaGithub />, label: 'GitHub' },
//             ]} />

//             <SkillGroup title="Operating Systems" skills={[
//               { icon: <FaWindows />, label: 'Windows' },
//               { icon: <FaLinux />, label: 'Ubuntu' },
//             ]} />
//           </motion.div>
//         </motion.div>

//       </div>

//       {/* Extra styles for gradient text */}
//       <style jsx>{`
//         .gradient-text {
//           background: linear-gradient(90deg, #7c3aed, #4f46e5, #6366f1);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: gradientShift 3s ease infinite;
//           background-size: 200% 200%;
//         }
//         @keyframes gradientShift {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// // Skill Group Component with staggered animation for each skill
// function SkillGroup({ title, skills }) {
//   return (
//     <div className="mb-5">
//       <h4 className="text-lg text-indigo-300 mb-2">{title}</h4>
//       <motion.div className="flex flex-wrap gap-3" variants={skillContainer} initial="hidden" animate="visible">
//         {skills.map((skill, idx) => (
//           <motion.span
//             key={idx}
//             className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg shadow-sm text-sm cursor-pointer transition-transform transform hover:scale-105 hover:shadow-indigo-500/70"
//             variants={skillItem}
//             whileHover={{ scale: 1.1, boxShadow: '0 0 8px 2px #7c3aed' }}
//           >
//             {skill.icon && <span className="text-indigo-300">{skill.icon}</span>}
//             {skill.label}
//           </motion.span>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default About;
// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaGithub, FaGitAlt, FaWindows, FaLinux, FaJsSquare, FaReact, FaTerminal,
// } from 'react-icons/fa';
// import {
//   SiPython, SiCplusplus, SiDjango, SiMysql, SiTailwindcss, SiDotnet,
// } from 'react-icons/si';

// // Animation Variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
//   }),
// };

// const skillContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08 } },
// };

// const skillItem = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// function About() {
//   return (
//     <section id="about" className="bg-[#0F172A] text-white py-20 px-6 sm:px-12">
//       <div className="max-w-6xl mx-auto space-y-16">

//         {/* About Intro */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-4xl font-extrabold mb-8 text-center tracking-wide gradient-text">
//             About Me
//           </h2>
//           <div className="flex flex-col items-center text-center">
//             <motion.img
//               src="/images/profile-pic.png"
//               alt="Joydep Dhar - Full Stack Developer"
//               className="w-32 h-32 rounded-full border-4 border-indigo-400 shadow-lg object-cover mb-6"
//               initial={{ scale: 1 }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
//             />
//             <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
//               Hi, I’m <span className="text-indigo-400 font-semibold">Joydep Dhar</span>, a{" "}
//               <span className="font-medium text-indigo-400">Full Stack Developer</span> with expertise in
//               <span className="text-indigo-400"> Python (Django)</span>,{" "}
//               <span className="text-indigo-400">C# (.NET)</span>, and{" "}
//               <span className="text-indigo-400">React</span>.  
//               I specialize in crafting secure, scalable, and user-friendly applications — from SaaS platforms to ERP systems.  
//               My goal is to transform ideas into impactful digital solutions with clean code, strong architecture, and intuitive design.
//             </p>
//           </div>
//         </motion.div>

//         {/* Education + Skills */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           custom={2}
//           variants={fadeInUp}
//           className="flex flex-col md:flex-row gap-8"
//         >
//           {/* Education + Certifications */}
//           <motion.div className="bg-[#1F2937] rounded-2xl p-6 flex-1 shadow-lg space-y-6">
//             {/* Education */}
//             <div>
//               <h3 className="text-2xl font-semibold text-indigo-400 mb-4 gradient-text">🎓 Education</h3>
//               <div className="space-y-4 text-gray-300">
//                 <div>
//                   <p className="font-bold">American International University-Bangladesh</p>
//                   <p className="text-sm">B.Sc. in Computer Science & Engineering (2020–2024)</p>
//                 </div>
//                 <div>
//                   <p className="font-bold">Shahid Syed Nazrul Islam College</p>
//                   <p className="text-sm">Higher Secondary Certificate (HSC), 2017–2019</p>
//                 </div>
//               </div>
//             </div>

//             {/* Certifications */}
//             <div>
//               <h3 className="text-2xl font-semibold text-indigo-400 mb-4 gradient-text">🏅 Certifications & Awards</h3>
//               <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
//                 <li><span className="font-medium">Full Stack Web Development with Python Django-React</span> – Ostad</li>
//                 <li><span className="font-medium">CISCO IT Essentials</span> – Cisco Networking Academy</li>
//                 <li><span className="font-medium">Crash Course on Python</span> – Google via Coursera</li>
//                 <li><span className="font-medium">Dean’s List Honor</span> — Fall 2021 to Spring 2023</li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* Technical Skills */}
//           <motion.div
//             className="bg-[#1F2937] rounded-2xl p-6 flex-1 shadow-lg"
//             variants={skillContainer}
//             initial="hidden"
//             animate="visible"
//           >
//             <h3 className="text-2xl font-semibold text-indigo-400 mb-4 gradient-text">🛠️ Technical Skills</h3>

//             <SkillGroup title="Programming Languages" skills={[
//               { icon: <SiPython />, label: 'Python' },
//               { icon: <SiDotnet />, label: 'C#' },
//               { icon: <SiCplusplus />, label: 'C++' },
//               { icon: <FaJsSquare />, label: 'JavaScript' },
//               { icon: <FaTerminal />, label: 'Bash' },
//             ]} />

//             <SkillGroup title="Frameworks & Libraries" skills={[
//               { icon: <SiDjango />, label: 'Django' },
//               { icon: <SiDotnet />, label: 'ASP.NET' },
//               { icon: <FaReact />, label: 'React' },
//               { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
//             ]} />

//             <SkillGroup title="Databases" skills={[
//               { icon: <SiMysql />, label: 'MySQL' },
//               { label: 'SQLite' },
//             ]} />

//             <SkillGroup title="Version Control & Tools" skills={[
//               { icon: <FaGitAlt />, label: 'Git' },
//               { icon: <FaGithub />, label: 'GitHub' },
//             ]} />

//             <SkillGroup title="Operating Systems" skills={[
//               { icon: <FaWindows />, label: 'Windows' },
//               { icon: <FaLinux />, label: 'Ubuntu' },
//             ]} />
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Gradient animation */}
//       <style jsx>{`
//         .gradient-text {
//           background: linear-gradient(90deg, #7c3aed, #4f46e5, #6366f1);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: gradientShift 4s ease infinite;
//           background-size: 200% 200%;
//         }
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </section>
//   );
// }

// // Reusable Skill Group Component
// function SkillGroup({ title, skills }) {
//   return (
//     <div className="mb-6">
//       <h4 className="text-lg text-indigo-300 mb-3">{title}</h4>
//       <motion.div
//         className="flex flex-wrap gap-3"
//         variants={skillContainer}
//         initial="hidden"
//         animate="visible"
//       >
//         {skills.map((skill, idx) => (
//           <motion.span
//             key={idx}
//             className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg shadow-md text-sm cursor-pointer transition-transform transform hover:scale-105 hover:shadow-indigo-500/50"
//             variants={skillItem}
//             whileHover={{ scale: 1.12, boxShadow: '0 0 10px 2px #6366f1' }}
//           >
//             {skill.icon && <span className="text-indigo-300">{skill.icon}</span>}
//             {skill.label}
//           </motion.span>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default About;
