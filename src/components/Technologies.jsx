import React, { useEffect, useRef, useState } from "react";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import js from "../assets/tech/js.png";
import react from "../assets/tech/react.png";
import node from "../assets/tech/node.png";
import mysql from "../assets/tech/mysql.png";
import tailwind from "../assets/tech/tailwind.png";
import bootstrap from "../assets/tech/bootstrap.png";
import figma from "../assets/tech/figma.png";
import vite from "../assets/tech/vite.png";
import git from "../assets/tech/git.png";
import github from "../assets/tech/github.png";

const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "MySQL", icon: mysql },
  { name: "Tailwind", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Git", icon: git },
  { name: "Github", icon: github },
  { name: "Figma", icon: figma },
  { name: "Vite", icon: vite },
];

const Technologies = () => {

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {

    const interval = setInterval(() => {

      const container = containerRef.current;
      if (!container) return;

      const slides = container.querySelectorAll(".tech-slide");

      const center = window.innerWidth / 2;

      let closest = null;
      let closestDistance = Infinity;

      slides.forEach((slide, index) => {

        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;

        const distance = Math.abs(center - slideCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }

      });

      setActiveIndex(closest);

    }, 120);

    return () => clearInterval(interval);

  }, []);

  return (
    <section
      id="tecnologias"
      className="py-16 md:py-24 bg-black overflow-hidden scroll-mt-24"
    >

      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-16">
        Tecnologías
      </h2>

      <div className="w-full overflow-hidden">

        <div
          ref={containerRef}
          className="flex animate-[scroll_25s_linear_infinite] w-max py-6 md:py-10"
        >

          {[...technologies, ...technologies].map((tech, index) => {

            const active = index === activeIndex;

            return (
              <div
                key={index}
                className={`
                tech-slide
                flex flex-col items-center
                mx-6 md:mx-10
                transition-all duration-500
                ${active ? "scale-125 -translate-y-4 md:-translate-y-6" : ""}
                `}
              >

                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`
                  w-10 md:w-14
                  transition-all duration-500
                  ${active ? "grayscale-0 opacity-100" : "grayscale opacity-60"}
                  `}
                />

                <p className="text-white/70 text-[11px] md:text-xs mt-2">
                  {tech.name}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Technologies;