import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin,FaInstagram } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb"
import "../components/styles.css" 

const Contact = () => {
  return (
    <>
    <div id="Contact" className="contact">
        <h2>Contact Me</h2>
        <div className='formContainer'>
        <form action="https://formsubmit.co/arvind31102003@gmail.com" method="POST">
          <input placeholder="Name*" required type="text" name="Name" />
          <input placeholder="Email*" required type="email" name="Email" />
          <input placeholder="Phone Number*" required type="tel" name="Phone" />
          <textarea name="Message" placeholder="Detail Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        </div>
        <div className="contact-icons">
        <a href="https://mail.google.com/mail/u/1/" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
        <a href="https://github.com/ARVIND-46" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/arvind-r-1b5227256/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com/_arvind._46/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>  
        <a href="/assets/Arvind_React_Resume.pdf" download={true}>
          <TbFileCv size={30} />
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact