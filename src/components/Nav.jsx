import React from 'react';
import { motion } from 'framer-motion';
import SvgAnimatedLogo from './SvgAnimatedLogo';
import ThemeToggle from './ThemeToggle';

function Nav() {
  const navLinks = [
    { label: 'Home', id: 'home' },        // fixed: lowercase
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="shadow-lg fixed w-full z-50 dark:bg-gray-900 backdrop-blur-lg"
      style={{
        background: 'linear-gradient(90deg, #0F172A 0%, #1E3A8A 50%, #3B82F6 100%)',
      }}
    >
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <a href="#home" className="block">
              <span className="sr-only">Home</span>
              <SvgAnimatedLogo /> {/* Fallback: replace with text if missing */}
            </a>
          </div>

          {/* Menu Links - Center */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map(({ label, id }) => (
              <motion.a
                key={id}
                href={`#${id}`}
                whileHover={{ scale: 1.05 }}
                className="relative group text-gray-200 dark:text-gray-300 text-sm font-semibold transition duration-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Right Side - Hire Me & Theme Toggle */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.linkedin.com/in/joydep-dhar-15a8451aa" // fixed
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 px-7 py-2.5 text-sm font-semibold text-[#1F2937] shadow-lg hover:brightness-110 transition duration-300"
            >
              Hire Me
            </motion.a>
          </motion.div>

          {/* Mobile Menu Placeholder (non-functional unless you add logic) */}
          <div className="flex md:hidden">
            <button
              className="rounded-md bg-gray-200 dark:bg-gray-700 p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Nav;
