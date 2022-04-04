//React
import React from 'react';

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
              <p>Linkedin</p>
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <a href='https://github.com/GIsacura' target="_blank">
              <p>Github</p>
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <a href='https://twitter.com/gisacura_' target="_blank">
              <p>Twitter</p>
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;