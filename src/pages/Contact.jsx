import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contactAnimation from "../assets/animations/Contact us!.json";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "joydep.cse.aiub@gmail.com",        // ← replace with your real email
    href: "mailto:joydep.cse.aiub@gmail.com",
    accent: "text-cyan-400",
    glow: "rgba(6,182,212,0.08)",
    border: "hover:border-cyan-500/30",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
    accent: "text-amber-400",
    glow: "rgba(251,191,36,0.07)",
    border: "hover:border-amber-500/30",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "joydep-dhar",
    href: "https://www.linkedin.com/in/joydep-dhar-15a8451aa",
    accent: "text-indigo-400",
    glow: "rgba(99,102,241,0.08)",
    border: "hover:border-indigo-500/30",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "joydepdhar",
    href: "https://github.com/joydepdhar",
    accent: "text-gray-300",
    glow: "rgba(255,255,255,0.03)",
    border: "hover:border-white/20",
  },
];

const inputClass = `
  w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600
  bg-white/5 border border-white/8
  focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5
  transition-all duration-200
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ loading: false, success: "", error: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const response = await fetch(
        "https://portfolio-contact-backend-1-qq4c.onrender.com/api/contact/send/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      setStatus({
        loading: false,
        success: "Message sent! I'll get back to you within 24 hours.",
        error: "",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({
        loading: false,
        success: "",
        error: "Something went wrong. Please try again or email me directly.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative text-white py-28 px-6 sm:px-12 overflow-hidden"
      style={{ background: "#0A0F1E", fontFamily: "'Syne', 'Inter', sans-serif" }}
      aria-labelledby="contact-heading"
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

      {/* ── Ambient glows ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <header className="text-center mb-16">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4"
          >
            Get in touch
          </motion.p>

          <motion.h2
            id="contact-heading"
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white"
          >
            Let's build something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              together
            </span>
          </motion.h2>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 mt-5 max-w-xl mx-auto text-base leading-relaxed"
          >
            Need help with Odoo ERP, Power BI dashboards, or a custom web
            system? I respond within 24 hours.
          </motion.p>
        </header>

        {/* ── Main grid ── */}
        <motion.div
          custom={0.25}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >

          {/* ── LEFT: info + animation ── */}
          <div className="space-y-5">

            {/* Contact info cards */}
            {contactInfo.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div
                  className={`group relative flex items-center gap-4 p-5 rounded-2xl
                               border border-white/5 ${c.border}
                               transition-all duration-300 overflow-hidden`}
                  style={{ background: "#0E1629" }}
                >
                  {/* hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at left, ${c.glow}, transparent 60%)`,
                    }}
                  />
                  <div
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: c.glow }}
                  >
                    <Icon className={`text-base ${c.accent}`} aria-hidden="true" />
                  </div>
                  <div className="relative">
                    <p className="text-xs text-gray-600 mb-0.5">{c.label}</p>
                    <p className={`text-sm font-semibold ${c.href ? c.accent : "text-white"}`}>
                      {c.value}
                    </p>
                  </div>
                </div>
              );

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={`${c.label}: ${c.value}`}
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}

            {/* Lottie animation — visible on lg+ */}
            <div className="hidden lg:flex justify-center pt-4">
              <Lottie
                animationData={contactAnimation}
                loop
                className="w-64 opacity-70"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div
            className="rounded-2xl border border-white/5 p-8 sm:p-10"
            style={{ background: "#0E1629" }}
          >
            {/* Available badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-500">
                Available for new projects
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs text-gray-500 mb-1.5"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Joydep Dhar"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs text-gray-500 mb-1.5"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs text-gray-500 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Odoo ERP project / Power BI dashboard / Web app"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs text-gray-500 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me briefly about your project or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status.success && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {status.success}
                </motion.p>
              )}
              {status.error && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  {status.error}
                </motion.p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2
                           py-3.5 rounded-xl font-semibold text-sm
                           bg-gradient-to-r from-cyan-500 to-indigo-500
                           text-white hover:opacity-90
                           transition-all duration-300 active:scale-[0.98]
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor" strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={13} />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import contactAnimation from "../assets/animations/Contact us!.json";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({
//     loading: false,
//     success: "",
//     error: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setStatus({ loading: false, success: "", error: "" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, success: "", error: "" });

//     try {
//       const response = await fetch(
//         "https://portfolio-contact-backend-1-qq4c.onrender.com/api/contact/send/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to send message");
//       }

//       setStatus({
//         loading: false,
//         success: "Thank you! I’ll get back to you within 24 hours.",
//         error: "",
//       });

//       setFormData({ name: "", email: "", subject: "", message: "" });
//     } catch (error) {
//       setStatus({
//         loading: false,
//         success: "",
//         error: "Something went wrong. Please try again or email me directly.",
//       });
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="bg-[#0F172A] py-24 px-6 sm:px-12 flex items-center justify-center"
//       aria-labelledby="contact-heading"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 32 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="max-w-6xl w-full bg-[#111827] rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
//       >
//         {/* LEFT — Animation / Trust */}
//         <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-500 p-10">
//           <Lottie
//             animationData={contactAnimation}
//             loop
//             className="w-full max-w-md"
//             aria-hidden="true"
//           />
//         </div>

