import React from 'react';
const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoPlay loop muted playsInline>
        <source src="https://cdn.shopify.com/videos/c/o/v/3caec39258da4ef6ab4808232d8e4779.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
