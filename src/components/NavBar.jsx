import React from 'react';
import './NavBar.modules.css';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function NavBar() {

  function TemporaryDrawer() {
    const [state, setState] = React.useState({
      menu: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState({ [anchor]: open });
    };

    const list = (anchor) => (
      <div
        className="list"
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Inicio', 'Sobre mí', 'Sobre la psicoterapia', 'Investigación', 'Precios', 'Contacto'].map((text) => (
            <a className="linkSideBar" href={"#" + text}>
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
        </List>
      </div>
    );

   return (
    <div>
      {['Menú'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="menu" onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    );
  }

let navBar = <div className="navbar">
  <a className="linkNavBar" href="#Inicio">Inicio
  </a>
  <a className="linkNavBar" href="#Sobre mí">Sobre mí
  </a>
  <a className="linkNavBar" href="#Sobre la psicoterapia">Sobre la psicoterapia
  </a>
  <a className="linkNavBar" href="#Investigación">Investigación
  </a>
  <a className="linkNavBar" href="#Precios">Precios
  </a>
  <a className="linkNavBar" href="#Contacto">Contacto
  </a>
</div>

return (
  <div className="navbarContainer">
    <div id="sideBar">
      {TemporaryDrawer()}
    </div>

    <div className="navbar">
      {navBar}
    </div>
  </div>
);
}

export default NavBar;