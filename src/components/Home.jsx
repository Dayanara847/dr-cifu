import React from "react";
import './Home.modules.css';
import AboutMe from './AboutMe';
import AboutTherapy from './AboutTherapy';
import Research from './Research';
import Contact from './Contact';

function Home() {
  return (
    <div id="homeBody">
      <a name="Inicio"></a>
      <div id="logo">
        <img
          src="Logo.png"
          className="App-logo"
          alt="logo"
        />
        <div className="circles">
          <div className="circleShape circleAboutMe"></div>
          <div className="circleShape circleAboutTherapy"></div>
          <div className="circleShape circleResearch"></div>
          <div className="circleShape circleContact"></div>
        </div>
      </div>

      <a name="Sobre mí"></a>
      <AboutMe />

      <a name="Sobre la psicoterapia"></a>
      <AboutTherapy />

      <a name="Investigación"></a>
      <Research />

      <a name="Precios"></a>
      <div id="prices">
            <img id="notes" src="valores.png" alt="" />
      </div>

      <a name="Contacto"></a>
      <Contact />

      <a href="#Contacto" className="dialogoSofa">
        <img src="dialogo.png" alt="" className="globo" />
        {/* Imagen de sillón para app web */}
        <img
          src="sofaDetail.png"
          className="sofaDetail"
          alt=""
        />
        {/* Imagen de sillón para app mobile */}
        <img
          src="contactPhone.png"
          className="contactPhone"
          alt=""
        />
      </a>

      <hr id="line" />
      <p id="sign">Dayanara Maurin (2021)</p>
    </div>
  );
}

export default Home;