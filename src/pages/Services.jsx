import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaDatabase,
  FaReact,
  FaCogs,
  FaPython,
  FaCloud,
  FaLinkedin,
  FaCode,
} from 'react-icons/fa';

// ✅ Fiverr & Upwork logos as inline SVGs
const FiverrIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm99.3 152h-23.8v-.2c0-15.5-12.6-28-28-28h-47.1c-15.5 0-28 12.6-28 28v.2H205v43h23.4v101.2c0 32.6 26.5 59.1 59.1 59.1h67.8v-43h-67.8c-8.9 0-16.1-7.2-16.1-16.1V227h71.8c15.5 0 28-12.6 28-28V184z"/>
  </svg>
);

const UpworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 640 512" fill="currentColor">
    <path d="M318.6 244.1c-12.2 0-22.2-9.9-22.2-22.2 0-12.2 9.9-22.2 22.2-22.2 12.2 0 22.2 9.9 22.2 22.2 0 12.2-10 22.2-22.2 22.2zm317.3-92.6c-13.7-33.1-44.9-59.3-82.5-66.4-34.9-6.5-71.4 1.8-99.6 22.7-26.4 19.6-43.8 47.8-49.2 79.3-3.6 20.8-3.6 43.4-.1 64.2 4.6 26.6 14.7 52 29.9 74.3-29.2 25.5-68.2 38.4-107.7 35.4-39.6-3-74.4-21.8-99.1-53.1-19.3-24.6-32.4-54.5-38.1-85.8l-.2-1.1H98.8V62.9h-69v246.9h106.1c6.5 38.1 22.7 74.3 47.6 104.1 36.9 45.4 92.6 73.8 150.3 77.7 57.7 3.9 114.9-16.8 157.3-56.9 22.8 10.3 47.9 15.6 73.3 15.6 22.8 0 45.9-4.3 67.3-12.9l27.3-11-18.8-25.3c-25.5-34.4-39.4-76.8-39.4-120.2-.1-24.1 4.5-47.8 13.4-70.4z"/>
  </svg>
);

function Services() {
  const services = [
    {
      title: 'Full Stack Web Development',
      icon: <FaLaptopCode className="text-5xl text-indigo-400 mb-4" />,
      description:
        'Build modern web apps with Django, ASP.NET, and React. From idea to deployment, I deliver clean, scalable, and high-performing solutions.',
    },
    {
      title: 'RESTful APIs & Backend Systems',
      icon: <FaDatabase className="text-5xl text-indigo-400 mb-4" />,
      description:
        'Design and develop secure APIs and database-driven backends for SaaS, e-commerce, and ERP platforms. Optimized for reliability and speed.',
    },
    {
      title: 'UI/UX Development with React',
      icon: <FaReact className="text-5xl text-indigo-400 mb-4" />,
      description:
        'Craft pixel-perfect, responsive interfaces with React + Tailwind CSS. My focus is usability, accessibility, and smooth user experience.',
    },
    {
      title: 'Odoo ERP Development & Automation',
      icon: <FaPython className="text-5xl text-indigo-400 mb-4" />,
      description:
        'Develop and customize Odoo ERP modules to streamline workflows, automate processes, and improve business efficiency.',
    },
    {
      title: 'Cloud Deployment & CI/CD',
      icon: <FaCloud className="text-5xl text-indigo-400 mb-4" />,
      description:
        'Deploy applications on AWS, Vercel, or Render with CI/CD pipelines. I handle version control, testing, and production readiness.',
    },
    {
      title: 'System Integration & Consultation',
      icon: <FaCogs className="text-5xl text-indigo-400 mb-4" />,
      description:
        'Integrate APIs, third-party tools, and legacy systems. Provide expert consulting on software architecture and scaling strategies.',
    },
  ];

  return (
    <section id="services" className="bg-[#0f172a] text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-indigo-400 tracking-wide">My Services</h2>
        <p className="text-slate-400 mb-16 text-lg max-w-3xl mx-auto">
          I help businesses and startups with custom web applications, ERP solutions, and scalable cloud deployments.  
          My goal: clean code, strong architecture, and lasting impact.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-transparent hover:border-indigo-400 transition-all duration-300 hover:scale-[1.05] flex flex-col"
            >
              <div className="flex flex-col items-center text-center flex-grow">
                {service.icon}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;


// import React from 'react';
// import { FaCode, FaDatabase, FaCogs, FaLaptopCode, FaPython } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// function Services() {
//   const services = [
//     {
//       title: 'Full Stack Web Development',
//       icon: <FaLaptopCode className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
//       description: 'End-to-end web applications using Django, ASP.NET, and React. Clean, scalable, and maintainable solutions built for growth.',
//     },
//     {
//       title: 'Robust Backend & APIs',
//       icon: <FaDatabase className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
//       description: 'Design secure, scalable backend systems with RESTful APIs and optimized databases. Built for performance and reliability.',
//     },
//     {
//       title: 'Modern UI/UX Development',
//       icon: <FaCode className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
//       description: 'Craft intuitive, responsive, and user-friendly interfaces with React & Tailwind, ensuring the best user experience.',
//     },
//     {
//       title: 'System Integration & Deployment',
//       icon: <FaCogs className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
//       description: 'Seamless integration of APIs, deployment pipelines, and CI/CD automation with GitHub for production-ready apps.',
//     },
//     {
//       title: 'Odoo ERP Development & Consultation',
//       icon: <FaPython className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" />,
//       description: 'Custom Odoo ERP modules, workflow automation, and integration consultation to optimize business operations and efficiency.',
//     },
//   ];

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   return (
//     <section id="services" className="bg-[#0f172a] text-white py-20 px-6 sm:px-12">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold mb-4 text-indigo-400 tracking-wide">My Services</h2>
//         <p className="text-slate-400 mb-16 text-lg max-w-3xl mx-auto">
//           Helping startups, businesses, and entrepreneurs with professional solutions in web development, ERP, and system integrations.
//         </p>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {services.map((service, idx) => (
//             <motion.div
//               key={idx}
//               className="group bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-transparent hover:border-indigo-400 transition-all duration-300 hover:scale-[1.05] flex flex-col"
//               variants={cardVariants}
//             >
//               <div className="flex flex-col items-center text-center flex-grow">
//                 {service.icon}
//                 <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
//                 <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Services;
