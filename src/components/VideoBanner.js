import React from 'react';

const VideoBanner = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <div className="video-banner">
        <video autoPlay loop muted playsInline>
          <source src="https://cdn.shopify.com/videos/c/o/v/7f7a08e0871b4d0d89bf41a032ce4702.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="video-banner">
      <video autoPlay loop muted playsInline>
        <source src="https://cdn.shopify.com/videos/c/o/v/3caec39258da4ef6ab4808232d8e4779.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
