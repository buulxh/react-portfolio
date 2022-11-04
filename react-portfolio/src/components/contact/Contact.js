import React, { useRef, useState } from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessageLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import validator from 'validator'

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(null);

  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setError('')
    } else {
      setError('Invalid Email')
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_f9rqeha', 'template_ehmdrw4', form.current, 'Y8hgrkm81M700Mo38')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>buulxh@pascaliaaia.com</h5>
            <a href="mailto:buulxh@pascaliaaia.com" className='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessageLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>buulxh</h5>
            <a href="https://www.facebook.com/hoangbuu151099" className='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+84822360459</h5>
            <a href="https://web.whatsapp.com/" className='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text" 
            name="name" 
            placeholder="Your full Name" 
            required
          />
          <input
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            onChange={(e) => validateEmail(e)}
          />
          { error && <span style={{
            fontWeight: 'bold',
            color: 'red',
          }}>{error}</span>}
          <textarea 
            name="message" 
            row="7" 
            placeholder="Your Message" 
            required
          />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
