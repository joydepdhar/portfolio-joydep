import React from 'react';

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
    title: 'LMS-Learning Management System',
    tech: 'Python • JavaScript • HTML • CSS • Bootstrap',
    description:
      'A web-based platform designed to support hunger relief with an intuitive interface and donation management.',
    github: 'https://github.com/joydepdhar/Full-Stack-Project/tree/main/Full-Stack-Project/lms_system',
    image: '/images/LMS.PNG',
  },
  {
    title: 'Library Management System',
    tech: 'C# • Windows Forms',
    description:
      'A desktop application for efficient book tracking, user management, and automated borrowing/return processes.',
    github: 'https://github.com/joydepdhar/LibraryManagementSystemWithCSharp',
    image: '/images/LibraryManagementSystemByCSharp.PNG',
  },
  {
    title: 'Store Management System',
    tech: 'C# • ASP.NET Web API',
    description:
      'An API-based system to manage inventory, sales, and streamline store operations with secure endpoints.',
    github: 'https://github.com/joydepdhar/StoreManagementSystem_FinalProject_ASP.Net',
    image: '/images/BackEndProject.PNG',
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

              <h3 className="text-2xl font-semibold text-indigo-300 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 italic mb-2">{project.tech}</p>
              <p className="text-slate-300 text-sm mb-4">{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-400 hover:text-indigo-300 font-medium text-sm transition"
              >
                Visit GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
