// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo personalizado */}
      
        <p className="text-center text-white text-lg mt-4">
  Diseñado por{" "}
 <span className="logo-codemoon animate-shimmer">
  &lt;/CodeMoon🌙&gt;
</span>
</p>
        {/* Derechos reservados y copywriter */}
        <p className="copyright">
          © {new Date().getFullYear()} Eliana Kaye — Todos los derechos reservados.<br />
        </p>

        {/* Íconos sociales */}
        <div className="social-icons">
          <a
            href="elianakaye13@gmail,com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="icon-circle"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/elikaye"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-circle"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/eliana-kaye-70b5a524a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-circle"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
