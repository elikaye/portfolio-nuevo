import React, { useState } from "react";

const NavbarSimple = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "🌙 Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Tecnologías", href: "#tecnologias" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleClickLink = (href) => {
    scrollToSection(href.slice(1));
    setMenuOpen(false); // cerrar menú al click en link
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(75, 0, 130, 0.4)",
        backdropFilter: "blur(10px)",
        padding: "1rem 2rem",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(75, 0, 130, 0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Logo o título vacío (por ahora) */}
        <div style={{ color: "white", fontWeight: "bold", fontSize: "1.4rem" }}></div>
        
            <button
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Menú"
  className="hamburger-button"
>
  ☰
</button>

{menuOpen && (
  <button
    onClick={() => setMenuOpen(false)}
    className="close-button"
    aria-label="Cerrar menú"
  >
    ✕
  </button>
)}

        {/* Menú de enlaces */}
        <ul
          id="nav-links"
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2.5rem",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClickLink(link.href);
                }}
                style={{
                  color: "white",
                  fontWeight:
                    activeSection === link.href.slice(1) ? "bold" : "normal",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  textShadow: "0 0 6px white",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "violet")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* CSS para responsividad */}
      <style>{`
        @media (max-width: 768px) {
          #hamburger-button {
            display: block !important;
          }

          #nav-links {
            flex-direction: column;
            display: ${menuOpen ? "flex" : "none"};
            margin-top: 1rem;
            gap: 1.5rem;
            background-color: rgba(75, 0, 130, 0.9);
            padding: 1rem 2rem;
            border-radius: 8px;
            position: absolute;
            top: 60px;
            right: 2rem;
            box-shadow: 0 0 10px rgba(75, 0, 130, 0.7);
          }
        }
      `}</style>
    </nav>
  );
};

export default NavbarSimple;
