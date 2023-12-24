import {useRef} from 'react'
import './contact.css'
import logo from '../../images/contact_me_memoji.png'
import 'animate.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gywaots', 'template_5w51tfu', form.current, 'x_hG8LedC7myhlidB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact__container'>
      <div className='grid__column'>

        <form ref={form} className='contact__form' onSubmit={sendEmail}>
            <span className='greetingText'>Let's get in touch</span>
            <div className='inputs_container'>
                <div className='section name_section'>
                  {/* Last Name $ First Name input fields */}
                  <div className='section name_input'>
                    <label htmlFor='firstName'>First Name</label>
                    <input className='name input ' id='firstName' placeholder='First Name' type={'text'} name="first_name"/>
                  </div>
                  <div className='name_input'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input className='name input' id='lastName' placeholder='Last Name' type={'text'} name="last_name"/>
                  </div>
                </div>
                
                {/* Email input field */}
                <div className='section email_section'> 
                  <label htmlFor='email'>Email</label>
                  <input className='email_input input' id='email' type={'email'} name="email" placeholder='Enter your email'/>
                </div>

                {/* Message input field */}
                <div className='section'> 
                  <label htmlFor='message'>Message</label>
                  <textarea className='message_input' placeholder='Type me something...' inputMode='text' id='message' name="message"/>
                </div>
                <button className='submit_button' type='submit'>Send message</button>
         
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
