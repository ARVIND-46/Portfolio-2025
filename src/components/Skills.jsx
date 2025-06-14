import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaPython  } from 'react-icons/fa';

import "../components/styles.css" 

const Skills = () => {
  return (
    <>
      <div id="Skills" className="skills">
        <div className='head'>
          <h2>Skills</h2>
        </div>
        <p>Here are some of the skills I've acquired:</p>

        <div className="skills-grid">
          <div className="skill-card">
            <FaHtml5 size={50} />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <FaCss3Alt size={50} />
            <p>CSS3</p>
          </div>
          <div className="skill-card">
            <FaJs size={50} />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <FaReact size={50} />
            <p>React</p>
          </div>
          <div className="skill-card">
            <FaPython size={50} />
            <p>Python</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
