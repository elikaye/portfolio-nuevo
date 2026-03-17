import React from "react";
import foto from "../assets/eliana.jpg";

const About = () => {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 px-6 bg-black scroll-mt-32 md:scroll-mt-28">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16">
          Sobre mí
        </h2>

        {/* bloque principal */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* foto */}
          <div className="flex justify-center">
            <img
              src={foto}
              alt="Eliana Kaye"
              className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full
                border border-violet-500/60
                shadow-[0_0_15px_rgba(139,92,246,0.5)]
                hover:shadow-[0_0_35px_rgba(139,92,246,0.9)]
                transition-all duration-300"
            />
          </div>

          {/* texto */}
          <div className="bg-black/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10
            shadow-[0_0_10px_rgba(255,255,255,0.2)]
            hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
            transition-all duration-300">

            <p className="text-white/80 mb-4 leading-relaxed text-sm md:text-base">
              Soy Eliana Kaye, desarrolladora web con enfoque en frontend y
              diseño de interfaces. Me apasiona crear experiencias digitales
              visualmente atractivas, intuitivas y funcionales.
            </p>

            <p className="text-white/70 mb-4 leading-relaxed text-sm md:text-base">
              Cuento con formación full stack, lo que me permite comprender el
              desarrollo de aplicaciones de forma integral, trabajando también
              con backend y bases de datos.
            </p>

            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              Además, poseo certificaciones en UX y UI por Google y formación en
              backend con Node.js, ampliando mis habilidades tanto en
              experiencia de usuario como en desarrollo del lado del servidor.
            </p>

          </div>
        </div>

        {/* MOBILE: scroll horizontal */}
        <div className="flex md:hidden gap-4 mt-12 overflow-x-auto pb-4 snap-x snap-mandatory">

          <div className="min-w-[220px] snap-center bg-black/60 p-5 rounded-xl text-center
            border border-violet-500/60
            shadow-[0_0_10px_rgba(139,92,246,0.4)]
            transition-all duration-300">

            <h3 className="text-white font-semibold mb-2">
              Frontend
            </h3>

            <p className="text-white/60 text-xs">
              Interfaces modernas con React,
              JavaScript y diseño responsive.
            </p>

          </div>

          <div className="min-w-[220px] snap-center bg-black/60 p-5 rounded-xl text-center
            border border-emerald-400/70
            shadow-[0_0_10px_rgba(16,185,129,0.4)]
            transition-all duration-300">

            <h3 className="text-white font-semibold mb-2">
              UX / UI
            </h3>

            <p className="text-white/60 text-xs">
              Diseño centrado en el usuario,
              claridad y usabilidad.
            </p>

          </div>

          <div className="min-w-[220px] snap-center bg-black/60 p-5 rounded-xl text-center
            border border-violet-500/60
            shadow-[0_0_10px_rgba(139,92,246,0.4)]
            transition-all duration-300">

            <h3 className="text-white font-semibold mb-2">
              Backend
            </h3>

            <p className="text-white/60 text-xs">
              Node.js, APIs y bases de datos
              para aplicaciones completas.
            </p>

          </div>

        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-black/60 p-6 rounded-xl text-center
            border border-violet-500/60
            shadow-[0_0_10px_rgba(139,92,246,0.4)]
            hover:shadow-[0_0_30px_rgba(139,92,246,0.9)]
            hover:-translate-y-1
            transition-all duration-300">

            <h3 className="text-white font-semibold mb-2">Frontend</h3>

            <p className="text-white/60 text-sm">
              Desarrollo de interfaces modernas con React,
              JavaScript y diseño responsive.
            </p>

          </div>

          <div className="bg-black/60 p-6 rounded-xl text-center
            border border-emerald-400/70
            shadow-[0_0_10px_rgba(16,185,129,0.4)]
            hover:shadow-[0_0_30px_rgba(16,185,129,0.9)]
            hover:-translate-y-1
            transition-all duration-300">

            <h3 className="text-white font-semibold mb-2">UX / UI</h3>

            <p className="text-white/60 text-sm">
              Diseño centrado en el usuario, priorizando
              claridad, usabilidad y estética visual.
            </p>

          </div>

          <div className="bg-black/60 p-6 rounded-xl text-center
            border border-violet-500/60
            shadow-[0_0_10px_rgba(139,92,246,0.4)]
            hover:shadow-[0_0_30px_rgba(139,92,246,0.9)]
            hover:-translate-y-1
            transition-all duration-300">

            <h3 className="text-white font-semibold mb-2">Backend</h3>

            <p className="text-white/60 text-sm">
              Experiencia con Node.js, APIs y bases de datos
              para comprender el flujo completo de desarrollo.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;