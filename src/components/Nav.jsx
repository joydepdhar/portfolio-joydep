import React, { useState, useEffect } from "react";
import SvgAnimatedLogo from "./SvgAnimatedLogo";
import {
  Home,
  Code2,
  FolderKanban,
  User2,
  Mail,
  Menu,
  X,
  Handshake,
} from "lucide-react";

const navLinks = [
  { label: "Home",     id: "hero",     icon: Home },
  { label: "Services", id: "services", icon: Handshake },
  { label: "Projects", id: "projects", icon: FolderKanban },
  { label: "About",    id: "about",    icon: User2 },
  { label: "Contact",  id: "contact",  icon: Mail },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
  const [activeId,   setActiveId]     = useState("hero");

  /* ── Shrink nav on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Highlight active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 15, 30, 0.92)"
          : "rgba(10, 15, 30, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "0.5px solid rgba(255,255,255,0.06)"
          : "0.5px solid transparent",
        fontFamily: "'Syne', 'Inter', sans-serif",
      }}
    >
      {/* ── Top gradient border ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(6,182,212,0.3), rgba(99,102,241,0.3), transparent)",
          opacity: scrolled ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div
          className="flex items-center justify-between transition-all duration-300"
          style={{ height: scrolled ? "56px" : "68px" }}
        >

          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}
            className="flex-shrink-0 flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <SvgAnimatedLogo />
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(({ label, id, icon: Icon }) => {
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(id); }}
                  className="relative flex items-center gap-1.5 px-4 py-2 rounded-lg
                             text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "#22d3ee" : "rgb(156,163,175)",
                    background: isActive ? "rgba(6,182,212,0.08)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgb(156,163,175)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                  {/* Active underline dot */}
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2
                                 w-1 h-1 rounded-full bg-cyan-400"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            {/* Available dot */}
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                         bg-gradient-to-r from-cyan-500 to-indigo-500
                         text-white text-sm font-semibold
                         hover:opacity-90 transition-all duration-300 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="flex md:hidden w-9 h-9 rounded-xl border border-white/10
                       items-center justify-center text-gray-400
                       hover:border-cyan-500/40 hover:text-cyan-400
                       transition-all duration-200"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "420px" : "0px",
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div
          className="px-6 pt-4 pb-6 space-y-1 border-t border-white/5"
          style={{ background: "rgba(10,15,30,0.97)" }}
        >
          {navLinks.map(({ label, id, icon: Icon }) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(id); }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl
                           text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "#22d3ee" : "rgb(156,163,175)",
                  background: isActive ? "rgba(6,182,212,0.08)" : "transparent",
                }}
              >
                <Icon size={15} aria-hidden="true" />
                {label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </a>
            );
          })}

          {/* Mobile Hire Me */}
          <div className="pt-4 border-t border-white/5">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full
                         bg-gradient-to-r from-cyan-500 to-indigo-500
                         text-white text-sm font-semibold
                         hover:opacity-90 transition-all duration-300"
            >
              Hire Me
            </a>
            <p className="text-center text-xs text-gray-600 mt-3 flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}