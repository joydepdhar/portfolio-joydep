import React from 'react';

function SvgAnimatedLogo() {
  return (
    <svg
      width="100%"
      height="80"
      viewBox="0 0 300 60"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Joydep Dhar Logo"
    >
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      <style>{`
        .char {
          font: 700 28px 'Segoe UI', sans-serif;
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
          cursor: default;
          transition: transform 0.3s ease, filter 0.3s ease;
          transform-origin: center bottom;
        }
        .char:hover {
          transform: scale(1.25);
          filter: drop-shadow(0 0 8px currentColor);
        }

        .char:nth-of-type(1) { fill: url(#blueGrad); animation-delay: 0s; }
        .char:nth-of-type(2) { fill: url(#greenGrad); animation-delay: 0.05s; }
        .char:nth-of-type(3) { fill: url(#yellowGrad); animation-delay: 0.1s; }
        .char:nth-of-type(4) { fill: url(#blueGrad); animation-delay: 0.15s; }
        .char:nth-of-type(5) { fill: url(#greenGrad); animation-delay: 0.2s; }
        .char:nth-of-type(6) { fill: url(#yellowGrad); animation-delay: 0.25s; }
        .char:nth-of-type(7) { fill: url(#blueGrad); animation-delay: 0.3s; }
        .char:nth-of-type(8) { fill: url(#greenGrad); animation-delay: 0.35s; }
        .char:nth-of-type(9) { fill: url(#yellowGrad); animation-delay: 0.4s; }
        .char:nth-of-type(10) { fill: url(#blueGrad); animation-delay: 0.45s; }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Text characters spaced evenly */}
      <text x="0" y="40" class="char">J</text>
      <text x="25" y="40" class="char">o</text>
      <text x="50" y="40" class="char">y</text>
      <text x="75" y="40" class="char">d</text>
      <text x="100" y="40" class="char">e</text>
      <text x="125" y="40" class="char">p</text>
      <text x="165" y="40" class="char">D</text>
      <text x="190" y="40" class="char">h</text>
      <text x="215" y="40" class="char">a</text>
      <text x="240" y="40" class="char">r</text>
    </svg>
  );
}

export default SvgAnimatedLogo;
