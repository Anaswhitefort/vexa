import React from 'react';
const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoPlay loop muted playsInline>
        <source src="https://cdn.shopify.com/videos/c/o/v/a8d5b182b62f4505974c436c2efa37f6.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
