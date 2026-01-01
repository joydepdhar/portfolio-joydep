// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase } from "react-icons/fa";

// const letterVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 400, damping: 25 },
//   },
// };

// function LetterByLetterGradient({ firstName, lastName }) {
//   return (
//     <motion.h1
//       className="flex flex-wrap text-4xl sm:text-6xl font-extrabold leading-tight text-center md:text-left"
//       aria-label={`${firstName} ${lastName}`}
//       initial="hidden"
//       animate="visible"
//       variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
//     >
//       {/* FIRST NAME (white) */}
//       {firstName.split("").map((char, idx) => (
//         <motion.span
//           key={`first-${char}-${idx}`}
//           variants={letterVariants}
//           className="inline-block text-white"
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}

//       <span className="mx-2" />
//       <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
//         {lastName.split("").map((char, idx) => (
//           <motion.span
//             key={`last-${char}-${idx}`}
//             variants={letterVariants}
//             className="inline-block"
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </span>

//       <motion.span variants={letterVariants} className="inline-block text-cyan-400">
//         .
//       </motion.span>
//     </motion.h1>
//   );
// }

// export default function HeroSection() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 text-white pt-24
//                   bg-[#0F172A]"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       {/* BACKGROUND OVERLAY GRID */}
//       <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 pointer-events-none" />

//       {/* SOFT OVERLAY TO MATCH YOUR SITE */}
//       <div className="absolute inset-0 bg-[#0F172A]/60 pointer-events-none" />

//       <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
//         {/* LEFT */}
//         <div className="space-y-8 max-w-xl text-center md:text-left mx-auto md:mx-0">
//           <p className="text-lg uppercase tracking-widest font-medium text-cyan-400">
//             Hello, I’m
//           </p>

//           <LetterByLetterGradient firstName="JOYDEP" lastName="DHAR" />

//           <h2 className="text-xl sm:text-2xl font-semibold text-amber-500">
//             Full Stack Developer · Odoo ERP Specialist · Power BI & Business Analytics Consultant
//           </h2>

//           <p className="text-gray-300 font-medium">
//             Python · Django · React · Power BI · Odoo ERP
//           </p>

//           <p className="text-gray-300 text-base sm:text-lg mt-2 leading-relaxed">
//             I design and build
//             <span className="text-cyan-400 font-medium"> scalable software solutions </span>
//             that help <span className="text-cyan-400 font-medium"> businesses grow </span> and
//             <span className="text-cyan-400 font-medium"> teams operate efficiently</span>.
//             From <span className="text-cyan-400 font-medium"> custom Odoo development </span>
//             to <span className="text-cyan-400 font-medium"> full-stack applications</span>,
//             I deliver <span className="text-cyan-400 font-medium"> secure, high-performance systems</span>.
//           </p>

//           {/* CTA */}
//           <nav className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
//             <a
//               href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
//               className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#7C3AED] text-white font-semibold
//                          hover:bg-[#FACC15] hover:text-[#1F2937] transition"
//             >
//               <FaBriefcase size={18} /> Book a Consultation
//             </a>
//           </nav>
//         </div>

//         {/* RIGHT — PROFILE IMAGE */}
//         <motion.div
//           className="flex justify-center"
//           initial={{ scale: 1 }}
//           whileHover={{ scale: 1.07, rotate: 2 }}
//           transition={{ type: "spring", stiffness: 260, damping: 22 }}
//         >
//           <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 
//                           bg-gradient-to-tr from-cyan-500 via-indigo-500 to-transparent
//                           shadow-xl ring-4 ring-indigo-500/30 hover:ring-indigo-500/60 
//                           transition-all duration-500">
//             <div className="rounded-full overflow-hidden w-full h-full bg-[#1F2937]">
//               <img
//                 src="/firstImage.jpg"
//                 alt="Portrait of Joydep Dhar"
//                 className="object-cover w-full h-full"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaFolderOpen } from "react-icons/fa";

/* Letter animation */
const letterVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 26 },
  },
};

/* Animated Name */
function LetterByLetterGradient({ firstName, lastName }) {
  return (
    <motion.h1
      className="flex flex-wrap text-4xl sm:text-6xl font-extrabold leading-tight text-center md:text-left"
      aria-label={`${firstName} ${lastName}`}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
    >
      {firstName.split("").map((char, idx) => (
        <motion.span
          key={`first-${idx}`}
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
            key={`last-${idx}`}
            variants={letterVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      <motion.span
        variants={letterVariants}
        className="inline-block text-cyan-400"
      >
        .
      </motion.span>
    </motion.h1>
  );
}

/* Hero Section */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 pt-24 text-white bg-[#0F172A]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-[#0F172A]/70 pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">

        {/* LEFT CONTENT */}
        <div className="space-y-8 max-w-xl text-center md:text-left mx-auto md:mx-0">
          
          <p className="text-sm sm:text-base uppercase tracking-widest font-semibold text-cyan-400">
            Hello, I’m
          </p>

          <LetterByLetterGradient firstName="JOYDEP" lastName="DHAR" />

          {/* Value-driven headline */}
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-400">
            ERP & Business Automation Developer
          </h2>

          {/* Trust signal */}
          <p className="text-sm text-gray-400">
            Odoo ERP Developer at <span className="text-gray-200 font-medium">Zylo, Dhaka</span>
          </p>

          {/* Short, business-focused description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I help <span className="text-cyan-400 font-medium">businesses automate operations</span>,
            reduce manual work, and make
            <span className="text-cyan-400 font-medium"> data-driven decisions</span>
            using Odoo ERP, Django, and modern web technologies.
          </p>

          {/* Tech stack */}
          <p className="text-gray-400 font-medium">
            Python · Django · React · PostgreSQL · Odoo · Power BI
          </p>

          {/* CTA Buttons */}
          <nav className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-indigo-600 text-white font-semibold
                         hover:bg-amber-400 hover:text-gray-900
                         transition-all duration-300 shadow-lg"
            >
              <FaBriefcase size={18} />
              Hire Me
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         border border-gray-600 text-gray-200 font-semibold
                         hover:border-cyan-400 hover:text-cyan-400
                         transition-all duration-300"
            >
              <FaFolderOpen size={18} />
              View Projects
            </a>
          </nav>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.06, rotate: 2 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96
                       rounded-full p-2 bg-gradient-to-tr
                       from-cyan-500 via-indigo-500 to-transparent
                       shadow-2xl ring-4 ring-indigo-500/30
                       hover:ring-indigo-500/60 transition-all duration-500"
          >
            <div className="rounded-full overflow-hidden w-full h-full bg-[#1F2937]">
              <img
                src="/firstImage.jpg"
                alt="Joydep Dhar – ERP & Full Stack Developer"
                className="object-cover w-full h-full"
                loading="lazy"
                width="384"
                height="384"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
