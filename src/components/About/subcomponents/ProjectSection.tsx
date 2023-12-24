import React from 'react'
import './css/project.css'
import ProjectCard from './ProjectCard'
import ScanSlateImg from '../../../images/ScanSlate.png'
import GmailCloneImg from '../../../images/GmailCloneLogo.png'
const projects = [{
  name: 'ScanSlate',
  description: "A mobile app developed for the CMPE 133 group project. allows users to capture a picture of an object and label it using TensorFlow's MobileNet image classification, and then translate that label into one of the many languages that users selected when creating their account. The app includes a quiz mode feature-based flashcard meant to help users learn and reinforce their memory. Aside from that, the app also offers some basic flashcard management features such as removing and viewing flashcards.",
  url: ScanSlateImg,
  githubLink: 'https://github.com/PhongDiep2003/Scanslate-2.0'
},
{
  name: 'Gmail Clone',
  description: "Cloned Google Gmail application that replicates all of Google Gmail's basic capabilities such as sign up, login, email composition, and so on. Furthermore, this cloned Google Gmail enables more additional functionalities such as creating todo lists and adding contacts, which enhances user experience and makes it more of a management and collaboration tool for users.",
  url: GmailCloneImg,
  githubLink: 'https://github.com/PhongDiep2003/CMPE131-Project'
}]
const ProjectSection = () => {
  return (
    <div className='project__container'>
      <h1>Projects</h1>
      <div className='project__box'>
        {projects.map((project, i) => <ProjectCard {...project} key={i.toString()}/>)}
      </div>
    </div>
  )
}

export default ProjectSection
