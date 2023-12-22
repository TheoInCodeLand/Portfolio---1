import React from 'react'
import './about.css'
import { About_first, About_second, About_third } from '../../components'
import { faJava, faHtml5, faPython, faNodeJs, faAngular, faVuejs } from '@fortawesome/free-brands-svg-icons';
import Spline from '@splinetool/react-spline';

const About = () => {
  return (
    <div className='about__container'>
      <About_first />
      {/* <div className='spline'>
      <Spline scene="https://prod.spline.design/ce7yL36zMEhH92XM/scene.splinecode" className='spliner'/>
      </div> */}
      <div className='about__container-second'>
        <About_second icon={faJava} />
        <About_second icon={faHtml5} />
        <About_second icon={faPython} />
        <About_second icon={faNodeJs} />
        <About_second icon={faAngular} />
        <About_second icon={faVuejs} />
      </div>
      <About_third />
    </div>
  )
}

export default About
