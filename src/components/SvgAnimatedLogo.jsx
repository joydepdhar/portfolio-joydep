import React from "react";
import { Link } from "react-router-dom";

function SvgAnimatedLogo() {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      {/* Animated SVG Icon */}
      <svg
        className="w-8 h-8 text-sky-500 group-hover:text-yellow-400 transition-all duration-500"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          strokeDasharray="280"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="280;0;280"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fill="currentColor"
          fontSize="22"
          fontFamily="Arial"
          dy=".3em"
        >
          JD
        </text>
      </svg>

      {/* Logo Text */}
      <div className="text-2xl font-extrabold tracking-wide text-sky-500 group-hover:text-yellow-400 transition duration-300">
        <span className="text-slate-900 dark:text-white">JOYDEP</span>
        <span className="ml-1 bg-gradient-to-r from-sky-400 to-yellow-400 bg-clip-text text-transparent">
          DHAR
        </span>
      </div>
    </Link>
  );
}

export default SvgAnimatedLogo;
