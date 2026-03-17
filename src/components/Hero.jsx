import React from "react";
import fondo from "../assets/BannerEli.png";

const Hero = () => {
  return (
    <section
      className="
        relative flex items-start md:items-center justify-center text-center
        h-[60vh] md:h-screen
        bg-cover bg-center bg-no-repeat
        pt-28 md:pt-0
      "
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* Overlay leve */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 w-full px-6 flex justify-center">

        {/* Cartel */}
        <div className="bg-black/20 backdrop-blur-sm px-6 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 rounded-xl max-w-xl
                        shadow-[0_0_20px_rgba(255,255,255,0.25)]">

          {/* Nombre */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4
                         hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition">
            Eliana Kaye
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-2xl text-white/80
                        hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.7)] transition">
            Desarrolladora Frontend | Formación Full Stack + Diseño UI
          </p>

          {/* Descripción */}
          <p className="text-white/60 mt-2 text-sm sm:text-base">
            Creando experiencias web modernas
          </p>

          {/* Redes */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-2xl sm:text-3xl text-white">
            <a
              href="https://github.com/elikaye"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-emerald-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://linkedin.com/in/eliana-kaye-70b5a524a"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-emerald-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

        </div>
      </div>

      {/* Flecha scroll original */}
      <div className="absolute bottom-8 md:bottom-10 text-white text-2xl sm:text-3xl animate-bounce
                      drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] cursor-pointer">
        <i className="fa-solid fa-angle-down"></i>
      </div>
    </section>
  );
};

export default Hero;