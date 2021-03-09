import React, { useState } from "react";
import "./Contact.modules.css";
import axios from "axios";
import swal from "sweetalert";

function Contact() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [incomplete, setIncomplete] = useState(true);

  const handleChange = (e) => {
    if (state.firstName && state.lastName && state.email && state.message) {
      setIncomplete(false);
    }
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = state;

    const response = await axios.post(
      "https://dralejandrocifuentes.com/mails",
      payload
    );

    if (response.data === "success") {
      swal("Todo listo!", "Mensaje enviado correctamente!", "success");
      document.getElementById("myForm").reset();
    } else if (response.data === "fail") {
      swal("Oh no!", "Error al enviar el mensaje.", "error");
    }
  };

  return (
    <div id="contact">
      <h3 className="contactTitle">¿Conversemos?</h3>
      <div id="contactInte">
        <div className="contactForm">
          <h4 className="subtitle">Envíame un mensaje</h4>
          <form id="myForm" onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="Nombre"
                type="text"
                id="firstName"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                placeholder="Apellido"
                type="text"
                id="lastName"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                placeholder="Email"
                type="email"
                id="email"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Mensaje"
                id="message"
                onChange={handleChange}
                required
              />
            </div>
            <button
              className={incomplete ? "sendButton" : "sendButton sendButtonEn"}
              type="submit"
              disabled={incomplete}
            >
              Enviar
            </button>
          </form>
        </div>
        <div id="divider">
          <div className="separatoryLine"></div>
          <div id="o">ó</div>
          <div className="separatoryLine"></div>
        </div>{" "}
        */}
        <div id="information">
          <img
            src="alePhoto.jpg"
            className="imgPsico"
            alt="Alejandro Cifuentes"
          />
          <h4 className="subtitle">Contáctame por aquí</h4> */}
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
