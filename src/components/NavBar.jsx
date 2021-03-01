import './NavBar.modules.css';

function NavBar() {
  return (
    <div className="navbar">
      <a className="linkNavBar" href="#arriba">Inicio
        </a>
      <a className="linkNavBar" href="#AboutMe">Sobre mí
        </a>
      <a className="linkNavBar" href="#aboutTeraphy">Sobre la psicoterapia
        </a>
      <a className="linkNavBar" href="#research">Investigación
        </a>
      <a className="linkNavBar" href="#contact">Contacto
        </a>
    </div>
  );
};

export default NavBar;