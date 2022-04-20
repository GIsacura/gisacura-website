import React from 'react';

const ProjectCard = ({title, description, demoUrl, codeUrl}) => {
  return (
    <div className='projects__container'>
      <div className='projects__card'>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
        <div className='projects__card--buttons'>
          <a href={codeUrl} target="_blank">View Code</a>
          <a href={demoUrl} target="_blank">View Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;