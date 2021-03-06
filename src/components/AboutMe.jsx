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
            className="box"
            alt="Education"
          />
          <img
            src="experience.png"
            className="box"
            alt="Experience"
          />
          <img
            src="hobbies.png"
            className="box"
            alt="Hobbies"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutMe;