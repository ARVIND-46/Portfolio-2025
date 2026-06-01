import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";
import "../components/styles.css";

const Contact = () => {
  const [status, setStatus] = useState(""); // "", "PENDING", "SUCCESS", "ERROR"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("PENDING");
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/arvind31102003@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus("SUCCESS");
        e.target.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <>
    <div id="Contact" className="contact">
        <h2>Contact Me</h2>
        <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <input placeholder="Name*" required type="text" name="Name" />
          <input placeholder="Email*" required type="email" name="Email" />
          <input placeholder="Phone Number*" required type="tel" name="Phone" />
          <textarea name="Message" placeholder="Detail Message" required></textarea>
          <button type="submit" disabled={status === "PENDING"}>
            {status === "PENDING" ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status === "SUCCESS" && (
          <div className="form-status success">
            Thanks! Your message has been sent successfully.
          </div>
        )}
        {status === "ERROR" && (
          <div className="form-status error">
            Oops! There was a problem submitting your message. Please try again.
          </div>
        )}
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
  );
};

export default Contact;