//         {/* RIGHT — Form */}
//         <div className="p-8 sm:p-12 text-white">
//           <h2
//             id="contact-heading"
//             className="text-3xl font-extrabold mb-4"
//           >
//             Let’s Talk About Your Project
//           </h2>

//           <p className="text-slate-400 mb-8 max-w-md">
//             Need help with Odoo ERP, automation, or a custom web system?
//             Fill out the form and I’ll respond within 24 hours.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="px-4 py-3 rounded-xl bg-transparent border border-slate-700
//                            focus:ring-2 focus:ring-cyan-400 outline-none"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="px-4 py-3 rounded-xl bg-transparent border border-slate-700
//                            focus:ring-2 focus:ring-cyan-400 outline-none"
//               />
//             </div>

//             <input
//               type="text"
//               name="subject"
//               placeholder="Project / Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-transparent border border-slate-700
//                          focus:ring-2 focus:ring-cyan-400 outline-none"
//             />

//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Tell me briefly about your requirements..."
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-transparent border border-slate-700
//                          focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
//             />

//             {/* Status messages */}
//             {status.success && (
//               <p className="text-green-400 text-sm">{status.success}</p>
//             )}
//             {status.error && (
//               <p className="text-red-400 text-sm">{status.error}</p>
//             )}

//             <button
//               type="submit"
//               disabled={status.loading}
//               className="w-full py-3 rounded-xl font-semibold
//                          bg-indigo-600 hover:bg-amber-400 hover:text-gray-900
//                          transition-all duration-300 disabled:opacity-60"
//             >
//               {status.loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



















// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import Lottie from "lottie-react";
// // import contactAnimation from "../assets/animations/Contact us!.json";

// // function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     subject: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(
// //         "https://portfolio-contact-backend-1-qq4c.onrender.com/api/contact/send/",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(formData),
// //         }
// //       );

// //       if (response.ok) {
// //         alert("Message sent successfully!");
// //         setFormData({ name: "", email: "", subject: "", message: "" });
// //       } else {
// //         alert("Failed to send message.");
// //         console.error(await response.json());
// //       }
// //     } catch (error) {
// //       alert("An error occurred.");
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <section
// //       id="contact"
// //       className="min-h-screen  bg-[#0F172A] flex items-center justify-center px-4 py-16"
// //     >
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         viewport={{ once: true }}
// //         className="max-w-6xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
// //       >
// //         {/* LEFT SIDE - Lottie Animation */}
// //         <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-teal-500 to-indigo-500 p-8">
// //           <div className="w-full h-full flex items-center justify-center">
// //             <Lottie
// //               animationData={contactAnimation}
// //               loop={true}
// //               className="w-full h-full max-w-lg max-h-[500px] object-contain"
// //               style={{ width: "100%", height: "100%" }}
// //             />
// //           </div>
// //         </div>

