import './css/skill.css'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SkillSection = () => {
  return (
    <div className='skill__container'>
      <h1>Skills</h1>
      <div className='cubespinner__container'>
        <div className='cubespinner'>
            <div className="face1 cube__face">
              <FontAwesomeIcon icon={faPython} color="#1e90ff" />
            </div>
            <div className="face2 cube__face">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3 cube__face">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4 cube__face">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5 cube__face">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6 cube__face">
              <FontAwesomeIcon icon={faGithub} color="#000000" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection
