import React from "react";
import Ecommerce from "../assets/tiendaOli1.png";
import tienda from "../assets/tiendaBarby1.png";
import tiendaInfantil from "../assets/tiendaInfantil.png";

const projects = [
  {
    title: "E-commerce en producción — Cliente real",
    image: tienda,
    description:
      "Plataforma e-commerce full stack en producción desarrollada con React, Node.js, Express y MySQL. Incluye autenticación de usuarios, carrito de compras, sistema de favoritos y panel de administración con CRUD completo.",
    tech: ["React", "Vite", "Tailwind", "Node.js", "Express", "MySQL", "Cloudinary"],
    github: "https://github.com/elikaye/tiendaModa",
    demo: "https://tiendabarby.vercel.app/",
  },
  {
    title: "E-commerce listo para implementación",
    image: tiendaInfantil,
    description:
      "Sistema e-commerce full stack completamente funcional y listo para implementar en distintos negocios. Permite personalizar branding, imágenes y datos sin modificar la lógica.",
    tech: ["React", "Node.js", "Express", "MySQL", "Cloudinary"],
    github: "",
    demo: "https://tiendainfantil.vercel.app/",
  },
  {
    title: "Interfaz e-commerce (Frontend UI)",
    image: Ecommerce,
    description:
      "Interfaz de e-commerce desarrollada con HTML, CSS y JavaScript, enfocada en UI/UX y diseño responsive.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/elikaye/tienda-nube",
    demo: "https://tienda-oli.netlify.app",
  },
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="py-14 md:py-24 px-6 bg-black scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-16">
          Proyectos
        </h2>

        {/* MOBILE */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              min-w-[280px]
              snap-center
              bg-black/60 backdrop-blur-sm
              rounded-xl overflow-hidden
              border border-violet-500/40
              shadow-[0_0_10px_rgba(139,92,246,0.4)]
              hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]
              hover:-translate-y-2
              transition-all duration-300
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-contain bg-black"
              />

              <div className="p-4">

                <h3 className="text-white text-base font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-white/70 text-xs mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-white/80 border border-white/20 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-[11px] rounded-md bg-violet-500 text-white hover:bg-violet-400 transition"
                  >
                    Ver sitio
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-[11px] rounded-md border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition"
                    >
                      GitHub
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mt-12">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              bg-black/60 backdrop-blur-sm
              rounded-xl overflow-hidden
              border border-violet-500/40
              shadow-[0_0_10px_rgba(139,92,246,0.4)]
              hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]
              hover:-translate-y-2
              transition-all duration-300
              "
            >

              <div className="relative group overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain bg-black transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-lg bg-violet-500 text-white hover:bg-violet-400 transition"
                  >
                    Ver sitio
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-lg border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition"
                    >
                      GitHub
                    </a>
                  )}

                </div>

              </div>

              <div className="p-4">

                <h3 className="text-white text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-white/70 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs text-white/80 border border-white/20 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;