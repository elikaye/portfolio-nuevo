

import React from "react";
import tienda from "../assets/tiendaBarby1.png";
import tiendaInfantil from "../assets/tiendaInfantil.png";
import valonia from "../assets/Valonia.png";
import mateMatico from "../assets/mateMatico.png";

const projects = [
  {
    title: "E-commerce | Cliente real",
    image: tienda,
    description:
      "Tienda online full stack con autenticación, carrito, favoritos y panel de administración.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    github: "https://github.com/elikaye/tiendaModa",
    demo: "https://tiendabarby.vercel.app/",
  },
  {
    title: "E-commerce adaptable",
    image: tiendaInfantil,
    description:
      "Sistema de tienda online preparado para personalizar y adaptar a diferentes negocios.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    github: "https://github.com/elikaye/tiendabarbi-demo",
    demo: "https://tiendainfantil.vercel.app/",
  },
  {
    title: "Valonia | Landing Page",
    image: valonia,
    description:
      "Landing page responsive con una interfaz moderna y una experiencia de usuario clara.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/elikaye/valonia-landing",
    demo: "https://valonia-landing.vercel.app/",
  },
  {
    title: "Mate-Mático | Proyecto colaborativo",
    image: mateMatico,
    description:
      "Aplicación educativa desarrollada en equipo, con integración frontend y metodología Scrum.",
    tech: ["React", "CSS", "Git", "GitHub", "Scrum"],
    github: "https://github.com/Innova-Lab-Mate-Matico/mate-matico",
    demo: "https://mate-matico.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="px-5 py-16 md:px-8 md:py-24 bg-black scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-violet-400 text-xs tracking-[0.3em] uppercase mb-3">
            Mi trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Proyectos
          </h2>
          <div className="w-14 h-1 bg-violet-500 rounded-full mx-auto mt-4" />
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-5 snap-x snap-mandatory">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group min-w-[260px] max-w-[280px] snap-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 hover:border-violet-500/60 transition-all duration-300"
            >
              <div className="h-36 overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-white text-base font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="text-[10px] text-violet-200/90 bg-violet-500/10 border border-violet-400/20 px-2 py-1 rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-violet-300 hover:text-white transition-colors"
                  >
                    Ver proyecto ↗
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* DESKTOP: DOS COLUMNAS */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 hover:border-violet-500/60 hover:shadow-[0_0_28px_rgba(139,92,246,0.12)] transition-all duration-300"
            >
              <div className="h-48 lg:h-52 overflow-hidden bg-zinc-900/80">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 lg:p-6">
                <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs text-violet-200/90 bg-violet-500/10 border border-violet-400/20 px-2.5 py-1 rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-white transition-colors"
                  >
                    Ver proyecto <span>↗</span>
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                    >
                      GitHub <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
