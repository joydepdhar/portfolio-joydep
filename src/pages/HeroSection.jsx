// // import React from "react";
// // import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

// // export default function HeroSection() {
// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-br from-[#0F172A] via-[#1F2937] to-[#1E293B] text-white mt-16 pt-4"
// //       style={{ fontFamily: "'Poppins', sans-serif" }}
// //     >
// //       {/* Background overlays */}
// //       <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 pointer-events-none" />
// //       <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent pointer-events-none" />

// //       <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
// //         {/* Text Content */}
// //         <div className="space-y-8 max-w-xl">
// //           <p className="text-xl uppercase tracking-widest font-semibold text-cyan-400">
// //             👋 Hello, I’m
// //           </p>

// //           <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
// //             <span className="text-white">JOYDEP</span>{" "}
// //             <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
// //               DHAR
// //             </span>
// //             <span className="text-black">.</span>
// //           </h1>

// //           <h2 className="text-xl sm:text-2xl font-semibold text-amber-500">
// //             Full Stack Developer | Python · Django · React
// //           </h2>

// //           <p className="text-gray-400 text-base sm:text-lg mt-2">
// //             I build secure, scalable, and intuitive web applications. Whether it's robust APIs with{" "}
// //             <span className="text-cyan-400 font-medium">Django</span>, interactive UIs with{" "}
// //             <span className="text-cyan-400 font-medium">React</span>, or backend engineering in{" "}
// //             <span className="text-cyan-400 font-medium">C# (.NET)</span>—I turn ideas into impact.
// //           </p>

// //           <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base space-y-2 mt-4 max-w-md">
// //             <li>🔒 Secure backend APIs & clean architecture</li>
// //             <li>⚡ Lightning-fast frontend with Tailwind + React</li>
// //             <li>☕ Runs on coffee, clean code & curiosity</li>
// //           </ul>

// //           {/* CTA Buttons */}
// //           <div className="flex flex-wrap gap-4 pt-6">
// //             <a
// //               href="/JoydepDharCV.pdf"
// //               download
// //               className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-black text-sm font-semibold shadow-md hover:brightness-110 hover:scale-105 transition duration-300"
// //             >
// //               <FaDownload size={18} /> Download CV
// //             </a>

// //             <a
// //               href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] transition duration-300 text-sm font-semibold"
// //             >
// //               <FaLinkedin size={18} /> LinkedIn
// //             </a>

// //             <a
// //               href="https://github.com/joydepdhar"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] transition duration-300 text-sm font-semibold"
// //             >
// //               <FaGithub size={18} /> GitHub
// //             </a>
// //           </div>
// //         </div>

// //         {/* Profile Image */}
// //         <div className="flex justify-center">
// //           <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-transparent shadow-xl hover:scale-105 transition-transform duration-500">
// //             <div className="rounded-full overflow-hidden w-full h-full bg-[#1F2937]">
// //               <img
// //                 src="/firstImage.jpg"
// //                 alt="Joydep Dhar"
// //                 className="object-cover w-full h-full"
// //                 loading="lazy"
// //                 decoding="async"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// // new without animations just plain everything   
// import React from "react";
// import { motion } from "framer-motion";
// import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 } 
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const hoverScale = { scale: 1.05 };

// export default function HeroSection() {
//   return (
//     <header
//       id="home"
//       role="banner"
//       className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-br from-[#0F172A] via-[#1F2937] to-[#1E293B] text-white mt-16 pt-4"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       {/* Background overlays */}
//       <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 pointer-events-none" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent pointer-events-none" />

//       <motion.div
//         className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Text Content */}
//         <motion.div className="space-y-8 max-w-xl" variants={itemVariants}>
//           <motion.p
//             className="text-xl uppercase tracking-widest font-semibold text-cyan-400"
//             aria-label="Greeting"
//             variants={itemVariants}
//           >
//             👋 Hello, I’m
//           </motion.p>

