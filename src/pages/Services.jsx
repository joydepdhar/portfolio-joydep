import React from 'react';
import { FaCode, FaDatabase, FaCogs, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: 'Full Stack Web Development',
      icon: <FaLaptopCode className="text-5xl text-yellow-400 mb-4 transition-colors duration-300 group-hover:text-yellow-300" />,
      description: 'Build scalable full-stack web apps using Django, ASP.NET, and React with clean, maintainable code.',
    },
    {
      title: 'Backend Architecture & APIs',
      icon: <FaDatabase className="text-5xl text-yellow-400 mb-4 transition-colors duration-300 group-hover:text-yellow-300" />,
      description: 'Design secure, RESTful APIs and efficient database schemas using Django REST, ASP.NET API, and MySQL.',
    },
    {
      title: 'Frontend UI & UX',
      icon: <FaCode className="text-5xl text-yellow-400 mb-4 transition-colors duration-300 group-hover:text-yellow-300" />,
      description: 'Develop intuitive, responsive interfaces using React and Tailwind, focused on performance and usability.',
    },
    {
      title: 'System Integration & Deployment',
      icon: <FaCogs className="text-5xl text-yellow-400 mb-4 transition-colors duration-300 group-hover:text-yellow-300" />,
      description: 'Integrate APIs, deploy applications, and manage version control with GitHub for production readiness.',
    },
  ];

  // Framer motion variants for staggered fade-up animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="bg-[#0F172A] text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-yellow-400 tracking-wide">What I Offer</h2>
        <p className="text-gray-300 mb-16 text-lg max-w-3xl mx-auto">
          End-to-end solutions across backend, frontend, and deployment with a strong focus on quality and performance.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group bg-[#1B1F3B] p-7 rounded-xl shadow-lg cursor-default hover:shadow-yellow-400/50 hover:scale-[1.05] transition-transform duration-300"
              variants={cardVariants}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
