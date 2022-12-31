import React from 'react';
import Project from './Project';

const Section = ({ title, projects, description }) => {
  return (
    <section className="section">
    <div className="center-title">
      <h2>{title}</h2>
      <div className="underline"></div>
      <br />
      <p className="section-description" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
    <div className="projects">
      {
        projects.map((project) => {
          const {id} = project;
          return <Project key={id} {...project}></Project>
        })
      }
    </div>
  </section>
  );
};

export default Section;
