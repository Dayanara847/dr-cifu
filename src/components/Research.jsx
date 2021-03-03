import React from 'react';
import './Research.modules.css';

function Research() {
  return (
    <div id="researchContainer">
      <img id="research" src="newResearch.png" alt="" />
      <h3>Investigación</h3>
      <p className="paragraphResearch">
        Mi línea de investigación gira en torno a la filosofía de la psicología y a la epistemología de la psicoterapia. He publicado diversos artículos en torno a la música y fotografía en psicoterapia, sobre la psicoterapia online, sobre metodología de la investigación y fundamentalmente sobre epistemología  aplicada a la psicoterapia. Si te interesa algo de ello, puedes revisar algunas de mis publicaciones a continuación (vinculos).
          </p>
      <p className="paragraphResearch">
        Fui becado por Agencia Nacional de Investigación y Desarrollo (ANID) para desarrollar mi investigación doctoral en torno a los supuestos epistemológicos de las corrientes psicoterapéuticas fundamentales.
          </p>
      <p className="paragraphResearch">
        Actualmente, fui beneficiado con un fondo interno de investigación en la Universidad Autónoma de Chile sobre mente y psicoterapia, proyecto en el que soy el investigador principal.
          </p>
      <p className="paragraphResearch">
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
        <a href="https://scholar.google.com/citations?user=ooYVYdkAAAAJ&hl=en">
          <img
            src="googleScholar.png"
            className="linkGoogleResearch"
            alt="GoogleScholar"
          />
          <a href="http://orcid.org/0000-0003-1767-5517">
            <img
              src="orcidPNG.png"
              className="linkOrcid"
              alt="Orcid"
            />
          </a>
        </a>
        <a href="https://www.researchgate.net/profile/Alejandro-Cifuentes-Munoz">
          <img
            src="researchgate.png"
            className="linkGoogleResearch"
            alt="ResearchGate"
          />
        </a>
      </div>
    </div>
  )
};

export default Research;