import React from 'react'
import './about.css'
import FactSection from './subcomponents/FactSection'
const About = () => {
  return (
    <div className='about__container' >
        <FactSection/>
        <div className='experience'></div>
        <div className='project'></div>
        <div className='skill'></div>
    </div>
  )
}

export default About
