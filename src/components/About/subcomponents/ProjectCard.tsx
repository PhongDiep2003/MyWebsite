import React, {useState} from 'react'
import './css/project.css'
interface ProjectCardProps {
  name: string;
  url: string;
  description: string;
  githubLink?: string;
  projectUrl?: string;
}
const ProjectCard = ({name, url, description, githubLink, projectUrl}: ProjectCardProps) => {
  const [animate, setAnimate] = useState(false) //prevent animation is applied on first render
  const [onFront, setOnFront] = useState(true);
  const [frontToBack, setFrontToBack] = useState(true)
  
  const handleClick = () => {
    setAnimate(true)
    setFrontToBack(!frontToBack)
  };
  const animationClass = animate ? (frontToBack ? 'backToFront__animate' : 'frontToBack__animate') : '';
  return (
    
    <div className={`card__container ${animationClass}` } onClick={handleClick} onAnimationEnd={() => setOnFront(!onFront)} >
      {onFront ? 
                <img src={url}  alt={name} className='front__cover'></img>
               :
                <div className="back__cover">
                  <h4 className="card__title">Name: <span className='card__content'>{name}</span> </h4>
                  <h4 className="card__title">Description: <span className='card__content' >{description}</span></h4>
                  {githubLink && <h4 className='card__title'>Github Repo: <a className='card__content' href={githubLink} target='_blank'>{githubLink}</a></h4>}
                  {projectUrl && <h4 className='card__title'>Project URL: <a className='card__content' href={projectUrl} target='_blank'>{projectUrl}</a></h4>}
                </div>
      }
    </div>
  )
}
export default ProjectCard;
//'card__img animate__animated animate__bounce'