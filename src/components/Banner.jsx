import React from 'react';
import "../components/styles.css";
const Banner = () => {
  return (
    <>
    <section className="banner-container" id="Home">
      <div className="banner-text">
        <h1>Hi</h1>
        <h1>
          I'm <span className="highlight">Arvind</span>
        </h1>
        <h1>Web Designer | React Developer </h1>
        <button onClick={() => window.location.href = "#Contact"}>Contact</button>
      </div>
      
      <div className="banner-image">
        <img src="/assets/arviPro.jpg" alt="Arvind" />
      </div>
    </section>
    </>
  );
};

export default Banner;
