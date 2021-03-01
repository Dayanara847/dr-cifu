import React, { useState } from "react";
import './Home.modules.css';
import AboutMe from './AboutMe';


function Home() {
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
    <div id="homeBody">
      <a name="arriba"></a>
      <div id="logo">
        <img
          src="Logo.png"
          className="App-logo"
          alt="logo"
        />
      </div>

      <a name="AboutMe"></a>
      <AboutMe />
      {/* <div id="AboutMe">
        <div id="pImg">
          <h3 className="title">Hola, bienvenid@. Es un gusto tenerte por acá.</h3>
          <div className="cards">
            <div className="card cardOne">
              <SchoolIcon className="icon iconOne" />
              <p>
                Psicólogo mención psicología de la salud (Universidad Católica del Maule), magíster en psicología clínica mención psicoterapia constructivista y construccionista (Universidad de Valparaíso) y Doctor en Ciencias Humanas (Universidad de Talca).
              </p>
            </div>
            <div className="card cardTwo">
              <WorkIcon className="icon iconTwo" />
              <p>
              Académico regular e investigador en Universidad Autónoma de Chile y psicoterapeuta particular.
              </p>
            </div>
            <div className="card cardThree">
              <MusicNoteIcon className="icon iconThree" />
              <p>
              Mis hobbies son la música (crearla y escucharla), los viajes y la investigación.
              </p>
            </div>
          </div>
        </div>
        <img
          src="ale.jpg"
          className="imgPsico"
          alt="Alejandro Cifuentes"
        />
      </div> */}


      <a name="aboutTeraphy"></a>
      <div id="aboutTeraphy">
        <h3>Psicoterapia</h3>
        <p className="paragraph2">
          El sufrimiento humano ha acompañado a la humanidad desde sus inicios, y diversas han sido las formas de abordarlo (amigos, religión, pasatiempos, etc). Sin embargo, la disciplina profesional que se ha encargado por varias décadas de su alivio es la psicoterapia.
          </p>
        <p className="paragraph2">
          La palabra psicoterapia proviene del griego Psyché (alma) y therapeutikós (el que cuida del otro) por lo que podría entenderse como una práctica en la que una persona cuida del alma o espíritu de otra. Sin embargo, hoy en día se entiende a la psicoterapia como un tratamiento ejercido por un profesional autorizado que utiliza diversas teorías o corrientes para promover el bienestar en una persona en el contexto de una relación profesional.
      </p>
        <p className="paragraph2">
          Pero hay un problema, se han documentado cerca de 400 formas de psicoterapia distintas! ¿Cuál es mejor? Dificil pregunta, ya que todas tienen pros y contras entendiendo los problemas humanos de diferentes maneras.<br />
          La psicoterapia con la que trabajo yo trabajo se denomina constructivista y construccionista. En palabras simples esta se caracteriza por: 1,2,3,4,5
          </p>
      </div>


      <a name="research"></a>
      <div id="research">
        <h3>Investigación</h3>
        <p className="paragraph2">
          Mi línea de investigación gira en torno a la filosofía de la psicología y a la epistemología de la psicoterapia. He publicado diversos artículos en torno a la música y fotografía en psicoterapia, sobre la psicoterapia online, sobre metodología de la investigación y fundamentalmente sobre epistemología  aplicada a la psicoterapia. Si te interesa algo de ello, puedes revisar algunas de mis publicaciones a continuación (vinculos).
          </p>
        <p className="paragraph2">
          Fui becado por Agencia Nacional de Investigación y Desarrollo (ANID) para desarrollar mi investigación doctoral en torno a los supuestos epistemológicos de las corrientes psicoterapéuticas fundamentales.
          </p>
        <p className="paragraph2">
          Actualmente, fui beneficiado con un fondo interno de investigación en la Universidad Autónoma de Chile sobre mente y psicoterapia, proyecto en el que soy el investigador principal.
          </p>
        <p className="paragraph2">
          Creo intensamente que los productos de la ciencia y la investigación deben estar al alcance de todos y todas, no sólo de una elite académica que publica artículos y libros en lenguajes complejos. Es por ello, que si quieres acercarte a mis investigaciones en un lenguaje amigable y simple te invito a mi red social de divulgación científica:
          </p>
        <div className="links">
          <a href="https://www.instagram.com/alecifu07/">
            <img
              src="instagram.jpg"
              className="instagram"
              alt="@DrCifu"
            />
          </a>
          <a href="https://www.instagram.com/alecifu07/">
            <img
              src="googleScholar.png"
              className="link"
              alt="GoogleScholar"
            />
            <a href="https://www.instagram.com/alecifu07/">
              <img
                src="orcid.svg"
                className="linkOrcid"
                alt="Orcid"
              />
            </a>
          </a>
          <a href="https://www.instagram.com/alecifu07/">
            <img
              src="researchgate.png"
              className="link"
              alt="ResearchGate"
            />
          </a>
        </div>

      </div>

      <a name="contact"></a>
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
            <div className="s">ó</div>
            <div className="separatoryLine"></div>
          </div>

          <div>
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
              <img
                src="wapp.webp"
                className="WhatsApp"
                alt="WhatsApp"
              />
              <p>+56 942082668</p>
            </div>
          </div>
        </div>
      </div>
      <hr id="line" />
      <p className="sign">Dayanara Maurin (2021)</p>
    </div>
  );
}

export default Home;