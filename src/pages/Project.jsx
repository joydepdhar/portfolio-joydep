import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const projects = [
  {
    title: "E-Commerce Website",
    category: "fullstack",
    tech: ["Python", "Django REST", "React", "Cloudinary"],
    description:
      "A modern full-stack e-commerce platform with authentication, product management, checkout, and image uploads. Built for scalability.",
    github: "https://github.com/joydepdhar/E-Com",
    image: "/images/AuraEcom.png",
    liveLink: "https://e-com-seven-alpha.vercel.app/",
    accent: "from-cyan-500 to-sky-500",
    accentText: "text-cyan-400",
    accentGlow: "rgba(6,182,212,0.07)",
  },
  {
    title: "Todo App",
    category: "fullstack",
    tech: ["Python", "Django"],
    description:
      "Task management web application with user authentication, categorized task views, and real-time updates.",
    github:
      "https://github.com/joydepdhar/Python_Django_Project/tree/main/Todo_App_Project",
    image: "/images/Todo_app.PNG",
    accent: "from-indigo-400 to-violet-400",
    accentText: "text-indigo-400",
    accentGlow: "rgba(99,102,241,0.07)",
  },
  {
    title: "Social Media App",
    category: "fullstack",
    tech: ["Python", "Django"],
    description:
      "A full-featured social networking platform with login, profile management, post creation, likes, and comments.",
    github:
      "https://github.com/joydepdhar/Python_Django_Project/tree/main/Social_Media_Project",
    image: "/images/SocialMediaApp.PNG",
    accent: "from-pink-400 to-rose-400",
    accentText: "text-pink-400",
    accentGlow: "rgba(244,114,182,0.07)",
  },
  {
    title: "LMS — Learning Management System",
    category: "fullstack",
    tech: ["Python", "JavaScript", "Bootstrap"],
    description:
      "An education-based platform featuring course modules, admin controls, and student-teacher interaction tools.",
    github:
      "https://github.com/joydepdhar/Full-Stack-Project/tree/main/Full-Stack-Project/lms_system",
    image: "/images/LMS.PNG",
    accent: "from-emerald-400 to-teal-400",
    accentText: "text-emerald-400",
    accentGlow: "rgba(52,211,153,0.07)",
  },
  {
    title: "Library Management System",
    category: "erp",
    tech: ["C#", "Windows Forms"],
    description:
      "A desktop app for efficient book tracking, user registration, and automated borrowing/return workflows.",
    github:
      "https://github.com/joydepdhar/LibraryManagementSystemWithCSharp",
    image: "/images/LibraryManagementSystemByCSharp.PNG",
    accent: "from-amber-400 to-orange-400",
    accentText: "text-amber-400",
    accentGlow: "rgba(251,191,36,0.07)",
  },
  {
    title: "Store Management System",
    category: "erp",
    tech: ["C#", "ASP.NET Web API"],
    description:
      "An API-driven backend for managing inventory, product data, and store operations with role-based access.",
    github:
      "https://github.com/joydepdhar/StoreManagementSystem_FinalProject_ASP.Net",
    image: "/images/BackEndProject.PNG",
    accent: "from-indigo-400 to-cyan-400",
    accentText: "text-indigo-400",
    accentGlow: "rgba(99,102,241,0.07)",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "erp", label: "ERP / Systems" },
];

