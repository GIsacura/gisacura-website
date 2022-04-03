//React
import React from 'react';

//Components
import Logo1 from './Logo1';

//Styles
import '../styles/Header.css'


const Header = () => {
  return (
    <header>
      <Logo1/>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Sobre Mi</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;