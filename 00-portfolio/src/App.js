import React, { useState } from 'react';
import data from './data';
import logo from './images/fortresscode.png'
import Section from './Section';

function App() {
  const [sections, setSections] = useState(data);
  return <main>
    <section className='intro-section'>
      <article className='intro-text'>
        <h1>code fortress</h1>
        <div className="intro-paragraphs">
          <p>Welcome to my <b>Code Fortress</b></p>
          <p>Here I have all my projects that <br /> have help me to learn new things</p>
          <p>This is just the first version, I will continue improving this page and myself. 😁</p>
        </div>
      </article>
      <img src={logo} alt="fortress code" className="logo"/>
    </section>
    <div className="sections">
      {
        sections.map((section) => {
          const {id} = section;
          return <Section key={id} {...section}></Section>
        })
      }
    </div>
  </main>;
}

export default App;
