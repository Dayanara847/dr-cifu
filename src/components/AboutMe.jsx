import React from 'react';
import './AboutMe.modules.css';

function AboutMe() {
  return (
    <div id="AboutMe">
      <div>
        <h1 className="title">Bienvenid@!</h1>
        <div className="boxes">
          <img
            src="education.png"
            className="box educationBox"
            alt="Education"
          />
          <img
            src="experience.png"
            className="box experienceBox"
            alt="Experience"
          />
          <img
            src="hobbies.png"
            className="box hobbiesBox"
            alt="Hobbies"
          />
        </div>
        <div className="cards">
          <div className="card">
            <p className="text">
              Mi nombre es Alejandro, soy psicólogo y <span className="highlightDegree">Psicoterapeuta</span> de <span className="highlight">Adultos</span> y <span className="highlight">Adolescentes</span>, tengo un <span className="highlightDegree">Magíster</span> en psicología clínica mención psicoterapia constructivista y construccionista y soy <span className="highlightDegree">Doctor</span> en Ciencias Humanas.
            </p>
          </div>
          <div className="card">
            <p className="text">
              Actualmente me desempeño como <span className="highlightDegree">Académico</span> regular e <span className="highlightDegree">Investigador</span> en la Universidad Autónoma de Chile y como <span className="highlight">Psicoterapeuta</span> particular.
              </p>
          </div>
          <div className="card">
            <p className="text">
              Mis <span className="highlight">Hobbies</span> giran en torno a la <span className="highlightDegree">Música</span> (crearla y escucharla), los viajes, el tenis y la investigación.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;