/* ── Tech pill ── */
function TechPill({ label, accentText }) {
  return (
    <span
      className={`px-2.5 py-0.5 text-xs font-medium rounded-full
                  border border-white/10 bg-white/5 ${accentText}`}
    >
      {label}
    </span>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative text-white py-28 px-6 sm:px-12 overflow-hidden"
      style={{ background: "#0A0F1E", fontFamily: "'Syne', 'Inter', sans-serif" }}
      aria-labelledby="projects-heading"
    >
      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <header className="text-center mb-14">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4"
          >
            What I've built
          </motion.p>

          <motion.h2
            id="projects-heading"
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 mt-5 max-w-xl mx-auto text-base leading-relaxed"
          >
            A selection of things I've designed, built, and shipped — from ERP
            systems to full-stack web apps.
          </motion.p>
        </header>

        {/* ── Filter tabs ── */}
        <motion.div
          custom={0.25}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold
                          border transition-all duration-200 active:scale-95
                          ${
                            active === f.key
                              ? "border-cyan-500/50 text-cyan-300 bg-cyan-500/10"
                              : "border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300"
                          }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* ── Projects grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative flex flex-col rounded-2xl border border-white/5
                           hover:border-white/10 transition-all duration-300 overflow-hidden"
                style={{ background: "#0E1629" }}
                aria-label={project.title}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${project.accentGlow}, transparent 60%)`,
                  }}
                />

                {/* Top accent bar */}
                <div
                  className={`h-0.5 w-full bg-gradient-to-r ${project.accent}
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Project image */}
                <div className="overflow-hidden border-b border-white/5 relative">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full aspect-video object-cover
                               group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width="600"
                    height="338"
                  />
                  {/* Live badge */}
                  {project.liveLink && (
                    <span
                      className="absolute top-3 right-3 flex items-center gap-1.5
                                 px-2.5 py-1 rounded-full text-xs font-semibold
                                 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  )}
                </div>

                <div className="relative flex flex-col flex-1 p-6">

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <TechPill key={t} label={t} accentText={project.accentText} />
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold text-white mb-2 leading-snug
                               group-hover:text-gray-100 transition-colors"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                    {project.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                                 border border-white/10 text-gray-400 text-xs font-semibold
                                 hover:border-white/25 hover:text-white
                                 transition-all duration-200 active:scale-95"
                      aria-label={`${project.title} source code on GitHub`}
                    >
                      <FaGithub size={13} />
                      Code
                    </a>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
                                   bg-gradient-to-r ${project.accent}
                                   text-white text-xs font-semibold
                                   hover:opacity-90 transition-all duration-200 active:scale-95`}
                        aria-label={`${project.title} live demo`}
                      >
                        <FaExternalLinkAlt size={11} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View all on GitHub ── */}
        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/joydepdhar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                       border border-white/10 text-gray-400 text-sm font-semibold
                       hover:border-cyan-500/40 hover:text-cyan-300
                       hover:bg-cyan-400/5 transition-all duration-300 active:scale-95"
          >
            <FaGithub size={15} />
            View all on GitHub
            <FaArrowRight size={12} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}


// import React from 'react';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'E-Commerce Website',
//     tech: ['Python', 'Django REST', 'React', 'Cloudinary'],
//     description:
//       'A modern full-stack e-commerce platform with authentication, product management, checkout, and image uploads. Built for scalability.',
//     github: 'https://github.com/joydepdhar/E-Com',
//     image: '/images/AuraEcom.png',
//     liveLink: 'https://e-com-seven-alpha.vercel.app/',
//   },
//   {
    
//     title: 'Todo App',
//     tech: ['Python', 'Django'],
//     description:
//       'Task management web application with user authentication, categorized task views, and real-time updates.',
//     github: 'https://github.com/joydepdhar/Python_Django_Project/tree/main/Todo_App_Project',
//     image: '/images/Todo_app.PNG',
//   },
//   {
//     title: 'Social Media App',
//     tech: ['Python', 'Django'],
//     description:
//       'A full-featured social networking platform with login, profile management, post creation, likes, and comments.',
//     github: 'https://github.com/joydepdhar/Python_Django_Project/tree/main/Social_Media_Project',
//     image: '/images/SocialMediaApp.PNG',
//   },
//   {
//     title: 'LMS - Learning Management System',
//     tech: ['Python', 'JavaScript', 'Bootstrap'],
//     description:
//       'An education-based platform featuring course modules, admin controls, and student-teacher interaction tools.',
//     github: 'https://github.com/joydepdhar/Full-Stack-Project/tree/main/Full-Stack-Project/lms_system',
//     image: '/images/LMS.PNG',
//   },
//   {
//     title: 'Library Management System',
//     tech: ['C#', 'Windows Forms'],
//     description:
//       'A desktop app for efficient book tracking, user registration, and automated borrowing/return workflows.',
//     github: 'https://github.com/joydepdhar/LibraryManagementSystemWithCSharp',
//     image: '/images/LibraryManagementSystemByCSharp.PNG',
//   },
//   {
//     title: 'Store Management System',
//     tech: ['C#', 'ASP.NET Web API'],
//     description:
//       'An API-driven backend for managing inventory, product data, and store operations with role-based access.',
//     github: 'https://github.com/joydepdhar/StoreManagementSystem_FinalProject_ASP.Net',
//     image: '/images/BackEndProject.PNG',
//   },
  
// ];

// function Project() {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 sm:px-12 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0f172a] text-white"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-extrabold mb-14 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
//           🚀 Featured Projects
//         </h2>

//         {/* 3 columns on large, 2 on medium, 1 on mobile */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative bg-[#1F2937]/80 backdrop-blur-lg rounded-2xl border border-gray-700/60 p-6 shadow-lg hover:shadow-indigo-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
//             >
//               {/* Project Image */}
//               <div className="overflow-hidden rounded-xl border border-gray-700 mb-5">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full aspect-video object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-2xl font-bold text-indigo-300 group-hover:text-indigo-200 mb-2">
//                 {project.title}
//               </h3>

//               {/* Tech Tags */}
//               <div className="flex flex-wrap gap-2 mb-3">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Description */}
//               <p className="text-slate-300 text-sm mb-6 flex-grow">
//                 {project.description}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex items-center gap-4 mt-auto">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-sm font-medium text-indigo-300"
//                 >
//                   <FaGithub /> Code
//                 </a>

//                 {project.liveLink && (
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition text-sm font-medium text-white"
//                   >
//                     <FaExternalLinkAlt /> Live
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Project;


// import React from 'react';

// const projects = [
//   {
//     title: 'Todo App',
//     tech: 'Python • Django',
//     description:
//       'Task management web application with user authentication, categorized task views, and real-time updates.',
//     github: 'https://github.com/joydepdhar/Python_Django_Project/tree/main/Todo_App_Project',
//     image: '/images/Todo_app.PNG',
//   },
//   {
//     title: 'Social Media App',
//     tech: 'Python • Django',
//     description:
//       'A full-featured social networking platform with login, profile management, post creation, likes, and comments.',
//     github: 'https://github.com/joydepdhar/Python_Django_Project/tree/main/Social_Media_Project',
//     image: '/images/SocialMediaApp.PNG',
//   },
//   {
//     title: 'LMS-Learning Management System',
//     tech: 'Python • JavaScript • HTML • CSS • Bootstrap',
//     description:
//       'A web-based platform designed to support hunger relief with an intuitive interface and donation management.',
//     github: 'https://github.com/joydepdhar/Full-Stack-Project/tree/main/Full-Stack-Project/lms_system',
//     image: '/images/LMS.PNG',
//   },
//   {
//     title: 'Library Management System',
//     tech: 'C# • Windows Forms',
//     description:
//       'A desktop application for efficient book tracking, user management, and automated borrowing/return processes.',
//     github: 'https://github.com/joydepdhar/LibraryManagementSystemWithCSharp',
//     image: '/images/LibraryManagementSystemByCSharp.PNG',
//   },
//   {
//     title: 'Store Management System',
//     tech: 'C# • ASP.NET Web API',
//     description:
//       'An API-based system to manage inventory, sales, and streamline store operations with secure endpoints.',
//     github: 'https://github.com/joydepdhar/StoreManagementSystem_FinalProject_ASP.Net',
//     image: '/images/BackEndProject.PNG',
//   },
//   {
//     title: 'E-Commerce Website',
//     tech: 'Python • Django RestFramework • React • Cloudinary  ',
//     description:
//       'A modern full-stack e-commerce platform built with Django REST API on the backend and React on the frontend. This live application supports user authentication, dynamic product listings, secure checkout, and image management via Cloudinary. Designed with performance and scalability in mind, it offers a seamless shopping experience and responsive UI.',
//     github: 'https://github.com/joydepdhar/E-Com',
//     image: '/images/AuraEcom.png',
//     liveLink: 'https://e-com-seven-alpha.vercel.app/'
//   },
  
// ];

// function Project() {
//   return (
//     <section id="projects" className="py-20 px-6 sm:px-12 bg-[#111827] text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-extrabold mb-10 text-indigo-400 tracking-wide text-center">
//           Projects
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[#1F2937] rounded-xl border border-gray-700 p-6 shadow-md hover:shadow-indigo-500/20 transition-all duration-300"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full aspect-video object-cover rounded-lg border border-gray-600 mb-5 hover:scale-105 transition-transform duration-300"
//               />

//               <h3 className="text-2xl font-semibold text-indigo-300 mb-1">
//                 {project.title}
//               </h3>
//               <p className="text-sm text-slate-400 italic mb-2">{project.tech}</p>
//               <p className="text-slate-300 text-sm mb-4">{project.description}</p>

//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block text-indigo-400 hover:text-indigo-300 font-medium text-sm transition"
//               >
//                 Visit GitHub →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Project;
// import React from 'react';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'Todo App',
//     tech: 'Python • Django',
//     description:
//       'Task management web application with user authentication, categorized task views, and real-time updates.',
//     github: 'https://github.com/joydepdhar/Python_Django_Project/tree/main/Todo_App_Project',
//     image: '/images/Todo_app.PNG',
//   },
//   {
//     title: 'Social Media App',
//     tech: 'Python • Django',
//     description:
//       'A full-featured social networking platform with login, profile management, post creation, likes, and comments.',
//     github: 'https://github.com/joydepdhar/Python_Django_Project/tree/main/Social_Media_Project',
//     image: '/images/SocialMediaApp.PNG',
//   },
//   {
//     title: 'LMS - Learning Management System',
//     tech: 'Python • JavaScript • HTML • CSS • Bootstrap',
//     description:
//       'An education-based platform featuring course modules, admin controls, and student-teacher interaction tools.',
//     github: 'https://github.com/joydepdhar/Full-Stack-Project/tree/main/Full-Stack-Project/lms_system',
//     image: '/images/LMS.PNG',
//   },
//   {
//     title: 'Library Management System',
//     tech: 'C# • Windows Forms',
//     description:
//       'A desktop app for efficient book tracking, user registration, and automated borrowing/return workflows.',
//     github: 'https://github.com/joydepdhar/LibraryManagementSystemWithCSharp',
//     image: '/images/LibraryManagementSystemByCSharp.PNG',
//   },
//   {
//     title: 'Store Management System',
//     tech: 'C# • ASP.NET Web API',
//     description:
//       'An API-driven backend for managing inventory, product data, and store operations with role-based access.',
//     github: 'https://github.com/joydepdhar/StoreManagementSystem_FinalProject_ASP.Net',
//     image: '/images/BackEndProject.PNG',
//   },
//   {
//     title: 'E-Commerce Website',
//     tech: 'Python • Django REST Framework • React • Cloudinary',
//     description:
//       'A modern full-stack e-commerce platform with secure authentication, product management, checkout, and image uploads using Cloudinary. Built for speed, usability, and scalability.',
//     github: 'https://github.com/joydepdhar/E-Com',
//     image: '/images/AuraEcom.png',
//     liveLink: 'https://e-com-seven-alpha.vercel.app/',
//   },
// ];

// function Project() {
//   return (
//     <section id="projects" className="py-20 px-6 sm:px-12 bg-[#111827] text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-extrabold mb-10 text-indigo-400 tracking-wide text-center">
//           Projects
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[#1F2937] rounded-xl border border-gray-700 p-6 shadow-md hover:shadow-indigo-500/20 transition-all duration-300"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full aspect-video object-cover rounded-lg border border-gray-600 mb-5 hover:scale-105 transition-transform duration-300"
//               />

//               <h3 className="text-2xl font-semibold text-indigo-300 mb-1">{project.title}</h3>
//               <p className="text-sm text-slate-400 italic mb-2">{project.tech}</p>
//               <p className="text-slate-300 text-sm mb-4">{project.description}</p>

//               <div className="flex items-center gap-4">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition"
//                 >
//                   <FaGithub className="text-base" />
//                   GitHub
//                 </a>

//                 {project.liveLink && (
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-green-400 hover:text-green-300 font-medium text-sm transition"
//                   >
//                     <FaExternalLinkAlt className="text-sm" />
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Project;
