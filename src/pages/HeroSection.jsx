import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaBriefcase, FaFolderOpen, FaLinkedin, FaGithub } from "react-icons/fa";

/* ─── Letter animation variants ─── */
const letterVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 24 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ─── Animated Name ─── */
function AnimatedName({ firstName, lastName }) {
  return (
    <motion.h1
      className="flex flex-wrap text-5xl sm:text-7xl font-black leading-none tracking-tight
                 text-center md:text-left"
      aria-label={`${firstName} ${lastName}`}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
    >
      {/* SEO-friendly hidden text for crawlers */}
      <span className="sr-only">{firstName} {lastName}</span>

      {/* First name — white */}
      {firstName.split("").map((char, i) => (
        <motion.span
          key={`f-${i}`}
          variants={letterVariants}
          className="inline-block text-white"
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}

      <span className="mx-3" aria-hidden="true" />

      {/* Last name — gradient */}
      <span
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400
                   bg-clip-text text-transparent"
        aria-hidden="true"
      >
        {lastName.split("").map((char, i) => (
          <motion.span
            key={`l-${i}`}
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
        aria-hidden="true"
      >
        .
      </motion.span>
    </motion.h1>
  );
}

/* ─── Stat Badge ─── */
function StatBadge({ value, label }) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <span className="text-xl font-bold text-white">{value}</span>
      <span className="text-xs text-gray-500 tracking-wide">{label}</span>
    </div>
  );
}

/* ─── Skill Pill ─── */
function SkillPill({ label }) {
  return (
    <span
      className="px-3 py-1 text-xs font-medium rounded-full
                 border border-white/10 text-gray-400
                 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300
                 transition-all duration-200"
    >
      {label}
    </span>
  );
}

/* ─── Tilt Image Card ─── */
function TiltCard({ children }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 180, damping: 24 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative flex justify-center"
    >
      {children}
    </motion.div>
  );
}

/* ─── Scroll Indicator ─── */
function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                 text-gray-600 hover:text-cyan-400 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      aria-label="Scroll down"
    >
      <span className="text-xs tracking-widest uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
      />
    </motion.a>
  );
}

