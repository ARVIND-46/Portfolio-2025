import React, { useEffect, useRef } from 'react';
import '../components/styles.css';

const Works = () => {
  // Create a unique ref for each video element
  const dbVideoRef = useRef(null);
  const ecomVideoRef = useRef(null);
  const shipTicketVideoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // observes intersections relative to the viewport
      rootMargin: '0px',
      threshold: 0.5 // Triggers when 50% of the video is visible
    };

    const handlePlayPause = (entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          // Use a promise to avoid errors if play() is interrupted
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              // Autoplay was prevented.
              console.log("Video play failed:", error);
            });
          }
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, options);

    // An array of refs makes the code cleaner and easier to scale
    const videoRefs = [dbVideoRef, ecomVideoRef, shipTicketVideoRef];

    // Observe each video
    videoRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup function to unobserve when the component unmounts
    return () => {
      videoRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="works-container">
      <h2 className="works-title">My Works</h2>
      <div className="works-grid">
        {/* First row for the first two videos */}
        <div className="video-row">
          <div className="video-card">
            <video
              ref={dbVideoRef}
              src="https://res.cloudinary.com/dz5qiu2e1/video/upload/v1749886028/lfpbcuhztzkpo1yizpy8.mp4"
              controls
              muted
              loop
              playsInline
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
              loop
              playsInline
              className="video"
            />
            <p className="caption">E-commerce App Demo</p>
          </div>
        </div>

        {/* Second row for the third video, centered */}
        <div className="video-row">
           <div className="video-card mobile">
            <video
              ref={shipTicketVideoRef}
              src="https://res.cloudinary.com/dz5qiu2e1/video/upload/v1760965165/demo_vedio_phzeif.mp4"
              controls
              muted
              loop
              playsInline
              className="video"
            />
            <p className="caption">ShipTicketReservation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
