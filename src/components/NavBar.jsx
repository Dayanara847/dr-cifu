import { Link } from 'react-router-dom';
import './NavBar.modules.css';

function NavBar() {
  return (
    <div className="navbar">
      <Link className="home" to='/'>
        <span >
          Inicio
        </span>
      </Link>
      <Link className="home" to='/aboutme'>
        <span>
          Sobre mí
        </span>
      </Link>
      <Link className="home" to='/aboutTherapy'>
        <span>
          Sobre la terapia
        </span>
      </Link>
      <Link className="home" to='/contact'>
        <span>
          Contacto
        </span>
      </Link>
    </div>
  );
};

export default NavBar;