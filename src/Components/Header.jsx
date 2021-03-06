//React
import React, {useRef} from 'react';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
//Assets
import Logo from '../../assets/logo/logo_small1.png'
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
            <img src={Logo} alt='logo'/>
          </div>
          <ul>
            <li><a href='#main'>Main</a></li>
            <li><a href='#about-me'>About Me</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact Me</a></li>
          </ul>
        </div>

        <div className='mobile'>
          <div className='header'>
            <div className='logo-container'>
              <img src={Logo} alt='logo'/>
            </div>
            <span onClick={toggleShowMenu}>
              <FontAwesomeIcon className='menu-icon' icon={faBars}/>
            </span>
          </div>
            <ul ref={mobileMenu}>
              <li><a href='#main'>Main</a></li>
              <li><a href='#about-me'>About Me</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact Me</a></li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;