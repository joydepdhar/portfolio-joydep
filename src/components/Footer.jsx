import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0F172A] text-gray-300 pt-16 pb-10 px-6 sm:px-12 border-t border-gray-700"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold text-indigo-400 mb-4">📞 Contact</h4>
          <p className="flex items-center gap-3 hover:text-indigo-300 transition duration-300">
            <FaPhoneAlt /> <span>+880 1793-178452</span>
          </p>
          <p className="flex items-center gap-3 hover:text-indigo-300 transition duration-300 mt-2">
            <FaEnvelope /> <span>joydep.cse.aiub@gmail.com</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-indigo-400 mb-4">🔗 Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Services', id: 'services' },
              { label: 'Projects', id: 'projects' },
              { label: 'About', id: 'about' },
            ].map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="hover:text-indigo-300 transition duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-bold text-indigo-400 mb-4">🌐 Follow Me</h4>
          <div className="flex space-x-6 text-2xl">
            <motion.a
              href="https://github.com/joydepdhar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="hover:text-indigo-300 transition"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/joydep-dhar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="hover:text-indigo-300 transition"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://facebook.com/joydepdhar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="hover:text-indigo-300 transition"
            >
              <FaFacebook />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Joydep Dhar</span>. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
