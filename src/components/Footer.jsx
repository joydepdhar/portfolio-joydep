import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/joydepdhar",
    label: "GitHub",
    accent: "hover:text-white hover:border-white/25",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/joydep-dhar-15a8451aa",
    label: "LinkedIn",
    accent: "hover:text-cyan-400 hover:border-cyan-500/40",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/joydepdhar",
    label: "Facebook",
    accent: "hover:text-indigo-400 hover:border-indigo-500/40",
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative text-gray-400 pt-20 pb-10 px-6 sm:px-12 overflow-hidden"
      style={{ background: "#0A0F1E", fontFamily: "'Syne', 'Inter', sans-serif" }}
      aria-label="Site footer"
    >
      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Top border gradient ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(6,182,212,0.4), rgba(99,102,241,0.4), transparent)",
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Top: brand + CTA ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center
                        justify-between gap-6 pb-12 border-b border-white/5">
          <div>
            <p className="text-xl font-black text-white tracking-tight">
              Joydep{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Dhar
              </span>
              <span className="text-cyan-400">.</span>
            </p>
            <p className="text-xs text-gray-600 mt-1 tracking-wide">
              ERP & Business Automation Developer · Dhaka, Bangladesh
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-gradient-to-r from-cyan-500 to-indigo-500
                       text-white text-sm font-semibold
                       hover:opacity-90 transition-all duration-300 active:scale-95"
          >
            Let's work together
          </a>
        </div>

        {/* ── Middle: 3 col grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-12">

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase
                           text-gray-600 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:joydep.cse.aiub@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-500
                             hover:text-cyan-400 transition-colors duration-200"
                >
                  <FaEnvelope size={13} className="flex-shrink-0 text-cyan-400/60" />
                  joydep.cse.aiub@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801793178452"
                  className="flex items-center gap-3 text-sm text-gray-500
                             hover:text-cyan-400 transition-colors duration-200"
                >
                  <FaPhoneAlt size={13} className="flex-shrink-0 text-cyan-400/60" />
                  +880 1793-178452
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <FaMapMarkerAlt size={13} className="flex-shrink-0 text-cyan-400/60" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase
                           text-gray-600 mb-5">
              Quick links
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm text-gray-500 hover:text-white
                               transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-3 h-px bg-gray-700 group-hover:bg-cyan-400
                                 group-hover:w-4 transition-all duration-200"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + availability */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase
                           text-gray-600 mb-5">
              Find me on
            </h4>

            <div className="flex gap-3 mb-8">
              {socials.map(({ icon: Icon, href, label, accent }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl border border-white/10
                              flex items-center justify-center
                              text-gray-600 ${accent}
                              transition-all duration-200`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div
              className="rounded-xl border border-white/5 px-4 py-3"
              style={{ background: "#0E1629" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">
                  Open to work
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Available for freelance projects, ERP consulting, and remote roles.
              </p>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between
                     gap-4 pt-8 border-t border-white/5"
        >
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-400 font-semibold">Joydep Dhar</span>.
            All rights reserved. Built with React + Tailwind.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-gray-600
                       hover:text-cyan-400 transition-colors duration-200 group"
            aria-label="Scroll back to top"
          >
            Back to top
            <span
              className="w-6 h-6 rounded-lg border border-white/10 flex items-center justify-center
                         group-hover:border-cyan-500/40 transition-colors duration-200"
            >
              <FaArrowUp size={10} />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}



// import React from 'react';
// import {
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
//   FaPhoneAlt,
//   FaEnvelope,
// } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="bg-[#0F172A] text-gray-300 pt-16 pb-10 px-6 sm:px-12 border-t border-gray-700">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
//         {/* Contact Info */}
//         <div>
//           <h4 className="text-xl font-bold text-indigo-400 mb-4">📞 Contact</h4>
//           <p className="flex items-center gap-3 hover:text-indigo-300 transition-colors">
//             <FaPhoneAlt /> <span>+880 1793-178452</span>
//           </p>
//           <p className="flex items-center gap-3 hover:text-indigo-300 transition-colors mt-2">
//             <FaEnvelope /> <span>joydep.cse.aiub@gmail.com</span>
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-xl font-bold text-indigo-400 mb-4">🔗 Quick Links</h4>
//           <ul className="space-y-3">
//             {[
//               { label: 'Home', id: 'home' },
//               { label: 'Services', id: 'services' },
//               { label: 'Projects', id: 'projects' },
//               { label: 'About', id: 'about' },
//             ].map(({ label, id }) => (
//               <li key={id}>
//                 <a
//                   href={`#${id}`}
//                   className="hover:text-indigo-300 transition-colors"
//                 >
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h4 className="text-xl font-bold text-indigo-400 mb-4">🌐 Follow Me</h4>
//           <div className="flex space-x-6 text-2xl">
//             <a
//               href="https://github.com/joydepdhar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-indigo-300 transition-colors"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://linkedin.com/in/joydep-dhar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-indigo-300 transition-colors"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://facebook.com/joydepdhar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-indigo-300 transition-colors"
//             >
//               <FaFacebook />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="text-center mt-12 text-sm text-gray-500">
//         © {new Date().getFullYear()}{" "}
//         <span className="text-gray-300 font-semibold">Joydep Dhar</span>. All
//         rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