//           <motion.h1
//             className="text-5xl sm:text-6xl font-bold leading-tight"
//             variants={itemVariants}
//           >
//             <span className="text-white">JOYDEP</span>{" "}
//             <motion.span
//               className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
//               style={{ backgroundSize: "200% 200%" }}
//               animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//             >
//               DHAR
//             </motion.span>
//             <span className="text-black">.</span>
//           </motion.h1>

//           <motion.h2
//             className="text-xl sm:text-2xl font-semibold text-amber-500"
//             variants={itemVariants}
//           >
//             Full Stack Developer | Python · Django · React
//           </motion.h2>

//           <motion.p
//             className="text-gray-400 text-base sm:text-lg mt-2"
//             variants={itemVariants}
//           >
//             I build secure, scalable, and intuitive web applications. Whether it's robust APIs with{" "}
//             <span className="text-cyan-400 font-medium">Django</span>, interactive UIs with{" "}
//             <span className="text-cyan-400 font-medium">React</span>, or backend engineering in{" "}
//             <span className="text-cyan-400 font-medium">C# (.NET)</span>—I turn ideas into impact.
//           </motion.p>

//           <motion.ul
//             className="list-disc list-inside text-gray-400 text-sm sm:text-base space-y-2 mt-4 max-w-md"
//             variants={itemVariants}
//           >
//             <li>🔒 Secure backend APIs & clean architecture</li>
//             <li>⚡ Lightning-fast frontend with Tailwind + React</li>
//             <li>☕ Runs on coffee, clean code & curiosity</li>
//           </motion.ul>

//           {/* CTA Buttons */}
//           <motion.nav
//             aria-label="Primary actions"
//             className="flex flex-wrap gap-4 pt-6"
//             variants={itemVariants}
//           >
//             <motion.a
//               href="/JoydepDharCV.pdf"
//               download
//               aria-label="Download Joydep Dhar's CV"
//               className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-black text-sm font-semibold shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 focus-visible:ring-opacity-50 transition duration-300"
//               whileHover={hoverScale}
//               whileFocus={{ scale: 1.05, outline: "none", boxShadow: "0 0 10px rgba(37, 99, 235, 0.7)" }}
//             >
//               <FaDownload size={18} /> Download CV
//             </motion.a>

//             <motion.a
//               href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Visit Joydep Dhar's LinkedIn Profile"
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 focus-visible:ring-opacity-50 transition duration-300 text-sm font-semibold"
//               whileHover={hoverScale}
//               whileFocus={{ scale: 1.05, outline: "none", boxShadow: "0 0 10px rgba(37, 99, 235, 0.7)" }}
//             >
//               <FaLinkedin size={18} /> LinkedIn
//             </motion.a>

//             <motion.a
//               href="https://github.com/joydepdhar"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Visit Joydep Dhar's GitHub Profile"
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 focus-visible:ring-opacity-50 transition duration-300 text-sm font-semibold"
//               whileHover={hoverScale}
//               whileFocus={{ scale: 1.05, outline: "none", boxShadow: "0 0 10px rgba(37, 99, 235, 0.7)" }}
//             >
//               <FaGithub size={18} /> GitHub
//             </motion.a>
//           </motion.nav>
//         </motion.div>

//         {/* Profile Image */}
//         <motion.div
//           className="flex justify-center"
//           initial={{ scale: 1, rotate: 0 }}
//           whileHover={{ scale: 1.07, rotate: 3 }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           aria-label="Profile picture of Joydep Dhar"
//         >
//           <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-transparent shadow-xl ring-4 ring-cyan-500 ring-opacity-40 hover:ring-opacity-80 transition-all duration-500">
//             <div className="rounded-full overflow-hidden w-full h-full bg-[#1F2937]">
//               <img
//                 src="/firstImage.jpg"
//                 alt="Portrait of Joydep Dhar, Full Stack Developer"
//                 className="object-cover w-full h-full"
//                 loading="lazy"
//                 decoding="async"
//                 width={384}
//                 height={384}
//               />
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </header>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

