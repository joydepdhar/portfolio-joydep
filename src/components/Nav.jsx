import React, { useState } from 'react';
import SvgAnimatedLogo from './SvgAnimatedLogo';
import {
  Home,
  Code2,
  FolderKanban,
  User2,
  Mail,
  Menu,
  X,
  Handshake,
} from 'lucide-react';

function Nav() {
  const navLinks = [
    { label: 'Home', id: 'home', icon: <Home size={16} className="mr-2" /> },
    { label: 'Services', id: 'services', icon: <Handshake size={16} className="mr-2" /> },
    { label: 'Projects', id: 'projects', icon: <FolderKanban size={16} className="mr-2" /> },
    { label: 'About', id: 'about', icon: <User2 size={16} className="mr-2" /> },
    { label: 'Contact', id: 'contact', icon: <Mail size={16} className="mr-2" /> },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="shadow-md fixed w-full z-50 bg-[#1F2937]">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 block">
            <span className="sr-only">Home</span>
            <SvgAnimatedLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map(({ label, id, icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="relative group flex items-center text-white text-sm font-medium transition duration-300 hover:text-[#7C3AED]"
              >
                {icon}
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#7C3AED] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Hire Me Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#7C3AED] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#FACC15] hover:text-[#1F2937] transition duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="rounded-md bg-[#F9FAFB] p-2 text-[#1F2937] hover:text-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7C3AED]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pt-4 pb-6 space-y-4 bg-[#1F2937]">
            {navLinks.map(({ label, id, icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center text-white text-sm font-medium hover:text-[#7C3AED] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {icon}
                {label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/joydep-dhar-15a8451aa"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-[#7C3AED] text-white py-2 rounded-md font-semibold hover:bg-[#FACC15] hover:text-[#1F2937] transition"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Nav;
