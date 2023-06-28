import React from 'react';

const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoPlay loop muted playsInline>
        <source src="src/assets/images/vexa.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
