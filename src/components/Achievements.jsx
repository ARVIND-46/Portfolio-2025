import React from 'react';
import { achievementsData } from '../data/portfolioData';
import '../components/styles.css';

const Achievements = () => {
  return (
    <div className="achievements-container" id='Achievements'>
      <h2 className="achievements-title">My Achievements</h2>
      <div className="achievements-grid">
        {achievementsData.map((ach, index) => (
          <div key={index} className="achievement-card">
            <h3 className="achievement-title">{ach.title}</h3>
            <p className="achievement-description">{ach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