// const letterVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 500, damping: 30 },
//   },
// };

// function LetterByLetterGradient({ firstName, lastName }) {
//   return (
//     <motion.h1
//       className="flex flex-wrap text-5xl sm:text-6xl font-bold leading-tight"
//       aria-label={`${firstName} ${lastName}`}
//       initial="hidden"
//       animate="visible"
//       variants={{
//         visible: {
//           transition: {
//             staggerChildren: 0.08,
//           },
//         },
//       }}
//     >
//       {/* First Name */}
//       {firstName.split("").map((char, idx) => (
//         <motion.span
//           key={`first-${char}-${idx}`}
//           variants={letterVariants}
//           className="inline-block text-white"
//           aria-hidden="true"
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}

//       <span className="mx-2">{/* space between names */}</span>

//       {/* Last Name with gradient */}
//       <span
//         className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
//         style={{ backgroundSize: "200% 200%" }}
//       >
//         {lastName.split("").map((char, idx) => (
//           <motion.span
//             key={`last-${char}-${idx}`}
//             variants={letterVariants}
//             className="inline-block"
//             aria-hidden="true"
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </span>

//       {/* Period */}
//       <motion.span
//         variants={letterVariants}
//         className="inline-block text-black"
//         aria-hidden="true"
//       >
//         .
//       </motion.span>
//     </motion.h1>
//   );
// }

// const hoverScale = { scale: 1.05 };

// export default function HeroSection() {
//   return (
//     <header
//       id="home"
//       role="banner"
//       className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-br from-[#0F172A] via-[#1F2937] to-[#1E293B] text-white mt-16 pt-4"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       {/* Background overlays */}
//       <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 pointer-events-none" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent pointer-events-none" />

//       <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
//         {/* Text Content */}
//         <div className="space-y-8 max-w-xl">
//           <p
//             className="text-xl uppercase tracking-widest font-semibold text-cyan-400"
//             aria-label="Greeting"
//           >
//             👋 Hello, I’m
//           </p>

//           {/* Animated Name */}
//           <LetterByLetterGradient firstName="JOYDEP" lastName="DHAR" />

//           <h2 className="text-xl sm:text-xl font-semibold text-amber-500">
//               Full Stack Developer · Odoo ERP Specialist· 
//           </h2>
//           <span>Python, Django & React</span>


//           <p className="text-gray-400 text-base sm:text-lg mt-2">
//             I build secure, scalable, and intuitive web applications. Whether
//             it's robust APIs with{" "}
//             <span className="text-cyan-400 font-medium">Django</span>, interactive
//             UIs with <span className="text-cyan-400 font-medium">React</span>, or
//             backend engineering in{" "}
//             <span className="text-cyan-400 font-medium">C# (.NET)</span>—I turn
//             ideas into impact.
//           </p>

//           <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base space-y-2 mt-4 max-w-md">
//             <li>🔒 Secure backend APIs & clean architecture</li>
//             <li>⚡ Lightning-fast frontend with Tailwind + React</li>
//             <li>☕ Runs on coffee, clean code & curiosity</li>
//           </ul>

//           {/* CTA Buttons */}
//           <nav
//             aria-label="Primary actions"
//             className="flex flex-wrap gap-4 pt-6"
//           >
//             <a
//               href="/JoydepDharCV.pdf"
//               download
//               aria-label="Download Joydep Dhar's CV"
//               className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-black text-sm font-semibold shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 focus-visible:ring-opacity-50 transition duration-300"
//               style={{ willChange: "transform" }}
//               onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <FaDownload size={18} /> Download CV
//             </a>

//             <a
//               href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Visit Joydep Dhar's LinkedIn Profile"
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 focus-visible:ring-opacity-50 transition duration-300 text-sm font-semibold"
//               style={{ willChange: "transform" }}
//               onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <FaLinkedin size={18} /> LinkedIn
//             </a>

