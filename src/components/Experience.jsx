import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Experiencia</h2>
        <div className="space-y-8">
          <div className="bg-[#262626] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Proyectos personales</h3>
            <p className="text-gray-400">Desarrollo de proyectos personales orientados a práctica real, simulando entregas freelance.</p>
          </div>
          <div className="bg-[#262626] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Estudios autodidactas</h3>
            <p className="text-gray-400">React, JavaScript moderno, CSS avanzado, Git, diseño UI/UX.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
