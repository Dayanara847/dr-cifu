import React, { useState } from 'react';
import './Contact.modules.css';

function Contact() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        incomplete: true
    });

    const handleChange = () => {
        if (state.name && state.email && state.message) {
            setState({ ...state, incomplete: false })
        }
    }

    const handleSubmit = () => {

    }

    return (
        <div id="contact">
            <h3>¿Conversemos?</h3>
            <div id="contactInte">
                <div className="contactForm">
                    <h4>Envíame un mensaje</h4>
                    <form onSubmit={handleSubmit}>
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
                        <button className={state.incomplete ? "sendButton" : "sendButton sendButtonEn"} type="submit" disabled={state.incomplete}>Enviar</button>
                    </form>
                </div>

                <div>
                    <div className="separatoryLine"></div>
                    <div >ó</div>
                    <div className="separatoryLine"></div>
                </div>

                <div>
                    <img
                        src="alePhoto.jpg"
                        className="imgPsico"
                        alt="Alejandro Cifuentes"
                    />
                    <h4>Contáctame por redes sociales</h4>
                    <div className="info">
                        <a href="https://www.instagram.com/alecifu07/" className="linkInstagram">
                            <img
                                src="instagram.jpg"
                                className="contactInstagram"
                                alt="@DrCifu"
                            />
                        </a>
                        <p>@DrCifu</p>
                    </div>
                    <div className="info">
                        <a href="https://api.whatsapp.com/send/?phone=56942082668">
                        <img
                            src="whatsApp.png"
                            className="WhatsApp"
                            alt="WhatsApp"
                        />
                        </a>
                        <p>+56 942082668</p>
                    </div>
                </div>
            </div>
            <img
                src="sofaDetail.png"
                className="sofaDetail"
                alt="Alejandro Cifuentes"
            />
        </div>
    )
};

export default Contact;