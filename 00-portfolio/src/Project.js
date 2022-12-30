import React from 'react';

const Project = ({  name, link, image, description }) => {
  return (
    <a href={link}>
        <article className="project">
            <div className="center-title">
                <h3>{name}</h3>
            </div>
            <div className="img-container">
                <img src={image} alt="" />
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </article>
    </a>
  );
};

export default Project;
