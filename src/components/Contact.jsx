import React from "react";
import "./Contact.modules.css";
import emailjs from 'emailjs-com';
import swal from "sweetalert";

function Contact() {
  const user_id = "user_cqtq1nlnZa2IUOohxdVZU";
  function sendEmail(event) {
      event.preventDefault();

      emailjs
      .sendForm(
         "service_lzp4v1c",
         "dr_cifu_id",
         event.target,
         user_id
     )
     .then(
         result => {
         console.log(result.text);
         document.getElementById("dr_cifu_id").reset();
         swal("Todo listo!", "Mensaje enviado correctamente!", "success");
         },
         error => {
             console.log(error.text)
             swal("Oh no!", "Error al enviar el mensaje.", "error");
         }
     )
 }

  return (
    <div id="contact">
      <h3 className="contactTitle">¿Conversemos?</h3>
      <div id="contactInte">
        <div className="contactForm">
          <h4 className="subtitle">Envíame un mensaje</h4>
          <form id="dr_cifu_id" onSubmit={sendEmail}>
            <div id="formContainer">
              <label>Nombre</label>
              <input
                id="firstName"
                className="input"
                name="firstName"
                label="Nombre"
                required
              />
              <label>Apellido</label>
              <input
                id="lastName"
                className="input"
                name="lastName"
                label="Apellido"
                required
              />
              <label>Email</label>
              <input
                className="input"
                id="email"
                name="email"
                label="Email"
                type="email"
                required
              />
              <label>Mensaje</label>
               <textarea
                className="input"
                id="message"
                name="message"
                label="Mensaje"
                required
              />
            <button
            className="sendButton"
              type="submit"
            >
              Enviar
            </button>
            </div>
          </form>
        </div>
        <div id="divider">
          <div className="separatoryLine"></div>
          <div id="o">ó</div>
          <div className="separatoryLine"></div>
        </div>{" "}
        <div id="information">
          <img
            src="alePhoto.jpg"
            className="imgPsico"
            alt="Alejandro Cifuentes"
          />
          <h4 className="subtitle">Contáctame por aquí</h4>
          <div className="info">
            <a
              href="https://www.instagram.com/drcifu/"
              className="linkInstagram"
            >
              <img
                src="instagram.jpg"
                className="contactInstagram"
                alt="@DrCifu"
              />
            </a>
            <p className="infoContact">@DrCifu</p>
          </div>
          <div className="info">
            <a href="https://api.whatsapp.com/send/?phone=56942082668">
              <img src="whatsApp.png" className="WhatsApp" alt="WhatsApp" />
            </a>
            <p className="infoContact">+56 942082668</p>
          </div>
          <div className="info">
            <img src="gmail.png" className="gmail" alt="Gmail" />
            <p className="infoContact">alejandrocifuentesmunoz@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