//             <a
//               href="https://github.com/joydepdhar"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Visit Joydep Dhar's GitHub Profile"
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 focus-visible:ring-opacity-50 transition duration-300 text-sm font-semibold"
//               style={{ willChange: "transform" }}
//               onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <FaGithub size={18} /> GitHub
//             </a>
//           </nav>
//         </div>

//         {/* Profile Image */}
//         <motion.div
//           className="flex justify-center"
//           initial={{ scale: 1, rotate: 0 }}
//           whileHover={{ scale: 1.07, rotate: 3 }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           aria-label="Profile picture of Joydep Dhar"
//         >
//           <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-transparent shadow-xl  hover:ring-opacity-80 transition-all duration-500">
//             <div className="rounded-full overflow-hidden w-full h-full bg-[#1F2937]">
//               <img
//                 src="/firstImage.png"
//                 alt="Portrait of Joydep Dhar, Full Stack Developer"
//                 className="object-cover w-full h-full"
//                 loading="lazy"
//                 decoding="async"
//                 width={384}
//                 height={384}
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </header>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

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
      className="flex flex-wrap text-5xl sm:text-6xl font-extrabold leading-tight"
      aria-label={`${firstName} ${lastName}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {/* First Name */}
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

      {/* Last Name with gradient */}
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
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 
                 bg-gradient-to-br from-[#0F172A] via-[#1F2937] to-[#1E293B] text-white mt-16 pt-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        {/* Left Content */}
        <div className="space-y-8 max-w-xl">
          <p className="text-lg uppercase tracking-widest font-medium text-cyan-400">
            👋 Hello, I’m
          </p>

          <LetterByLetterGradient firstName="JOYDEP" lastName="DHAR" />

          {/* Refined Role */}
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-500">
            Full Stack Developer · Odoo ERP Specialist
          </h2>
          <p className="text-gray-300 font-medium">
            Python · Django · React · ASP.NET
          </p>

          {/* Professional Pitch */}
          <p className="text-gray-400 text-base sm:text-lg mt-2 leading-relaxed">
            I help businesses build secure, scalable, and user-friendly software. 
            From{" "}
            <span className="text-cyan-400 font-medium">Odoo ERP automation </span> 
            to{" "}
            <span className="text-cyan-400 font-medium">full-stack web apps</span>, 
            I deliver solutions that turn ideas into results.
          </p>

          {/* Key highlights */}
          <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base space-y-2 mt-4 max-w-md">
            <li>🔒 Secure backend APIs & scalable architectures</li>
            <li>⚡ Fast, responsive UIs with React & Tailwind</li>
            <li>📊 Odoo ERP customization & business automation</li>
          </ul>

          {/* CTA Buttons */}
          <nav className="flex flex-wrap gap-4 pt-6">
            <a
              href="/JoydepDharCV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full 
                         bg-gradient-to-r from-indigo-500 to-cyan-500 text-black 
                         text-sm font-semibold shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <FaDownload size={18} /> Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 
                         text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] text-sm font-semibold 
                         transition-transform duration-300 hover:scale-105"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>

            <a
              href="https://github.com/joydepdhar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400 
                         text-cyan-300 hover:bg-cyan-400 hover:text-[#0F172A] text-sm font-semibold 
                         transition-transform duration-300 hover:scale-105"
            >
              <FaGithub size={18} /> GitHub
            </a>
          </nav>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.07, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full p-2 
                          bg-gradient-to-tr from-cyan-500 via-indigo-500 to-transparent 
                          shadow-xl ring-4 ring-indigo-500/30 hover:ring-indigo-500/60 transition-all duration-500">
            <div className="rounded-full overflow-hidden w-full h-full bg-[#1F2937]">
              <img
                src="/firstImage.png"
                alt="Joydep Dhar - Full Stack Developer"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
