import React from 'react';
import './about_first.css';
import Profile_Picture from '../../images/me_mug.jpg';
import { faJava, faHtml5, faPython, faNodeJs, faAngular, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { sma } from '@fortawesome/free-regular-svg-icons';

const About_first = () => {
  return (
    <div className='about_first__container-main'>

      <div className='container-text'>
            <h1>about.</h1>
            <p className='intro'>I'm a <span>software engineer </span> chasing new IT solutions.</p>
            <p className='description'>When I'm not immersed in the digital realm, you'll find me exploring the latest in IT, experimenting with coding projects, and seaking cutting-edge technologies, I'm to bring creativity and technical expertise to elevate your team and projects.</p>
      </div>

      <div className='container-img'>
        <div>
            
        </div>
      </div>

    </div>
  )
}

export default About_first
