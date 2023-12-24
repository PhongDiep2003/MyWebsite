import { useState } from 'react'
import './home.css'
import AnimatedLetters from './AnimatedLetters'
const Home = () => {
  const [greetingClass, setGreetingClass] = useState<string>('greeting__letter')
  const greeting = "Welcome to my website".split('')
  const [introClass, setIntroClass] = useState<string>('intro__letter')
  const intro = "Hello, I'm Phong, an aspiring software engineer with a passion for innovative technology and problem-solving.".split('')
  return (
    <div className='home__container'>
        <div className='modal'>
            <AnimatedLetters letterClass={greetingClass} letters={greeting}/>
            <AnimatedLetters letterClass={introClass} letters={intro}/>
        </div>
    </div>
  )
}

export default Home
  