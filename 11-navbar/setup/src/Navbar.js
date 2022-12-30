import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    linksContainerRef.current.style.height = `${showLinks ? linksHeight : '0'}px`;
  }, [showLinks])
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="Logo" />
        <button className='nav-toggle' onClick={() => setShowLinks((value) => !value)}>
          <FaBars/>
        </button>
      </div>
      <div className={`links-container${showLinks ? ' show-container' : ''}`} ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {links.map((link) => {
            const {id, url, text} = link;
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })}
        </ul>
      </div>
      <ul className='social-icons'>
        {
          social.map((socialIcon) => {
            const {id, url, icon} = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })
        }
      </ul>
    </div>
  </nav>
}

export default Navbar
