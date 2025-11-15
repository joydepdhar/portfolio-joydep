import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartBar, FaCogs } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const services = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    icon: <FaLaptopCode className="text-5xl text-indigo-400 mb-4" aria-hidden="true" />,
    short:
      'End-to-end web systems: product thinking, UI/UX, fast backend, secure APIs and reliable deployments.',
    steps: [
      '1. Understand your business & pain areas — discovery workshops and stakeholder interviews.',
      '2. Design your website and brand experience — brand color, typography, and visual system.',
      '3. Database & data model design — scalable schemas with security, indexing, and backups.',
      '4. Frontend development and iterative reviews — component-led, accessible UI with QA & bug fixes.',
      '5. Fast backend implementation & delivery — secure APIs, performance tuning, and deployment.',
    ],
    cta: 'Book a meeting',
  },
  {
    id: 'datadriven',
    title: 'Data-Driven Decisioning (Power BI & Analytics)',
    icon: <FaChartBar className="text-5xl text-indigo-400 mb-4" aria-hidden="true" />,
    short:
      'Turn raw data into repeatable decisions — data cleansing, DAX modeling, and KPI-driven dashboards.',
    steps: [
      '1. Understand your pain points — which business questions must be answered?',
      '2. Data cleansing & pipeline preparation — ETL, normalization and schema validation.',
      '3. DAX & semantic modeling — measures, relationships, and performance-aware calculations.',
      '4. Design & deliver BI dashboards — interactive reports, KPIs, and executive summaries.',
    ],
    cta: 'BI Assessment',
  },
  {
    id: 'odoo',
    title: 'Odoo Development & Customization',
    icon: <FaCogs className="text-5xl text-indigo-400 mb-4" aria-hidden="true" />,
    short:
      'Odoo ERP tailored to your process — analysis, custom module development and safe upgrades.',
    steps: [
      '1. Business analysis & demo — map your current processes and show a working prototype.',
      '2. Odoo design & custom development — modular, upgrade-safe customizations.',
      '3. Odoo updates & continuous improvement — version upgrades, optimization, and support.',
    ],
    cta: 'Book Odoo Discovery',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0f172a] text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-indigo-400 tracking-wide">Services</h2>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto text-lg">
            Professional development, automation, and data solutions that deliver measurable business impact.
          </p>
        </header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {services.map((s, idx) => (
            <motion.article
              key={s.id}
              className="group bg-[#111827] p-8 rounded-2xl shadow-lg border border-transparent hover:border-indigo-400 transition-all duration-300 hover:scale-[1.04] flex flex-col"
              variants={cardVariants}
              aria-labelledby={`${s.id}-title`}
              role="region"
            >
              <div className="flex items-start gap-6">
                <div aria-hidden="true">{s.icon}</div>
                <div className="flex-1">
                  <h3 id={`${s.id}-title`} className="text-xl font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{s.short}</p>
                </div>
              </div>

              <ol className="mt-4 list-decimal list-inside space-y-2 text-slate-300 text-sm md:text-sm flex-1">
                {s.steps.map((step, i) => (
                  <li key={i} className="leading-relaxed">
                    <span className="font-medium text-slate-100 mr-2">{step.replace(/^\d+\.\s*/, '')}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href={`#contact`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full block mt-4 text-center bg-[#7C3AED] text-white py-2 rounded-md font-semibold hover:bg-[#FACC15] hover:text-[#1F2937] transition"
                  aria-label={`${s.title} - ${s.cta}`}
                >
                  {s.cta}
                </a>

              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
