//React
import React from 'react';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//Components
//Styles
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <section className='main'>
        <div className='main__photo'>
          <img src='../../assets/images/profile_photo.jpg' alt='profile-photo'/>
        </div>
        <section className='main__information'>
          <h1>Gustavo Isacura</h1>
          <h3>Desarrolador Frontend</h3>
          <div className='main__information--social-media'>
            <a href='https://linkedin.com/in/gustavoisacura' target="_blank">
              {/* <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon'/> */}
              <img src='../../assets/logo/icons8-linkedin-48.png' alt='Linkedin'/>
              <p>Linkedin</p>
            </a>
            <a href='https://github.com/GIsacura' target="_blank">
              {/* <FontAwesomeIcon icon={faGithub} className='github-icon'/> */}
              <img src='../../assets/logo/icons8-github-48.png' alt='Github'/>
              <p>Github</p>
            </a>
            <a href='https://twitter.com/gisacura_' target="_blank">
              {/* <FontAwesomeIcon icon={faTwitterSquare} className='twitter-icon'/> */}
              <img src='../../assets/logo/icons8-twitter-cuadrado-48.png' alt='Twitter
              '/>
              <p>Twitter</p>
            </a>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;