import React from "react";
import './Home.modules.css';
import AboutMe from './AboutMe';
import AboutTherapy from './AboutTherapy';
import Research from './Research';
import Contact from './Contact';


function Home() {
  return (
    <div id="homeBody">
      <a name="home"></a>
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

      <a name="AboutMe"></a>
      <AboutMe />

      <a name="aboutTherapy"></a>
      <AboutTherapy />

      <a name="research"></a>
      <Research />

      <a name="contact"></a>
      <Contact />

      <hr id="line" />
      <p id="sign">Dayanara Maurin (2021)</p>
    </div>
  );
}

export default Home;