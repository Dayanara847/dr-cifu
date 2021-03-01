import React from 'react';
import './AboutMe.modules.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function AboutMe() {
    return (
        <div id="AboutMe">
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
      </div>
    )
}

export default AboutMe;