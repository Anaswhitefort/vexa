import React from 'react';
import vexa from '../assets/images/vexa.mp4'
const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoPlay loop muted playsInline>
        <source src="/assets/images/vexa.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
