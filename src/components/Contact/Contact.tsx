import React from 'react'
import './contact.css'
import logo from '../../images/contact_me_memoji.png'
import 'animate.css';
const Contact = () => {
  return (
    <div className='contact__container'>
      <div className='grid__column'>
        <form className='contact__form'>
          <span className='greetingText'>Let's get in touch</span>
          <div className='inputs_container'>
            <div className='section name_section'>
              {/* Last Name $ First Name input fields */}
              <div className='section name_input'>
                <label htmlFor='firstName'>First Name</label>
                <input className='name input ' id='firstName' placeholder='First Name' type={'text'}></input>
              </div>
              <div className='name_input'>
                <label htmlFor='lastName'>Last Name</label>
                <input className='name input' id='lastName' placeholder='Last Name' type={'text'}></input>
              </div>
            </div>

            {/* Email input field */}
            <div className='section email_section'> 
              <label htmlFor='email'>Email</label>
              <input className='email_input input' id='email' type={'email'}></input>
            </div>

            {/* Message input field */}
            <div className='section'> 
              <label htmlFor='message'>Message</label>
              <textarea className='message_input input' placeholder='Type me something' inputMode='text' id='message'></textarea>
            </div>
            <button className='submit_button'>Send message</button>
          </div>
        </form>
      </div>
      <div className='grid__column'>
        <img src={logo} alt='Logo' className=' contact_logo'/>
      </div>
    </div>
  )
}

export default Contact
