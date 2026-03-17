import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black pt-8 pb-8 overflow-hidden">

      {/* BLUR DE FONDO */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-md rounded-t-lg"></div>

      {/* LINEA DIVISORIA SUPERIOR */}
      <div className="relative w-full h-[3px] mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-800 via-violet-500 to-emerald-800 opacity-80 rounded-sm shadow-[0_0_20px_rgba(167,139,250,0.4)]"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">

        {/* Logo */}
        <p className="text-white text-base md:text-lg text-center">
          Diseñado por{" "}
          <span className="logo-codemoon animate-shimmer">
            &lt;/CodeMoon🌙&gt;
          </span>
        </p>

        {/* Derechos */}
        <p className="text-white text-xs md:text-sm text-center glow-text">
          © {new Date().getFullYear()} Eliana Kaye — Todos los derechos reservados.
        </p>

        {/* Redes */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/elikaye"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white text-xl md:text-2xl transition glow-hover"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/eliana-kaye-70b5a524a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white text-xl md:text-2xl transition glow-hover"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      <style>{`
        .glow-hover:hover {
          text-shadow: 0 0 8px #a855f7, 0 0 15px #10b981;
        }

        .glow-text {
          text-shadow: 0 0 3px #a855f7, 0 0 7px #10b981;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            #fff 0%,
            #a855f7 50%,
            #fff 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 2s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

    </footer>
  );
};

export default Footer;