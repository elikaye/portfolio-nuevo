import React from "react";
import fondo from "../assets/michi14.png"; // Asegúrate de que la ruta sea correcta

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="contenido">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Eliana Kaye
        </h1>
        <p className="text-lg md:text-2xl text-emerald-500">
          Desarrolladora Web Frontend | Formación Fullstack + Diseño UI
        </p>


      <div className="flex justify-center gap-6 mt-6 flex-wrap">

          <a
            href="https://github.com/elikaye"
            target="_blank"
            rel="noopener noreferrer"
            className="contenido-btn"
          >
            GitHub
          </a>
       
          <a
            href="https://linkedin.com/in/eliana-kaye-70b5a524a"
            target="_blank"
            rel="noopener noreferrer"
            className="contenido-btn"
          >
            LinkedIn
          </a>
        </div>
     </div>
    </section>
  );
};

export default Hero;
