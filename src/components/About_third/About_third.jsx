import React from 'react'
import './about_third.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faStar ,faStarHalf} from '@fortawesome/free-solid-svg-icons'

const About_third = () => {
    const fullStart = <FontAwesomeIcon icon={faStar}/>;
    const halfStart = <FontAwesomeIcon icon={faStarHalf}/>;
  return (
    <div className='about__container-third'>
      <div className='text-content-container'>
        <h2>Backend Developer</h2>
        <li>
            Python <span>{fullStart}{fullStart}{fullStart}{fullStart}</span>
        </li>
        <li>
            Java <span>{fullStart}{fullStart}{fullStart}{fullStart}</span>
        </li>
        <li>
            Flask <span>{fullStart}{fullStart}{halfStart}</span>
        </li>
        <li>
            RESTful <span>{fullStart}{fullStart}{fullStart}</span>
        </li>
        <li>
            SQL <span>{fullStart}{fullStart}{fullStart}{fullStart}{halfStart}</span>
        </li>
        <li>etc.</li>
      </div>

      <div className='graph-content-container'>

        <div class="terminal-loader">
            <div class="terminal-header">
                <div class="terminal-title">Status</div>
                <div class="terminal-controls">
                    <div class="control close"></div>
                    <div class="control minimize"></div>
                    <div class="control maximize"></div>
                </div>
            </div>
            <div class="text">FullStack...</div>
        </div>

      </div>

      <div className='text-content-container'>
        <h2>Frontend Developer</h2>
        <li>
            Vue.js <span>{fullStart}{fullStart}{fullStart}</span>
            </li>
        <li>
            React.js 
            <span>
            {fullStart}{fullStart}{fullStart}{fullStart}{halfStart}
            </span>
        </li>
        <li>
            HTML5 <span>{fullStart}{fullStart}{fullStart}{fullStart}{halfStart}</span>
        </li>
        <li>
            Tailwind <span>{fullStart}{fullStart}{fullStart}{fullStart}{halfStart}</span>
        </li>
        <li>
            Javascript <span>{fullStart}{fullStart}{fullStart}{fullStart}</span>
        </li>
        <li>etc.</li>
      </div>
    </div>
  )
}

export default About_third
