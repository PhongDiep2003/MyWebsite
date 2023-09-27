import React from 'react'
import './animatedletter.css'
interface Props {
  letters: string[];
  letterClass: string;
}
const AnimatedLetters = ({letters, letterClass}:Props) => {
  return (
    <div className='text__container'>
      {letters.map((letter, i) => (
        <span key={i.toString()} className={`${letterClass} _${i + 1}`}>
          {letter}
        </span>
      ))}
    </div>
  )
}

export default AnimatedLetters
