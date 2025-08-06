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
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Todo App',
    tech: 'Python • Django',
    description:
      'Task management web application with user authentication, categorized task views, and real-time updates.',
    github: 'https://github.com/joydepdhar/Python_Django_Project/tree/main/Todo_App_Project',
    image: '/images/Todo_app.PNG',
  },
  {
    title: 'Social Media App',
    tech: 'Python • Django',
    description:
      'A full-featured social networking platform with login, profile management, post creation, likes, and comments.',
    github: 'https://github.com/joydepdhar/Python_Django_Project/tree/main/Social_Media_Project',
    image: '/images/SocialMediaApp.PNG',
  },
  {
    title: 'LMS - Learning Management System',
    tech: 'Python • JavaScript • HTML • CSS • Bootstrap',
    description:
      'An education-based platform featuring course modules, admin controls, and student-teacher interaction tools.',
    github: 'https://github.com/joydepdhar/Full-Stack-Project/tree/main/Full-Stack-Project/lms_system',
    image: '/images/LMS.PNG',
  },
  {
    title: 'Library Management System',
    tech: 'C# • Windows Forms',
    description:
      'A desktop app for efficient book tracking, user registration, and automated borrowing/return workflows.',
    github: 'https://github.com/joydepdhar/LibraryManagementSystemWithCSharp',
    image: '/images/LibraryManagementSystemByCSharp.PNG',
  },
  {
    title: 'Store Management System',
    tech: 'C# • ASP.NET Web API',
    description:
      'An API-driven backend for managing inventory, product data, and store operations with role-based access.',
    github: 'https://github.com/joydepdhar/StoreManagementSystem_FinalProject_ASP.Net',
    image: '/images/BackEndProject.PNG',
  },
  {
    title: 'E-Commerce Website',
    tech: 'Python • Django REST Framework • React • Cloudinary',
    description:
      'A modern full-stack e-commerce platform with secure authentication, product management, checkout, and image uploads using Cloudinary. Built for speed, usability, and scalability.',
    github: 'https://github.com/joydepdhar/E-Com',
    image: '/images/AuraEcom.png',
    liveLink: 'https://e-com-seven-alpha.vercel.app/',
  },
];

function Project() {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12 bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-indigo-400 tracking-wide text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1F2937] rounded-xl border border-gray-700 p-6 shadow-md hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover rounded-lg border border-gray-600 mb-5 hover:scale-105 transition-transform duration-300"
              />

              <h3 className="text-2xl font-semibold text-indigo-300 mb-1">{project.title}</h3>
              <p className="text-sm text-slate-400 italic mb-2">{project.tech}</p>
              <p className="text-slate-300 text-sm mb-4">{project.description}</p>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition"
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-green-400 hover:text-green-300 font-medium text-sm transition"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
