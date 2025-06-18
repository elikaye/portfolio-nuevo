import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaMoon } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [statusMsg, setStatusMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dp94xa8", "template_321g5vu", form.current, "skjA_sM5XpiomjiDU")
      .then(
        (result) => {
          setStatusMsg("¡Mensaje enviado correctamente!");
          e.target.reset();
          setTimeout(() => setStatusMsg(""), 5000); // limpia mensaje después de 5 segundos
        },
        (error) => {
          setStatusMsg("Error al enviar, intenta de nuevo.");
          console.log(error.text);
          setTimeout(() => setStatusMsg(""), 5000);
        }
      );
  };

  return (
    <section id="contacto" className="contact-form-container">
      <FaMoon className="moon-icon" />
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Nombre" required />
        <input
          type="email"
          name="user_email"
          placeholder="Correo electrónico"
          required
        />
        <textarea name="message" placeholder="Mensaje" rows="5" required />
        <button type="submit">Enviar</button>
      </form>
      {statusMsg && <p className="status-message">{statusMsg}</p>}
    </section>
  );
};

export default ContactForm;
