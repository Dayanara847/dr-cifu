import React from 'react';
import './AboutMe.modules.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function AboutMe() {
  return (
    <div id="AboutMe">
      <div id="pImg">
        <h1 className="title">Bienvenid@!</h1>
        <div className="card">
          <SchoolIcon className="icon iconOne" />
          <p>
            Mi nombre es Alejandro, soy psicólogo y <span className="highlightDegree">Psicoterapeuta</span> de <span className="highlight">Adultos</span> y <span className="highlight">Adolescentes</span>, tengo un <span className="highlightDegree">Magíster</span> en psicología clínica mención psicoterapia constructivista y construccionista y soy <span className="highlightDegree">Doctor</span> en Ciencias Humanas.
            </p>
        </div>
        <div className="card">
          <WorkIcon className="icon iconTwo" />
          <p>
            Actualmente me desempeño como <span className="highlightDegree">Académico</span> regular e <span className="highlightDegree">Investigador</span> en la Universidad Autónoma de Chile y como <span className="highlight">Psicoterapeuta</span> particular.
              </p>
        </div>
        <div className="card">
          {/*              <img
        src="guitar.png"
        className="guitarIcon"
        alt="Hobbies"
      /> */}
          <MusicNoteIcon className="icon iconThree" />
          <p>
            Mis <span className="highlight">Hobbies</span> giran en torno a la <span className="highlightDegree">Música</span> (crearla y escucharla), los viajes, el tenis y la investigación.
              </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;