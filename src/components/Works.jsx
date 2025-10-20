import React, { useEffect, useRef } from 'react';

// It's good practice to have your styles in a separate file,
// but for this self-contained example, I'll include them here.
// You can move these styles to your existing styles.css file.
const styles = `
.works-container {
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px;
  background-color: #f9fafb; /* Light gray background */
  color: #111827; /* Dark text for contrast */
  font-family: sans-serif;
  text-align: center;
}

.works-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4338ca; /* A darker, more vibrant indigo */
  margin-bottom: 50px;
}

/* Wrapper for all the video content */
.works-grid {
    max-width: 1200px;
    margin: 0 auto;
}

/* A row to hold a set of videos */
.video-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.video-card {
  background-color: #ffffff; /* White card background */
  border: 1px solid #e5e7eb; /* A light border for definition */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  flex-grow: 1;
  max-width: 500px; /* Max width for web project videos */
}

.video-card:hover {
    transform: translateY(-5px);
}

/* Special styling for the mobile project to make it narrower */
.video-card.mobile {
    max-width: 300px; /* Narrower for a phone-like appearance */
    flex-grow: 0; /* Don't let it grow to fill space */
}


.video {
  width: 100%;
  height: auto;
  display: block;
}

.caption {
  padding: 1rem;
  font-size: 1rem;
  color: #374151; /* Dark gray text */
}
`;


const Works = () => {
  // Create a unique ref for each video element
  const dbVideoRef = useRef(null);
  const ecomVideoRef = useRef(null);
  const shipTicketVideoRef = useRef(null);

  useEffect(() => {
    // Add the styles to the document head
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

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
       document.head.removeChild(styleSheet);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="works-container">
      <h1 className="works-title">My Works</h1>
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
