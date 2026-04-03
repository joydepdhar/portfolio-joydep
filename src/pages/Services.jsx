import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChartBar, FaCogs, FaArrowRight } from "react-icons/fa";

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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const services = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    icon: FaLaptopCode,
    accent: "from-cyan-500 to-sky-500",
    accentText: "text-cyan-400",
    accentBorder: "group-hover:border-cyan-500/40",
    accentGlow: "rgba(6,182,212,0.08)",
    short:
      "Scalable, secure web applications built with a business-first mindset — from idea to production.",
    steps: [
      "Business discovery & requirement analysis",
      "UI/UX planning and system architecture",
      "Database & backend API development",
      "Modern frontend implementation & QA",
      "Deployment, optimization & maintenance",
    ],
    cta: "Start a Project",
  },
  {
    id: "datadriven",
    title: "Data Analytics & Power BI",
    icon: FaChartBar,
    accent: "from-amber-400 to-orange-400",
    accentText: "text-amber-400",
    accentBorder: "group-hover:border-amber-500/40",
    accentGlow: "rgba(251,191,36,0.07)",
    short:
      "Transform raw data into insights that drive decisions — dashboards, KPIs, and reporting systems.",
    steps: [
      "Business questions & KPI identification",
      "Data cleaning & ETL preparation",
      "DAX modeling & performance optimization",
      "Interactive Power BI dashboards",
    ],
    cta: "Get BI Assessment",
  },
  {
    id: "odoo",
    title: "Odoo ERP Development",
    icon: FaCogs,
    accent: "from-indigo-400 to-violet-400",
    accentText: "text-indigo-400",
    accentBorder: "group-hover:border-indigo-500/40",
    accentGlow: "rgba(99,102,241,0.08)",
    short:
      "Customized Odoo ERP solutions to automate workflows, reduce costs, and improve efficiency.",
    steps: [
      "Process analysis & ERP gap assessment",
      "Custom module development (upgrade-safe)",
      "Integration, testing & user training",
      "Ongoing support & performance tuning",
    ],
    cta: "Book Odoo Discovery",
  },
];

/* ── Step dot list item ── */
function StepItem({ text, accentText }) {
  return (
    <li className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${accentText}`} />
      {text}
    </li>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative text-white py-28 px-6 sm:px-12 overflow-hidden"
      style={{ background: "#0A0F1E", fontFamily: "'Syne', 'Inter', sans-serif" }}
      aria-labelledby="services-heading"
    >
      {/* ── Dot grid background ── */}
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <header className="text-center mb-20">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4"
          >
            What I do
          </motion.p>

          <motion.h2
            id="services-heading"
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white"
          >
            Services built for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              real outcomes
            </span>
          </motion.h2>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            ERP automation, data visibility, and full-stack development — focused on
            business impact, not just writing code.
          </motion.p>
        </header>

        {/* ── Services grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.13 }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                variants={cardVariants}
                className={`group relative flex flex-col rounded-2xl border border-white/5
                            ${s.accentBorder}
                            transition-all duration-300 overflow-hidden`}
                style={{ background: "#0E1629" }}
                role="region"
                aria-labelledby={`${s.id}-title`}
              >
                {/* Card glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${s.accentGlow}, transparent 60%)`,
                  }}
                />

                {/* Top accent bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative flex flex-col flex-1 p-8">

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6
                                bg-gradient-to-br ${s.accent} bg-opacity-10`}
                    style={{ background: s.accentGlow.replace("0.08", "0.15").replace("0.07", "0.12") }}
                  >
                    <Icon className={`text-xl ${s.accentText}`} aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3
                    id={`${s.id}-title`}
                    className="text-lg font-bold text-white mb-3 leading-snug"
                  >
                    {s.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {s.short}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-white/5 mb-5" />

                  {/* Steps */}
                  <ul className="space-y-2.5 flex-1">
                    {s.steps.map((step, i) => (
                      <StepItem key={i} text={step} accentText={s.accentText} />
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className={`inline-flex items-center justify-center gap-2 w-full
                                 px-6 py-3 rounded-full text-sm font-semibold
                                 border border-white/10
                                 text-gray-300 hover:text-white
                                 hover:border-transparent
                                 bg-gradient-to-r hover:${s.accent}
                                 transition-all duration-300 active:scale-95`}
                      aria-label={`${s.title} — ${s.cta}`}
                    >
                      {s.cta}
                      <FaArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── Bottom trust line ── */}
        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm mt-16"
        >
          All services include clear communication, documented code, and post-delivery support.
        </motion.p>

      </div>
    </section>
  );
}





