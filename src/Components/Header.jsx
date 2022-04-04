//React
import React from 'react';

//Components

//Styles
import '../styles/Header.css'


const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <img src='../../assets/logo/logo1_small.png' alt='logo'/>
      </div>
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