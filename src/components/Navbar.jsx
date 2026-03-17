import React, { useState, useEffect } from "react";

const NavbarSimple = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Tecnologías", href: "#tecnologias" },
    { name: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickLink = (href) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      const navbarHeight = 72;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-white font-bold text-xl tracking-wider hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition">
          Eliana <span className="text-white">Kaye</span>
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-10 text-white/80">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");

            return (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClickLink(link.href);
                  }}
                  className={`flex items-center gap-2 transition ${
                    isActive
                      ? "text-white font-semibold"
                      : "hover:text-white/90 hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.7)]"
                  }`}
                >
                  {link.name}
                </a>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-violet-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* STATUS */}
        <div className="hidden md:flex items-center gap-5">
          <span className="flex items-center gap-2 px-3 py-1 border border-white/30 text-white rounded-full text-xs backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.9)]"></span>
            </span>
            Disponible para trabajar
          </span>
        </div>

        {/* BOTON MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl transition"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-6 pt-2 flex flex-col gap-4 z-20">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClickLink(link.href);
              }}
              className="text-white/80 hover:text-white transition text-lg py-3 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarSimple;