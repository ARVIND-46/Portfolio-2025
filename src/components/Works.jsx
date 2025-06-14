import React, { useEffect, useRef } from 'react';
import '../components/styles.css';
const Works = () => {
  const dbVideoRef = useRef(null);
  const ecomVideoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handlePlayPause = (entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, options);

    if (dbVideoRef.current) observer.observe(dbVideoRef.current);
    if (ecomVideoRef.current) observer.observe(ecomVideoRef.current);

    return () => {
      if (dbVideoRef.current) observer.unobserve(dbVideoRef.current);
      if (ecomVideoRef.current) observer.unobserve(ecomVideoRef.current);
    };
  }, []);

  return (
    <div className="works-container">
      <h1 className="works-title">My Works</h1>
      <div className="video-wrapper">
        <div className="video-card">
          <video
            ref={dbVideoRef}
            src="https://res.cloudinary.com/dz5qiu2e1/video/upload/v1749886028/lfpbcuhztzkpo1yizpy8.mp4"
            controls
            muted
            className="video"
          />
          <p className="caption">Database Project Demo</p>
        </div>

        <div className="video-card">
          <video
            ref={ecomVideoRef}
            src="https://res.cloudinary.com/dz5qiu2e1/video/upload/v1749885875/sksrrpjlc7hzblehmtn9.mp4"
            controls
            muted
            className="video"
          />
          <p className="caption">E-commerce App Demo</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