/* ─── Main Hero Section ─── */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center
                 px-6 sm:px-12 pt-24 pb-16 text-white overflow-hidden"
      style={{
        background: "#0A0F1E",
        fontFamily: "'Syne', 'Inter', sans-serif",
      }}
    >
      {/* ── Background: subtle dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Background: radial glow ── */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Content grid ── */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2
                      gap-16 items-center z-10">

        {/* ── LEFT ── */}
        <div className="space-y-7 max-w-xl text-center md:text-left mx-auto md:mx-0">

          {/* Available badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 text-xs font-semibold
                       tracking-widest uppercase text-cyan-400
                       justify-center md:justify-start"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full
                               rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            Available for work
          </motion.div>

          {/* Animated name */}
          <AnimatedName firstName="JOYDEP" lastName="DHAR" />

          {/* Role */}
          <motion.h2
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl font-semibold tracking-wide"
            style={{ color: "#F59E0B" }}
          >
            ERP & Business Automation Developer
          </motion.h2>

          {/* Current company */}
          <motion.p
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm text-gray-500"
          >
            Odoo ERP Developer at{" "}
            <span className="text-gray-300 font-medium">Zylo, Dhaka</span>
          </motion.p>

          {/* Description */}
          <motion.p
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            I help{" "}
            <span className="text-cyan-400 font-semibold">
              businesses automate operations
            </span>
            , reduce manual work, and make{" "}
            <span className="text-cyan-400 font-semibold">
              data-driven decisions
            </span>{" "}
            using Odoo ERP, Power BI, Django, and modern web technologies.
          </motion.p>

          {/* Skill pills */}
          <motion.div
            custom={0.55}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {["Odoo ERP", "Power BI", "Django", "React", "PostgreSQL", "Python"].map(
              (s) => <SkillPill key={s} label={s} />
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={0.6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex gap-8 justify-center md:justify-start pt-1
                       border-t border-white/5 pt-4"
          >
            <StatBadge value="2+" label="Years exp." />
            <div className="w-px bg-white/10" />
            <StatBadge value="10+" label="Projects" />
            <div className="w-px bg-white/10" />
            <StatBadge value="5+" label="ERP clients" />
          </motion.div>

          {/* CTA buttons */}
          <motion.nav
            custom={0.7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
            aria-label="Primary actions"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                         bg-gradient-to-r from-cyan-500 to-indigo-500
                         text-white font-semibold text-sm
                         hover:from-cyan-400 hover:to-indigo-400
                         hover:shadow-lg hover:shadow-cyan-500/20
                         transition-all duration-300 active:scale-95"
            >
              <FaBriefcase size={15} />
              Hire Me
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                         border border-white/15 text-gray-300 font-semibold text-sm
                         hover:border-cyan-400/50 hover:text-cyan-300
                         hover:bg-cyan-400/5
                         transition-all duration-300 active:scale-95"
            >
              <FaFolderOpen size={15} />
              View Projects
            </a>
          </motion.nav>

          {/* Social links */}
          <motion.div
            custom={0.8}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex gap-4 justify-center md:justify-start"
          >
            <a
              href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cyan-400 transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/joydepdhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cyan-400 transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} />
            </a>
          </motion.div>

        </div>

        {/* ── RIGHT: Tilt profile card ── */}
        <TiltCard>
          {/* Decorative ring 1 */}
          <div
            className="absolute inset-0 rounded-full scale-110 pointer-events-none"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(6,182,212,0.15), rgba(99,102,241,0.15), transparent 60%)",
              animation: "spin 12s linear infinite",
            }}
          />

          {/* Decorative ring 2 */}
          <div
            className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]
                       rounded-full border border-white/5 pointer-events-none"
          />

          {/* Profile image container */}
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96
                       rounded-full overflow-hidden
                       ring-1 ring-white/10"
            style={{
              background: "linear-gradient(135deg, #0e7490, #4338ca)",
              padding: "3px",
            }}
          >
            <div className="rounded-full overflow-hidden w-full h-full bg-[#111827]">
              <img
                src="/firstImage.jpg"
                alt="Joydep Dhar – ERP & Business Automation Developer based in Dhaka"
                loading="eager"
                fetchPriority="high"
                width="384"
                height="384"
                className="object-cover w-full h-full
                           hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Floating badge — currently at */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -bottom-2 -left-4 sm:left-0
                       flex items-center gap-2 px-4 py-2 rounded-2xl
                       border border-white/10 text-xs font-medium text-gray-300"
            style={{ background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(12px)" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Currently @ Zylo, Dhaka
          </motion.div>

          {/* Floating badge — open to remote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute -top-2 -right-4 sm:right-0
                       flex items-center gap-2 px-4 py-2 rounded-2xl
                       border border-cyan-500/20 text-xs font-medium text-cyan-300"
            style={{ background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(12px)" }}
          >
            Open to remote
          </motion.div>

        </TiltCard>
      </div>

      {/* ── Scroll indicator ── */}
      <ScrollIndicator />

      {/* ── Spin keyframe for decorative ring ── */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-play-state: paused !important; }
        }
      `}</style>
    </section>
  );
}



// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaFolderOpen } from "react-icons/fa";

// /* Letter animation */
// const letterVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.85 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 420, damping: 26 },
//   },
// };

// /* Animated Name */
// function LetterByLetterGradient({ firstName, lastName }) {
//   return (
//     <motion.h1
//       className="flex flex-wrap text-4xl sm:text-6xl font-extrabold leading-tight text-center md:text-left"
//       aria-label={`${firstName} ${lastName}`}
//       initial="hidden"
//       animate="visible"
//       variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
//     >
//       {firstName.split("").map((char, idx) => (
//         <motion.span
//           key={`first-${idx}`}
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
//             key={`last-${idx}`}
//             variants={letterVariants}
//             className="inline-block"
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </span>

//       <motion.span
//         variants={letterVariants}
//         className="inline-block text-cyan-400"
//       >
//         .
//       </motion.span>
//     </motion.h1>
//   );
// }

// /* Hero Section */
// export default function HeroSection() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 pt-24 text-white bg-[#0F172A]"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       {/* Background Grid */}
//       <div className="absolute inset-0 bg-[url('/grid.png')] bg-cover opacity-5 pointer-events-none" />
//       <div className="absolute inset-0 bg-[#0F172A]/70 pointer-events-none" />

//       <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">

//         {/* LEFT CONTENT */}
//         <div className="space-y-8 max-w-xl text-center md:text-left mx-auto md:mx-0">
          
//           <p className="text-sm sm:text-base uppercase tracking-widest font-semibold text-cyan-400">
//             Hello, I’m
//           </p>

//           <LetterByLetterGradient firstName="JOYDEP" lastName="DHAR" />

//           {/* Value-driven headline */}
//           <h2 className="text-xl sm:text-2xl font-semibold text-amber-400">
//             ERP & Business Automation Developer
//           </h2>

//           {/* Trust signal */}
//           <p className="text-sm text-gray-400">
//             Odoo ERP Developer at <span className="text-gray-200 font-medium">Zylo, Dhaka</span>
//           </p>

//           {/* Short, business-focused description */}
//           <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//             I help <span className="text-cyan-400 font-medium">businesses automate operations</span>,
//             reduce manual work, and make
//             <span className="text-cyan-400 font-medium"> data-driven decisions</span>
//             using Odoo ERP, Django, and modern web technologies.
//           </p>

//           {/* Tech stack */}
//           <p className="text-gray-400 font-medium">
//             Python · Django · React · PostgreSQL · Odoo · Power BI
//           </p>

//           {/* CTA Buttons */}
//           <nav className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-full
//                          bg-indigo-600 text-white font-semibold
//                          hover:bg-amber-400 hover:text-gray-900
//                          transition-all duration-300 shadow-lg"
//             >
//               <FaBriefcase size={18} />
//               Hire Me
//             </a>

//             <a
//               href="#projects"
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-full
//                          border border-gray-600 text-gray-200 font-semibold
//                          hover:border-cyan-400 hover:text-cyan-400
//                          transition-all duration-300"
//             >
//               <FaFolderOpen size={18} />
//               View Projects
//             </a>
//           </nav>
//         </div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           className="flex justify-center"
//           initial={{ scale: 1 }}
//           whileHover={{ scale: 1.06, rotate: 2 }}
//           transition={{ type: "spring", stiffness: 260, damping: 22 }}
//         >
//           <div
//             className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96
//                        rounded-full p-2 bg-gradient-to-tr
//                        from-cyan-500 via-indigo-500 to-transparent
//                        shadow-2xl ring-4 ring-indigo-500/30
//                        hover:ring-indigo-500/60 transition-all duration-500"
//           >
//             <div className="rounded-full overflow-hidden w-full h-full bg-[#1F2937]">
//               <img
//                 src="/firstImage.jpg"
//                 alt="Joydep Dhar – ERP & Full Stack Developer"
//                 className="object-cover w-full h-full"
//                 loading="lazy"
//                 width="384"
//                 height="384"
//               />
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
