import React from 'react'
import './css/fact.css'
import realMadid_logo from '../../../images/realmadridLogo.png'
import movie_logo from '../../../images/movieLogo.jpeg'
import music_logo from '../../../images/musicLogo.webp'
import sjsuLogo from '../../../images/sjsu.png'

const FactSection = () => {
  return (
    <div className='fact__container' >
      <div className='fun_fact_texts_section'>
        <h1>Fun Fact</h1>
        <div className='fun_fact_texts'>
            My name is Phong Diep. I am still a student and currently studying at San Jose State University. My major is Software Engineering. My hobbies are playing soccer, watching movie and listening to music. In free time, I usually go out and play soccer with my friends or find a quiet place to watch movie or listen to music. My career goal is to be able to integrate my app and web building skills with AI and machine learning to streamline the process, facilitate and automate human daily routine.
        </div>
      </div>
      
      <div className='fun_fact_images_section'>
        <img src={sjsuLogo} className='fun_fact_img'></img>
        <img src={realMadid_logo} className='fun_fact_img'></img>
        <img src={movie_logo} className='fun_fact_img'></img>
        <img src={music_logo} className='fun_fact_img'></img>
      </div>
    </div>
  )
}

export default FactSection
