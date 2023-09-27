import React, { useState } from 'react'
import './home.css'
import Logo from '../../images/memoji.png'
import AnimatedLetters from './AnimatedLetters'
const Home = () => {
  const [greetingClass, setGreetingClass] = useState<string>('greeting__letter')
  const greeting = "Welcome to my website".split('')
  const [introClass, setIntroClass] = useState<string>('intro__letter')
  const intro = 'My name is Phong. I am a software engineering major and currently studying at San Jose State University.'.split('')
  return (
    <div className='home__container'>
        <div className='intro__container'>
          <AnimatedLetters letterClass={greetingClass} letters={greeting}/>
          <AnimatedLetters letterClass={introClass} letters={intro}/>
        </div>

        <div className='logo__container'>
          <img src={Logo} className='logo' alt='Logo'/>
        </div>
    </div>
  )
}

export default Home
  