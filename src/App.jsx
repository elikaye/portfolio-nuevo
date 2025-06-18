// src/App.jsx
import React, { useState, useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'tecnologias', 'contacto'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  const navbar = document.querySelector("nav");
  const navbarHeight = navbar ? navbar.offsetHeight : 50;

  if (element) {
    const offsetTop = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  }
};


  return (
    <div className="font-poppins bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
    <main>
  <section id="inicio">
    <Hero scrollToSection={scrollToSection} />
  </section>

  <section id="sobre-mi">
    <About />
  </section>

  <section id="experiencia">
    <Experience />
  </section>

  <section id="proyectos">
    <Projects />
  </section>

  <section id="tecnologias">
    <Technologies />
  </section>

  <section id="contacto">
    <Contact />
  </section>
</main>

      
      <Footer />
    </div>
  );
}

export default App;