import React from "react";
import Ecommerce from "../assets/ecommerce1.png";
import tienda from "../assets/ecommerce2.png";

const projects = [
  {
    title: "Ecommerce",
    image: Ecommerce,
    description: "Login creado con JavaScript, HTML y CSS, que permite a los usuarios registrarse, iniciar sesión y gestionar su perfil.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/elikaye/tienda-nube",
    demo: "https://fanciful-fairy-ffae9b.netlify.app/",
  },
  {
    title: "Tienda Barby",
    image: tienda,
    description: "Aplicación de gestión de tareas que permite a los usuarios agregar, marcar y eliminar tareas.",
    tech: ["Tailwind CSS", "Vite", "Node.js", "Express", "MySQL"],
    github: "https://github.com/elikaye/tiendaModa",
    demo: "https://fanciful-fairy-ffae9b.netlify.app/",
  },
];

const Projects = () => {
  return (
   <section id="proyectos" className="projects-section scroll-mt-60">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
         <div className="project-links">
  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-icon">
    <i className="fab fa-github"></i>
  </a>
  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-icon">
    <i className="fas fa-globe"></i>
  </a>
</div>
</div> 
        ))}
      </div>
  
    </section>
  );
};

export default Projects;