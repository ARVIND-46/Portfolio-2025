import React from 'react';
import '../components/styles.css'

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects. Built using React and styled with custom CSS.",
      link: "https://github.com/ARVIND-46/portfolio-R-.git"
    },
    {
      title: "Task Tracker App",
      description: "A task management app built with Django and SQLite. Users can track their daily to-dos.",
      link: "https://github.com/ARVIND-46/TaskTrackerPyAssignment.git"
    },
    {
      title: "Skill Box",
      description: "A front-end web app for learning platform",
      link: "https://cod-tech-task2-e-learning.vercel.app/"
    },
    {
      title: "Landing Page",
      description: "This is a modern and responsive landing page designed for a fitness center or gym. Built with a focus on user experience and visual appeal. It includes clear bold visuals, and structured content to drive user engagement and conversions.",
      link: "https://codsoft-landingpage-ochre.vercel.app/"
    },
    {
      title: "Quiz App",
      description: "A simple quiz application built with React. Users can take quizzes and see their scores.",
      link: "https://codtech-task1-quiz-application.vercel.app/"
    },
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce application built with Django and React. Users can browse products, add to cart, and checkout.",
      link: "https://github.com/ARVIND-46/CODEC_EcommerceApplication.git"
    },
    {
      title:"Chat Application",
      description:"A real-time chat application UI built with React and tailwind css.(frontend only) and a simple chat bot username - admin && pwd - admin@123 .",
      link:"https://codtech-task3-chat-application.vercel.app/",

    },
    {
     title: "Ship Booking App",
     description: "A mobile application built with React Native and Firebase for booking ship tickets. It includes authentication, booking form, e-ticket generation with QR code, and Firestore integration for real-time data storage.",
     link: "https://drive.google.com/file/d/1auZlyzlOJ6dXvRH2ImM4UfC845R5K6ly/view?usp=drive_link", 
    }
  ];

  return (
    <div id="Project" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
