import React from 'react';
import '../components/styles.css'

const achievements = [
  {
    title: "Top 50 – National Level Hackathon",
    description: "Hack the Horizon – 24-Hour Hackathon! Achieved a Top 50 spot in a high-stakes national-level event."
  },
  {
    title: "Top 10 – PAN India Web Scraping Challenge",
    description: "Secured a top 10 rank in an all-India level web scraping competition, demonstrating strong data extraction skills."
  },
  {
    title: "1st Place – Fullstack Fest Hackathon",
    description: "Won 1st place at SA Engineering College's Fullstack Fest Hackathon by building a complete web app in 24 hours, showcasing full-stack skills and teamwork."
  }
];

const Achievements = () => {
  return (
    <div className="achievements-container" id='Achievements'>
      <h1 className="achievements-title">My Achievements</h1>
      <div className="achievements-grid">
        {achievements.map((ach, index) => (
          <div key={index} className="achievement-card">
            <h2 className="achievement-title">{ach.title}</h2>
            <p className="achievement-description">{ach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
