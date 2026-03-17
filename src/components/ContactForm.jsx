import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [statusMsg, setStatusMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dp94xa8",
        "template_321g5vu",
        form.current,
        "skjA_sM5XpiomjiDU"
      )
      .then(
        () => {
          setStatusMsg("¡Mensaje enviado correctamente!");
          e.target.reset();
          setTimeout(() => setStatusMsg(""), 5000);
        },
        (error) => {
          setStatusMsg("Error al enviar, intenta de nuevo.");
          console.log(error.text);
          setTimeout(() => setStatusMsg(""), 5000);
        }
      );
  };

  return (
    <section className="bg-black py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2px_1fr] gap-12 items-start">

        {/* LADO IZQUIERDO */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-white">Contáctame</h2>
          <p className="text-neutral-400">
            Desarrolladora Full Stack Junior con enfoque en UX/UI y desarrollo de e-commerce.  
            Si tenés una idea o proyecto en mente, escribime y lo vemos juntos.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/elikaye"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-violet-400 transition text-2xl glow-hover"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-violet-400 transition text-2xl glow-hover"
            >
              <FaLinkedin />
            </a>
          </div>

              {/* BOTÓN CV ABAJO DE LOS ICONOS, VERDE ESMERALDA, ancho fijo */}
         <a
          href="/Eliana Kaye-CV.pdf"
           download
            className="mt-2 px-4 py-2 bg-violet-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition shadow-glow hover:shadow-glow-lg text-sm"
            style={{ width: "3cm", textAlign: "center" }}
         >
           Descargar CV
      </a>
        </div>  

        {/* LINEA DIVISORIA BRILLANTE */}
        <div className="hidden md:flex justify-center">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-violet-500 to-transparent opacity-90 shadow-[0_0_15px_rgba(167,139,250,0.7)] glow-line"></div>
        </div>

        {/* FORMULARIO */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-xl shadow-glow">
          <h2 className="text-2xl font-semibold text-white mb-6">Enviar mensaje</h2>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              required
              className="p-3 rounded-lg bg-black border border-neutral-700 text-white outline-none focus:border-violet-500 focus:shadow-glow transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Correo electrónico"
              required
              className="p-3 rounded-lg bg-black border border-neutral-700 text-white outline-none focus:border-violet-500 focus:shadow-glow transition"
            />

            <textarea
              name="message"
              placeholder="Mensaje"
              rows="5"
              required
              className="p-3 rounded-lg bg-black border border-neutral-700 text-white outline-none focus:border-violet-500 focus:shadow-glow transition"
            />

            {/* BOTÓN ENVIAR VIOLETA NORMAL */}
            <button
              type="submit"
              className="mt-2 px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold transition shadow-glow hover:shadow-glow-lg"
            >
              Enviar
            </button>

            {statusMsg && (
              <p className="text-green-400 mt-2">{statusMsg}</p>
            )}
          </form>
        </div>
      </div>

      <style >{`
        .glow-hover:hover {
          text-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7;
        }
        .shadow-glow {
          box-shadow: 0 0 15px rgba(167, 139, 250, 0.5);
        }
        .shadow-glow-lg:hover {
          box-shadow: 0 0 25px rgba(167, 139, 250, 0.8);
        }
        .glow-line {
          filter: drop-shadow(0 0 10px #a855f7);
        }
      `}</style>
    </section>
  );
}; 

export default ContactForm;