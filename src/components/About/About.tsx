import './about.css'
import FactSection from './subcomponents/FactSection'
import DividedLine from './subcomponents/DividedLine'
import ProjectSection from './subcomponents/ProjectSection'
import SkillSection from './subcomponents/SkillSection'
const About = () => {
  return (
    <div className='about__container' >
        <FactSection/>
        <DividedLine/>
        <ProjectSection/>
        <DividedLine/>
        <SkillSection/>
    </div>
  )
}

export default About
