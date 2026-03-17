import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-14 md:py-24 px-6 bg-black scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-16">
          Experiencia
        </h2>

        {/* MOBILE — scroll horizontal */}
        <div className="flex md:hidden gap-4 mt-8 overflow-x-auto pb-4 snap-x snap-mandatory">

          <div
            className="min-w-[220px] snap-center bg-black/60 backdrop-blur-sm p-5 rounded-xl 
            border border-violet-500/60
            shadow-[0_0_10px_rgba(139,92,246,0.4)]
            transition-all duration-300 text-left"
          >
            <h3 className="text-white font-semibold mb-2">
              Tienda Frontend
            </h3>

            <p className="text-white/70 text-xs leading-relaxed">
              Proyecto de práctica con <strong>HTML, CSS y JavaScript</strong>
              creando una tienda simulada para practicar desarrollo frontend.
            </p>
          </div>

          <div
            className="min-w-[220px] snap-center bg-black/60 backdrop-blur-sm p-5 rounded-xl 
            border border-emerald-400/60
            shadow-[0_0_10px_rgba(16,185,129,0.4)]
            transition-all duration-300 text-left"
          >
            <h3 className="text-white font-semibold mb-2">
              Tienda Barbie
            </h3>

            <p className="text-white/70 text-xs leading-relaxed">
              E-commerce en <strong>producción</strong> usado por la clienta,
              con React, Node.js y base de datos. La compra se cierra vía
              WhatsApp.
            </p>
          </div>

          <div
            className="min-w-[220px] snap-center bg-black/60 backdrop-blur-sm p-5 rounded-xl 
            border border-violet-500/60
            shadow-[0_0_10px_rgba(139,92,246,0.4)]
            transition-all duration-300 text-left"
          >
            <h3 className="text-white font-semibold mb-2">
              Certificaciones UX/UI
            </h3>

            <p className="text-white/70 text-xs leading-relaxed">
              Certificación en <strong>UX/UI</strong> por Google y
              <strong> Node.js</strong> por Gobierno de la Ciudad.
            </p>
          </div>

          <div
            className="min-w-[220px] snap-center bg-black/60 backdrop-blur-sm p-5 rounded-xl 
            border border-emerald-400/60
            shadow-[0_0_10px_rgba(16,185,129,0.4)]
            transition-all duration-300 text-left"
          >
            <h3 className="text-white font-semibold mb-2">
              Formación académica
            </h3>

            <p className="text-white/70 text-xs leading-relaxed">
              Tecnicatura Superior en Programación (Teclab), con foco en
              desarrollo web y software full stack.
            </p>
          </div>
        </div>

        {/* DESKTOP — grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mt-12">

          <div
            className="bg-black/60 backdrop-blur-sm p-6 rounded-xl 
            border border-violet-500/60
            shadow-[0_0_10px_rgba(139,92,246,0.4)]
            hover:shadow-[0_0_30px_rgba(139,92,246,0.9)]
            hover:-translate-y-1
            transition-all duration-300 text-left"
          >
            <h3 className="text-white font-semibold mb-2 text-xl">
              Tienda Frontend
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              Proyecto de práctica con <strong>HTML, CSS y JavaScript</strong>
              creando una tienda simulada para practicar desarrollo frontend.
            </p>
          </div>

          <div
            className="bg-black/60 backdrop-blur-sm p-6 rounded-xl 
            border border-emerald-400/60
            shadow-[0_0_10px_rgba(16,185,129,0.4)]
            hover:shadow-[0_0_30px_rgba(16,185,129,0.9)]
            hover:-translate-y-1
            transition-all duration-300 text-left"
          >
            <h3 className="text-white font-semibold mb-2 text-xl">
              Tienda Barbie
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              E-commerce en <strong>producción</strong> usado por la clienta,
              con React, Node.js y base de datos. La compra se cierra vía
              WhatsApp.
            </p>
          </div>

          <div
            className="bg-black/60 backdrop-blur-sm p-6 rounded-xl 
            border border-violet-500/60
            shadow-[0_0_10px_rgba(139,92,246,0.4)]
            hover:shadow-[0_0_30px_rgba(139,92,246,0.9)]
            hover:-translate-y-1
            transition-all duration-300 text-left"
          >
            <h3 className="text-white font-semibold mb-2 text-xl">
              Certificaciones UX/UI
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              Certificación en <strong>UX/UI</strong> por Google y
              <strong> Node.js</strong> por Gobierno de la Ciudad.
            </p>
          </div>

          <div
            className="bg-black/60 backdrop-blur-sm p-6 rounded-xl 
            border border-emerald-400/60
            shadow-[0_0_10px_rgba(16,185,129,0.4)]
            hover:shadow-[0_0_30px_rgba(16,185,129,0.9)]
            hover:-translate-y-1
            transition-all duration-300 text-left"
          >
            <h3 className="text-white font-semibold mb-2 text-xl">
              Formación académica
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              Tecnicatura Superior en Programación (Teclab), con foco en
              desarrollo web y software full stack.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;