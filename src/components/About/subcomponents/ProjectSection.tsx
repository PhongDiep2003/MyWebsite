import React from 'react'
import './css/project.css'
import ProjectCard from './ProjectCard'
import ScanSlateImg from '../../../images/ScanSlate.png'
import GmailCloneImg from '../../../images/GmailCloneLogo.png'
import ChatGPTCloneImg from '../../../images/chatgptImage.jpeg'
const projects = [{
  name: 'ScanSlate',
  description: "A mobile app developed for the CMPE 133 group project. allows users to capture a picture of an object and label it using TensorFlow's MobileNet image classification, and then translate that label into one of the many languages that users selected when creating their account. The app includes a quiz mode feature-based flashcard meant to help users learn and reinforce their memory. Aside from that, the app also offers some basic flashcard management features such as removing and viewing flashcards.",
  url: ScanSlateImg,
  githubLink: 'https://github.com/PhongDiep2003/Scanslate-2.0'
},
{
  name: 'Gmail Clone',
  description: "Cloned the Google Gmail application, which simulates every fundamental feature of Google Gmail, including registration, authentication, and email composition. Furthermore, this cloned version of Google Gmail provides extra functionalities, such as the ability to add contacts and create to-do lists. These additions are intended to improve the overall user experience and transform this cloned application into a more collaborative and managed tool for its users.",
  url: GmailCloneImg,
  githubLink: 'https://github.com/PhongDiep2003/CMPE131-Project'
},
{
  name: 'ChatGPT Clone',
  description: "Utilized OpenAI API to clone the ChatGPT application and incorporated an additional feature to the cloned application, namely speech-to-text feature. This speech-to-text feature enables users to input their questions by utilizing the built-in microphone on their computer, which transcribes their spoken words into text and sends them to the API. The application also includes a text input, which allows users, who choose not to use their microphone, to send question to the API by typing it.",
  url: ChatGPTCloneImg,
  projectUrl: 'https://chatgptclone-ea865.web.app/'
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
