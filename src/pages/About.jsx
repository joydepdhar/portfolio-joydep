import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const facts = [
  { value: "2+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "5+", label: "ERP clients" },
  { value: "3", label: "Core specialisms" },
];

const values = [
  {
    title: "Business-first thinking",
    desc: "I understand requirements before writing a single line of code.",
    accent: "text-cyan-400",
    glow: "rgba(6,182,212,0.08)",
    border: "hover:border-cyan-500/30",
  },
  {
    title: "Full ownership",
    desc: "From architecture to deployment — I take responsibility for the whole product.",
    accent: "text-amber-400",
    glow: "rgba(251,191,36,0.07)",
    border: "hover:border-amber-500/30",
  },
  {
    title: "Built to scale",
    desc: "Clean code, documented systems, and long-term maintainability by default.",
    accent: "text-indigo-400",
    glow: "rgba(99,102,241,0.08)",
    border: "hover:border-indigo-500/30",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative text-white py-28 px-6 sm:px-12 overflow-hidden"
      style={{ background: "#0A0F1E", fontFamily: "'Syne', 'Inter', sans-serif" }}
      aria-labelledby="about-heading"
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

      {/* ── Ambient glows ── */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section label ── */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4 text-center"
        >
          The person behind the work
        </motion.p>

        {/* ── Heading ── */}
        <motion.h2
          id="about-heading"
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black tracking-tight text-white text-center mb-5"
        >
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* ── Identity line ── */}
        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-500 text-center text-sm tracking-wide mb-16 max-w-lg mx-auto"
        >
          ERP & Business Automation Developer · Full-Stack Engineer · Problem-Solver
        </motion.p>

        {/* ── Main content: 2 col layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

          {/* LEFT — story */}
          <motion.div
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-base leading-relaxed text-gray-400"
          >
            <p>
              I'm{" "}
              <span className="text-white font-semibold">Joydep Dhar</span> — a
              full-stack developer focused on building{" "}
              <span className="text-cyan-400 font-semibold">
                scalable, automation-driven systems
              </span>{" "}
              that help businesses operate efficiently and grow sustainably.
            </p>

            <p>
              My work sits at the intersection of{" "}
              <span className="text-white font-semibold">
                engineering, product thinking, and business logic
              </span>
              . I specialise in end-to-end solutions using{" "}
              <span className="text-white font-semibold">
                Python (Django), React, PostgreSQL, and Odoo ERP
              </span>
              , with a strong emphasis on clean architecture, performance, and
              long-term maintainability.
            </p>

            <p>
              I've worked on{" "}
              <span className="text-white font-semibold">
                ERP automation, internal tools, SaaS platforms,
              </span>{" "}
              and Power BI dashboards — helping teams reduce manual work,
              improve visibility, and make informed decisions.
            </p>

            <p>
              I don't just write code. I take ownership of the{" "}
              <span className="text-white font-semibold">
                entire product lifecycle
              </span>{" "}
              — from understanding requirements and designing system
              architecture to deployment, optimisation, and ongoing improvement.
            </p>

            {/* Mission quote */}
            <div
              className="relative mt-8 px-6 py-5 rounded-2xl border border-white/5"
              style={{ background: "#0E1629" }}
            >
              <div
                className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full
                           bg-gradient-to-b from-cyan-400 to-indigo-400"
              />
              <p className="text-gray-300 italic leading-relaxed text-sm">
                "To turn complex ideas into clear, efficient, and scalable
                digital products — built with precision, reliability, and
                long-term impact."
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                           bg-gradient-to-r from-cyan-500 to-indigo-500
                           text-white text-sm font-semibold
                           hover:opacity-90 transition-all duration-300 active:scale-95"
              >
                Work with me
              </a>
              <a
                href="/JoydepDharCV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                           border border-white/10 text-gray-300 text-sm font-semibold
                           hover:border-cyan-500/40 hover:text-cyan-300
                           hover:bg-cyan-400/5 transition-all duration-300 active:scale-95"
              >
                <FaDownload size={13} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* RIGHT — stats + values */}
          <motion.div
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-white/5 p-5
                             hover:border-white/10 transition-all duration-300"
                  style={{ background: "#0E1629" }}
                >
                  <p className="text-3xl font-black text-white mb-1">{f.value}</p>
                  <p className="text-xs text-gray-500 leading-snug">{f.label}</p>
                </div>
              ))}
            </div>

            {/* Values cards */}
            <div className="space-y-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className={`group relative rounded-2xl border border-white/5 p-5
                              ${v.border} transition-all duration-300 overflow-hidden`}
                  style={{ background: "#0E1629" }}
                >
                  {/* hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${v.glow}, transparent 60%)`,
                    }}
                  />
                  <p className={`text-sm font-bold mb-1 ${v.accent}`}>{v.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Currently at */}
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/5"
              style={{ background: "#0E1629" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Currently working at</p>
                <p className="text-sm font-semibold text-white">
                  Zylo, Dhaka{" "}
                  <span className="text-gray-500 font-normal">— Odoo ERP Developer</span>
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-gray-600 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}





// import React from "react";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="w-full bg-[#0F172A] text-gray-200 py-24 px-6 md:px-12 lg:px-24"
//       aria-labelledby="about-heading"
//     >
//       <div className="max-w-5xl mx-auto">
        
//         {/* Section Title */}
//         <h2
//           id="about-heading"
//           className="text-3xl md:text-4xl font-extrabold text-white mb-6"
//         >
//           About Me
//         </h2>

//         {/* Identity Line */}
//         <p className="text-gray-400 text-lg md:text-xl font-medium mb-12">
//           ERP & Business Automation Developer · Full-Stack Engineer ·
//           Problem-Solver
//         </p>

//         {/* Content */}
//         <div className="space-y-7 text-lg leading-relaxed text-gray-300">
          
//           <p>
//             I’m <span className="text-white font-semibold">Joydep Dhar</span> — a
//             full-stack developer focused on building
//             <span className="text-white font-semibold">
//               {" "}scalable, automation-driven systems
//             </span>{" "}
//             that help businesses operate efficiently and grow sustainably.
//           </p>

//           <p>
//             My work sits at the intersection of
//             <span className="text-white font-semibold">
//               {" "}engineering, product thinking, and business logic
//             </span>.
//             I specialize in building end-to-end solutions using
//             <span className="text-white font-semibold">
//               {" "}Python (Django), React, PostgreSQL, and Odoo ERP
//             </span>,
//             with a strong emphasis on clean architecture, performance, and
//             long-term maintainability.
//           </p>

//           <p>
//             Over the years, I’ve worked on
//             <span className="text-white font-semibold">
//               {" "}ERP automation, internal tools, SaaS platforms,
//             </span>{" "}
//             and data-driven dashboards—helping teams reduce manual work, improve
//             visibility, and make informed decisions.
//           </p>

//           {/* How you work */}
//           <p>
//             I don’t just focus on writing code. I take ownership of the
//             <span className="text-white font-semibold">
//               {" "}entire product lifecycle
//             </span>{" "}
//             — from understanding requirements and designing system architecture
//             to development, deployment, optimization, and ongoing improvement.
//           </p>

//           {/* Philosophy */}
//           <p>
//             My approach is simple:
//             <span className="text-white font-semibold">
//               {" "}build systems that solve real problems,
//             </span>{" "}
//             align with business workflows, and remain reliable as the company
//             scales.
//           </p>

//           {/* Mission */}
//           <div className="pt-6">
//             <p className="text-white font-semibold text-xl mb-2">
//               My mission
//             </p>
//             <p className="italic text-gray-300 text-center">
//               “To turn complex ideas into clear, efficient, and scalable digital
//               products — built with precision, reliability, and long-term
//               impact.”
//             </p>
//           </div>

//           {/* Signature */}
//           <p className="text-gray-400 mt-8">
//             I don’t just build software — I build systems that enable growth.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
