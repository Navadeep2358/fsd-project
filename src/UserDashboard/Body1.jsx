import React, { useEffect, useRef } from 'react';
import './Body1.css';

const images = [
    "/scrollbar1.png",
    "/scrollbar2.png",
    "/scrollbar3.png",
    "/scrollbar4.png",
    "/scrollbar5.png",
];

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const slideWidth = container.offsetWidth;
        container.scrollLeft += slideWidth;

        if (container.scrollLeft >= container.scrollWidth - slideWidth) {
          container.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container" ref={carouselRef}>
        {images.map((src, idx) => (
          <div className="carousel-slide" key={idx}>
            <img src={src} alt={`slide-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