// import React from "react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaChartBar, FaCogs } from "react-icons/fa";

// const cardVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: "easeOut" },
//   },
// };

// const services = [
//   {
//     id: "fullstack",
//     title: "Full-Stack Web Development",
//     icon: <FaLaptopCode className="text-5xl text-indigo-400 mb-4" aria-hidden="true" />,
//     short:
//       "Scalable, secure web applications built with a business-first mindset — from idea to production.",
//     steps: [
//       "Business discovery & requirement analysis",
//       "UI/UX planning and system architecture",
//       "Database & backend API development",
//       "Modern frontend implementation & QA",
//       "Deployment, optimization & maintenance",
//     ],
//     cta: "Start a Project",
//   },
//   {
//     id: "datadriven",
//     title: "Data Analytics & Power BI",
//     icon: <FaChartBar className="text-5xl text-indigo-400 mb-4" aria-hidden="true" />,
//     short:
//       "Transform raw data into insights that drive decisions — dashboards, KPIs, and reporting systems.",
//     steps: [
//       "Business questions & KPI identification",
//       "Data cleaning & ETL preparation",
//       "DAX modeling & performance optimization",
//       "Interactive Power BI dashboards",
//     ],
//     cta: "Get BI Assessment",
//   },
//   {
//     id: "odoo",
//     title: "Odoo ERP Development",
//     icon: <FaCogs className="text-5xl text-indigo-400 mb-4" aria-hidden="true" />,
//     short:
//       "Customized Odoo ERP solutions to automate workflows, reduce costs, and improve efficiency.",
//     steps: [
//       "Process analysis & ERP gap assessment",
//       "Custom module development (upgrade-safe)",
//       "Integration, testing & user training",
//       "Ongoing support & performance tuning",
//     ],
//     cta: "Book Odoo Discovery",
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="bg-[#0F172A] text-white py-24 px-6 sm:px-12"
//       aria-labelledby="services-heading"
//     >
//       <div className="max-w-6xl mx-auto">
        
//         {/* Section Header */}
//         <header className="text-center mb-16">
//           <h2
//             id="services-heading"
//             className="text-4xl font-extrabold tracking-wide text-indigo-400"
//           >
//             Services
//           </h2>
//           <p className="text-slate-400 mt-4 max-w-3xl mx-auto text-lg">
//             Practical development, ERP automation, and data solutions focused on
//             real business outcomes — not just code.
//           </p>
//         </header>

//         {/* Services Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ staggerChildren: 0.12 }}
//         >
//           {services.map((s) => (
//             <motion.article
//               key={s.id}
//               variants={cardVariants}
//               className="group bg-[#111827] p-8 rounded-2xl border border-transparent
//                          hover:border-indigo-400 shadow-lg transition-all duration-300
//                          hover:scale-[1.035] flex flex-col"
//               role="region"
//               aria-labelledby={`${s.id}-title`}
//             >
//               {/* Header */}
//               <div className="flex items-start gap-5">
//                 {s.icon}
//                 <div>
//                   <h3
//                     id={`${s.id}-title`}
//                     className="text-xl font-semibold text-white mb-2"
//                   >
//                     {s.title}
//                   </h3>
//                   <p className="text-slate-400 text-sm leading-relaxed">
//                     {s.short}
//                   </p>
//                 </div>
//               </div>

//               {/* Steps */}
//               <ul className="mt-6 space-y-2 text-slate-300 text-sm flex-1">
//                 {s.steps.map((step, i) => (
//                   <li key={i} className="leading-relaxed">
//                     <span className="text-indigo-400 font-medium mr-2">•</span>
//                     {step}
//                   </li>
//                 ))}
//               </ul>

//               {/* CTA */}
//               <div className="mt-8">
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center justify-center w-full
//                              px-6 py-3 rounded-full bg-indigo-600 text-white
//                              font-semibold hover:bg-amber-400 hover:text-gray-900
//                              transition-all duration-300"
//                   aria-label={`${s.title} - ${s.cta}`}
//                 >
//                   {s.cta}
//                 </a>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
