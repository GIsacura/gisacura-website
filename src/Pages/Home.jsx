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
      <section className='main' id='main'>
        <div className='main__photo'>
          <img src='../../public/assets/images/profile_photo.jpg' alt='profile-photo'/>
        </div>
        <section className='main__information'>
          <h1>Gustavo Isacura</h1>
          <h3>Desarrolador Frontend</h3>
          <div className='main__information--social-media'>
            <a href='https://linkedin.com/in/gustavoisacura' target="_blank">
              <img src='../../public/assets/logo/icons8-linkedin-48.png' alt='Linkedin'/>
              <p>Linkedin</p>
            </a>
            <a href='https://github.com/GIsacura' target="_blank">
              <img src='../../public/assets/logo/icons8-github-48.png' alt='Github'/>
              <p>Github</p>
            </a>
            <a href='https://twitter.com/gisacura_' target="_blank">
              <img src='../../public/assets/logo/icons8-twitter-cuadrado-48.png' alt='Twitter
              '/>
              <p>Twitter</p>
            </a>
          </div>
        </section>
      </section>

      <section className='about-me' id='about-me'>
        <h2>Hi!, i'm Gustavo. Nice to meet you.</h2>
        <p>
          I'm a Frontend developer, from the past year and a half i've been learning programing, mainly but not only web development, i'm always looking new things to learn and challenge myself every time. I worked with Html, Css and javascript (React mainly). Besides i have knowledge of Git, Tailwind, Node js, and Python. I'll be happy if we can work together!
        </p>
      </section>

      <section className='projects' id='projects'>
        <div className='projects__container'>
          <div className='projects__card'>
            <h3>Demo Halo Website</h3>
            <p>
              Landing Page based on the video game Halo
            </p>
            <div className='projects__card--buttons'>
              <a href="https://github.com/GIsacura/react-demo-halo-website" target="_blank">Ver Codigo</a>
              <a href="https://gisacura-react-demo-halo-website.vercel.app/" target="_blank">Ver Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section className='contact' id='contact'>
        <div>
          <h3>Email: </h3>
          <p>i.tavo1512@gmail.com</p>
        </div>

        <div>
          <h3>Phone, WhatsApp and Telegram: </h3>
          <p>+584244209059</p>
        </div>
      </section>
    </div>
  );
};

export default Home;