import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#0F172A] text-gray-200 py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          About Me
        </h2>

        {/* Short Identity Line */}
        <p className="text-gray-400 text-lg md:text-xl font-medium mb-10">
          Full Stack Developer · Business Impact Engineer · ERP & Automation
          Specialist
        </p>

        {/* Main About Paragraph */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            I'm <span className="text-white font-semibold">Joydep Dhar</span> —
            a Full Stack Developer and Business Impact Engineer who builds
            high-performing digital solutions for modern companies.
          </p>

          <p>
            My work blends clean engineering, product thinking, and
            automation-driven development to help businesses achieve real,
            measurable results. I specialize in end-to-end development using{" "}
            <span className="text-white font-semibold">
              Python (Django), React, C# (.NET)
            </span>{" "}
            and bring extensive experience in{" "}
            <span className="text-white font-semibold">Odoo ERP automation</span>
            , workflow optimization, and dashboard-driven insights.
          </p>

          <p>
            Whether it's a SaaS platform, an internal automation system, a
            high-performance API, or a custom ERP module — I build solutions
            that are secure, scalable, and aligned with real business logic…
            not just code.
          </p>

          {/* Brand Story */}
          <p>
            I started as a problem-solver before becoming a developer. Over the
            years, I've learned to combine technical depth with business
            understanding — allowing me to create products that don’t just
            function, but drive organizational growth.
          </p>

          <p>
            From architecture → backend → frontend → deployment → optimization —
            I manage the complete product lifecycle to help companies make data-
            driven, automated and future-ready decisions.
          </p>

          {/* Mission Statement */}
          <p className="text-white font-semibold text-xl pt-4">
            My mission is simple:
          </p>
          <p className="italic text-gray-300 text-center">
            "To turn ideas into functional, elegant and high-impact digital
            products<br></br> — built with precision, reliability, and long-term
            scalability."
          </p>

          {/* Signature Line */}
          <p className="text-gray-400 mt-6">
            I don't just write code. I build systems that drive growth.
          </p>
        </div>
      </div>
    </section>
  );
}