// //         {/* RIGHT SIDE - Contact Form */}
// //         <div className="p-8 md:p-12">
// //           <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 dark:text-white mb-6">
// //             Contact Me
// //           </h2>
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Your Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //                 className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //               />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Your Email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //               />
// //             </div>
// //             <input
// //               type="text"
// //               name="subject"
// //               placeholder="Subject"
// //               value={formData.subject}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //             />
// //             <textarea
// //               name="message"
// //               rows="5"
// //               placeholder="Your Message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //             ></textarea>
// //             <button
// //               type="submit"
// //               className="w-full py-3 px-6 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition duration-300"
// //             >
// //               Send Message
// //             </button>
// //           </form>
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // }

// // export default Contact;



// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import Lottie from "lottie-react";
// // import contactAnimation from "../assets/animations/Contact us!.json"; // ✅ path to your Lottie file

// // function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     subject: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(
// //         "https://portfolio-contact-backend-1-qq4c.onrender.com/api/contact/send/",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(formData),
// //         }
// //       );

// //       if (response.ok) {
// //         alert("Message sent successfully!");
// //         setFormData({ name: "", email: "", subject: "", message: "" });
// //       } else {
// //         alert("Failed to send message.");
// //         console.error(await response.json());
// //       }
// //     } catch (error) {
// //       alert("An error occurred.");
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <section
// //       id="contact"
// //       className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-16"
// //     >
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         viewport={{ once: true }}
// //         className="max-w-6xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
// //       >
// //         {/* LEFT SIDE - Lottie Animation */}
// //         <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-teal-500 to-indigo-500 p-8">
// //           <Lottie animationData={contactAnimation} loop={true} className="max-h-96" />
// //         </div>

// //         {/* RIGHT SIDE - Contact Form */}
// //         <div className="p-8 md:p-12">
// //           <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 dark:text-white mb-6">
// //             Contact Me
// //           </h2>
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Your Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //                 className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //               />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Your Email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //               />
// //             </div>
// //             <input
// //               type="text"
// //               name="subject"
// //               placeholder="Subject"
// //               value={formData.subject}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //             />
// //             <textarea
// //               name="message"
// //               rows="5"
// //               placeholder="Your Message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //             ></textarea>
// //             <button
// //               type="submit"
// //               className="w-full py-3 px-6 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition duration-300"
// //             >
// //               Send Message
// //             </button>
// //           </form>
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // }

// // export default Contact;













// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';

// // // function Contact() {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     subject: '',
// // //     message: ''
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await fetch("https://portfolio-contact-backend-1-qq4c.onrender.com/api/contact/send/", {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       if (response.ok) {
// // //         alert("Message sent successfully!");
// // //         setFormData({ name: '', email: '', subject: '', message: '' });
// // //       } else {
// // //         alert("Failed to send message.");
// // //         console.error(await response.json());
// // //       }
// // //     } catch (error) {
// // //       alert("An error occurred.");
// // //       console.error(error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 30 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //         className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8"
// // //       >
// // //         <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
// // //           Contact Me
// // //         </h2>
// // //         <form onSubmit={handleSubmit} className="space-y-6">
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //             <input
// // //               type="text"
// // //               name="name"
// // //               placeholder="Your Name"
// // //               value={formData.name}
// // //               onChange={handleChange}
// // //               required
// // //               className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// // //             />
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               placeholder="Your Email"
// // //               value={formData.email}
// // //               onChange={handleChange}
// // //               required
// // //               className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// // //             />
// // //           </div>
// // //           <input
// // //             type="text"
// // //             name="subject"
// // //             placeholder="Subject"
// // //             value={formData.subject}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// // //           />
// // //           <textarea
// // //             name="message"
// // //             rows="5"
// // //             placeholder="Your Message"
// // //             value={formData.message}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// // //           ></textarea>
// // //           <button
// // //             type="submit"
// // //             className="w-full py-3 px-6 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition duration-300"
// // //           >
// // //             Send Message
// // //           </button>
// // //         </form>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // }

// // // export default Contact;
