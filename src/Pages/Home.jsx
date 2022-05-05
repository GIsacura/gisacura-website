//React
import React from 'react';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//Assets
import ProfilePhoto from '../../assets/images/profile_photo.jpg'
import LinkedInLogo from '../../assets/logo/icons8-linkedin-48.png'
import GitHubLogo from '../../assets/logo/icons8-github-48.png'
import TwitterLogo from '../../assets/logo/icons8-twitter-cuadrado-48.png'
import WhatsappLogo from '../../assets/logo/icons8-whatsapp-48.png'
import TelegramLogo from '../../assets/logo/icons8-aplicación-telegrama-48.png'
import PhoneLogo from '../../assets/logo/icons8-phone-48.png'
import MailLogo from '../../assets/logo/icons8-gmail-48.png'
//Styles
import '../styles/Home.css'
//Components
import ProjectCard from '../Components/ProjectCard';
//Utils
import projects from '../utils/projectsData';

const Home = () => {
  return (
    <div>
      <section className='main' id='main'>
        <div className='main__photo'>
          <img src={ProfilePhoto} alt='profile-photo'/>
        </div>
        <section className='main__information'>
          <h1>Gustavo Isacura</h1>
          <h3>Frontend Developer</h3>
          <div className='main__information--social-media'>
            <a href='https://linkedin.com/in/gustavoisacura' target="_blank">
              <img src={LinkedInLogo} alt='Linkedin'/>
              <p>Linkedin</p>
            </a>
            <a href='https://github.com/GIsacura' target="_blank">
              <img src={GitHubLogo} alt='Github'/>
              <p>Github</p>
            </a>
            <a href='https://twitter.com/gisacura_' target="_blank">
              <img src={TwitterLogo} alt='Twitter
              '/>
              <p>Twitter</p>
            </a>
          </div>
        </section>
      </section>

      <section className='about-me' id='about-me'>
        <h2>Hi!, i'm Gustavo. Nice to meet you.</h2>
        <p>
          I'm a Frontend developer, from the past year and a half i've been learning programing, mainly but not only web development, i'm always looking new things to learn and challenge myself every time. I worked with Html, Css and javascript (React mainly). Besides i have knowledge of Git, Tailwind, Node js, Redux, and Python. I'll be happy if we can work together!
        </p>
      </section>

      <section className='projects' id='projects'>
        {projects.map(project => (
          <ProjectCard
            title={project.title}
            description={project.description}
            codeUrl={project.codeUrl}
            demoUrl={project.demoUrl}
            technologies={project.technologies}
          />
        ))}
      </section>

      <section className='contact' id='contact'>
        <div>
          <h3><img src={MailLogo} alt='mail'/>: </h3>
          <p>i.tavo1512@gmail.com</p>
        </div>

        <div>
          <div className='contact__logos'>
            <span><img src={PhoneLogo} alt='phone'/></span>
            <span><img src={WhatsappLogo} alt='whatsapp'/></span>
            <span><img src={TelegramLogo} alt='telegram'/></span> :
          </div>
          <p>+584244209059</p>
        </div>
      </section>
    </div>
  );
};

export default Home;