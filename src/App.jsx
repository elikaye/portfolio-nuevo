import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "sobre-mi",
        "experiencia",
        "proyectos",
        "tecnologias",
        "contacto",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll suave a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector("nav");

    const navbarHeight = navbar ? navbar.offsetHeight : 80;

    if (element) {
      const offsetTop = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-poppins bg-black min-h-screen">

      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>

        <section id="inicio" className="scroll-mt-28">
          <Hero scrollToSection={scrollToSection} />
        </section>

        <section id="sobre-mi" className="scroll-mt-28">
          <Reveal>
            <About />
          </Reveal>
        </section>

        <section id="experiencia" className="scroll-mt-28">
          <Reveal>
            <Experience />
          </Reveal>
        </section>

        <section id="proyectos" className="scroll-mt-28">
          <Reveal>
            <Projects />
          </Reveal>
        </section>

        <section id="tecnologias" className="scroll-mt-28">
          <Reveal>
            <Technologies />
          </Reveal>
        </section>

        <section id="contacto" className="scroll-mt-28">
          <Reveal>
            <Contact />
          </Reveal>
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;