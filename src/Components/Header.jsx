//React
import React, {useRef} from 'react';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
//Components

//Styles
import '../styles/Header.css'


const Header = () => {
  const mobileMenu = useRef(null)

  const toggleShowMenu = () => {
    mobileMenu.current.classList.toggle('show')
  }
  return (
    <header>
      <nav>
        <div className='desktop__menu'>
          <div className='logo-container'>
            <img src='../../assets/logo/logo_small1.png' alt='logo'/>
          </div>
          <ul>
            <li><a href='#main'>Inicio</a></li>
            <li><a href='#about-me'>Sobre Mi</a></li>
            <li><a href='#projects'>Proyectos</a></li>
            <li><a href='#contact'>Contacto</a></li>
          </ul>
        </div>

        <div className='mobile'>
          <div className='header'>
            <div className='logo-container'>
              <img src='../../assets/logo/logo_small1.png' alt='logo'/>
            </div>
            <span onClick={toggleShowMenu}>
              <FontAwesomeIcon className='menu-icon' icon={faBars}/>
            </span>
          </div>
            <ul ref={mobileMenu}>
              <li><a href='#main'>Inicio</a></li>
              <li><a href='#about-me'>Sobre Mi</a></li>
              <li><a href='#projects'>Proyectos</a></li>
              <li><a href='#contact'>Contacto</a></li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;