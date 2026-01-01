import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contactAnimation from "../assets/animations/Contact us!.json";

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

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        loading: false,
        success: "Thank you! I’ll get back to you within 24 hours.",
        error: "",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
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
      className="bg-[#0F172A] py-24 px-6 sm:px-12 flex items-center justify-center"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl w-full bg-[#111827] rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        {/* LEFT — Animation / Trust */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-500 p-10">
          <Lottie
            animationData={contactAnimation}
            loop
            className="w-full max-w-md"
            aria-hidden="true"
          />
        </div>

        {/* RIGHT — Form */}
        <div className="p-8 sm:p-12 text-white">
          <h2
            id="contact-heading"
            className="text-3xl font-extrabold mb-4"
          >
            Let’s Talk About Your Project
          </h2>

          <p className="text-slate-400 mb-8 max-w-md">
            Need help with Odoo ERP, automation, or a custom web system?
            Fill out the form and I’ll respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl bg-transparent border border-slate-700
                           focus:ring-2 focus:ring-cyan-400 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl bg-transparent border border-slate-700
                           focus:ring-2 focus:ring-cyan-400 outline-none"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Project / Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-slate-700
                         focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me briefly about your requirements..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-slate-700
                         focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
            />

            {/* Status messages */}
            {status.success && (
              <p className="text-green-400 text-sm">{status.success}</p>
            )}
            {status.error && (
              <p className="text-red-400 text-sm">{status.error}</p>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3 rounded-xl font-semibold
                         bg-indigo-600 hover:bg-amber-400 hover:text-gray-900
                         transition-all duration-300 disabled:opacity-60"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}



















// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import contactAnimation from "../assets/animations/Contact us!.json";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "https://portfolio-contact-backend-1-qq4c.onrender.com/api/contact/send/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setFormData({ name: "", email: "", subject: "", message: "" });
//       } else {
//         alert("Failed to send message.");
//         console.error(await response.json());
//       }
//     } catch (error) {
//       alert("An error occurred.");
//       console.error(error);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen  bg-[#0F172A] flex items-center justify-center px-4 py-16"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-6xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
//       >
//         {/* LEFT SIDE - Lottie Animation */}
//         <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-teal-500 to-indigo-500 p-8">
//           <div className="w-full h-full flex items-center justify-center">
//             <Lottie
//               animationData={contactAnimation}
//               loop={true}
//               className="w-full h-full max-w-lg max-h-[500px] object-contain"
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//         </div>

//         {/* RIGHT SIDE - Contact Form */}
//         <div className="p-8 md:p-12">
//           <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 dark:text-white mb-6">
//             Contact Me
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default Contact;



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import contactAnimation from "../assets/animations/Contact us!.json"; // ✅ path to your Lottie file

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "https://portfolio-contact-backend-1-qq4c.onrender.com/api/contact/send/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setFormData({ name: "", email: "", subject: "", message: "" });
//       } else {
//         alert("Failed to send message.");
//         console.error(await response.json());
//       }
//     } catch (error) {
//       alert("An error occurred.");
//       console.error(error);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-16"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-6xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
//       >
//         {/* LEFT SIDE - Lottie Animation */}
//         <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-teal-500 to-indigo-500 p-8">
//           <Lottie animationData={contactAnimation} loop={true} className="max-h-96" />
//         </div>

//         {/* RIGHT SIDE - Contact Form */}
//         <div className="p-8 md:p-12">
//           <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 dark:text-white mb-6">
//             Contact Me
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default Contact;













// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';

// // function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: ''
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("https://portfolio-contact-backend-1-qq4c.onrender.com/api/contact/send/", {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         alert("Message sent successfully!");
// //         setFormData({ name: '', email: '', subject: '', message: '' });
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
// //     <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8"
// //       >
// //         <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
// //           Contact Me
// //         </h2>
// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Your Name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               required
// //               className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //             />
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Your Email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //               className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //             />
// //           </div>
// //           <input
// //             type="text"
// //             name="subject"
// //             placeholder="Subject"
// //             value={formData.subject}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //           />
// //           <textarea
// //             name="message"
// //             rows="5"
// //             placeholder="Your Message"
// //             value={formData.message}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
// //           ></textarea>
// //           <button
// //             type="submit"
// //             className="w-full py-3 px-6 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition duration-300"
// //           >
// //             Send Message
// //           </button>
// //         </form>
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default Contact;
