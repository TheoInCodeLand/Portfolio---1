import React from 'react'
import './about_second.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About_second = ({icon}) => {
  return (
    <a href='https://neumorphism.io/#e0e0e0' className='about__second-language'>
      <FontAwesomeIcon icon={icon} />
    </a>
    
  )
}

export default About_second
