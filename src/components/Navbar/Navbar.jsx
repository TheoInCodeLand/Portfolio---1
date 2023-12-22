import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { faEnvelope, faHippo, faWifi, faSun, faLink,faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import '../Navbar/navbar.css';

const Navbar = () => {
 
  const [isClicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!isClicked);
  };
  
  return (
    <div className='navbar__main__container'>

      <span className='navbar__logo'>
        <Logo/>
      </span>
      <nav className='navbar__nav'>
        <a href="#" className="link">About</a>
        <a href="/projects" className="link">Profile</a>
        <a href="#" className="link">Projects_</a>
        <a href="#" className="link">Work</a>
        <a href="#" className="link">Contact</a>
    
      </nav>

      <nav className='navbar__links'>
        <a href="https://github.com/TheoInCodeLand" className="link">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/theophilus-thobejane-3b6a0b220/" className="link">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
    
      </nav>
      
    </div>
  )
}

export default Navbar
