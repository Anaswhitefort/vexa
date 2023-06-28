import React from 'react';
import vexa from 'https://cdn.shopify.com/videos/c/o/v/acf94bca91254cecbe62f9f64e8383ba.mp4';
const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoPlay loop muted playsInline>
        <source src="https://cdn.shopify.com/videos/c/o/v/acf94bca91254cecbe62f9f64e8383ba.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
