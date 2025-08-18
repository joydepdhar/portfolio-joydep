import React from 'react';
import { FaCode, FaDatabase, FaCogs, FaLaptopCode, FaPython } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: 'Full Stack Web Development',
      icon: <FaLaptopCode className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
      description: 'End-to-end web applications using Django, ASP.NET, and React. Clean, scalable, and maintainable solutions built for growth.',
    },
    {
      title: 'Robust Backend & APIs',
      icon: <FaDatabase className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
      description: 'Design secure, scalable backend systems with RESTful APIs and optimized databases. Built for performance and reliability.',
    },
    {
      title: 'Modern UI/UX Development',
      icon: <FaCode className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
      description: 'Craft intuitive, responsive, and user-friendly interfaces with React & Tailwind, ensuring the best user experience.',
    },
    {
      title: 'System Integration & Deployment',
      icon: <FaCogs className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
      description: 'Seamless integration of APIs, deployment pipelines, and CI/CD automation with GitHub for production-ready apps.',
    },
    {
      title: 'Odoo ERP Development & Consultation',
      icon: <FaPython className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
      description: 'Custom Odoo ERP modules, workflow automation, and integration consultation to optimize business operations and efficiency.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="bg-[#0f172a] text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-indigo-400 tracking-wide">My Services</h2>
        <p className="text-slate-400 mb-16 text-lg max-w-3xl mx-auto">
          Helping startups, businesses, and entrepreneurs with professional solutions in web development, ERP, and system integrations.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-transparent hover:border-indigo-400 transition-all duration-300 hover:scale-[1.05] flex flex-col"
              variants={cardVariants}
            >
              <div className="flex flex-col items-center text-center flex-grow">
                {service.icon}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
