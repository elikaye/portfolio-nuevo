// Technologies.jsx
import React from "react";
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
  return (
    <section id="tecnologias" className="technologies-section">
  <h2 className="section-title">Tecnologías</h2>


      <div className="slider">
        <div className="slide-track">
          {[...technologies, ...technologies].map((tech, index) => (
            <div className="slide" key={index}>
              <img src={tech.icon} alt={tech.name} title={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Technologies;
