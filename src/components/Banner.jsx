import React from 'react';
import "../components/styles.css";

const Banner = () => {
  return (
    <section className="banner-container" id="Home">
      <div className="banner-text">
        <h1 className="banner-title">
          <span className="greeting">Hi, I'm</span>
          <span className="name highlight"> Arvind</span>
        </h1>
        <p className="subtitle">Web Designer | React Developer</p>
        <button className="cta-button" onClick={() => window.location.href = "#Contact"}>
          Contact Me
        </button>
      </div>
      
      <div className="banner-image">
        <img src="/assets/arviPro.jpg" alt="Arvind" />
      </div>
    </section>
  );
};

export default Banner;
