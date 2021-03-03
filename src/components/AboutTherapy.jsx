import React from 'react';
import './AboutTherapy.modules.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function AboutTherapy() {
    return (
        <div id="aboutTeraphy">
            <img
                src="Sofá 1.png"
                className="sofa"
                alt="logo"
            />
            <p className="phrase">
                "Las personas construimos nuestras identidades y damos<br /> significado a lo que nos pasa en la vida a través<br /> de las historias que nos contamos."<br />
            </p>

            <h3 id="psicoTitle">Psicoterapia</h3>
            <p className="paragraph">
                La psicoterapia es un <span className="highlightTherapy">proceso</span> que busca promover el bienestar del consultante, resignificando el sufrimiento humano que le llevó a consultar a través de diversos medios psicológicos.
          </p>
            <p className="paragraph">
                Existen muchas maneras de hacer psicoterapia. La forma de psicoterapia que yo practico se denomina <span className="highlightTherapy">constructivista</span> y <span className="highlightTherapy">construccionista</span>. Te cuento brevemente sus principales características:
      </p>
            <div className="ideas">
                <div className="circle">1</div>
                <p className="paragraphIdea">
                    <span className="colour">El encuentro psicoterapéutico es único e irrepetible.</span> Cada persona forma parte de una red de significados y creencias particulares que el terapeuta debe comprender y respetar.
      </p>
            </div>
            <div className="ideas">
                <div className="circle">2</div>
                <p className="paragraphIdea">
                    <span className="colour">La psicoterapia es un encuentro de expertos.</span> El consultante en su vida y en lo que le aqueja y el terapeuta en hacer preguntas que movilicen el cambio.
      </p>
            </div>
            <div className="ideas">
                <div className="circle">3</div>
                <p className="paragraphIdea">
                    <span className="colour">Los hechos nunca cambian, las interpretaciones de ellos sí.</span> Los seres humanos construimos activamente nuestra realidad. Algo que se interpreta como un problema puede ser interpretado de otra manera gracias al lenguaje.
      </p>
            </div>
            <div className="ideas">
                <div className="circle">4</div>
                <p className="paragraphIdea">
                    <span className="colour">El foco terapéutico está en los recursos del consultante, no en sus carencias.</span> Lamentablemente, los test psicológicos y las etiquetas diagnósticas patologizan la vida humana. Aquí se prescinde de su uso: Las personas tienen derecho a contar su historia en sus propios términos.
      </p>
            </div>
            <img src="paper.png" alt="" id="paper" />
            <p className="paragraph bottom">
                Si te interesa conocer más detalles teórico-prácticos de esta forma de psicoterapia, te invito a revisar el apartado de investigación. Allí encontrarás las respuestas que necesitas.
      </p>
            <a href="#research" >
                <ExpandMoreIcon id="arrowIcon" />
            </a>
        </div>
    )
}

export default AboutTherapy;