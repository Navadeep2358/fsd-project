import React, { useRef, useEffect } from 'react';
import './Body2.css';
import { useNavigate } from 'react-router-dom';

const menCategories = [
  { title: 'SHIRTS', img: 'topwear-1.avif', path: 'shirts' },
  { title: 'T-SHIRTS', img: 'topwear-2.avif', path: 'tshirts' },
  { title: 'JACKETS', img: 'topwear-3.avif', path: 'jackets' },
  { title: 'BLAZERS', img: 'topwear-4.avif', path: 'blazers' },
  { title: 'FORMAL SHIRTS', img: 'topwear-5.avif', path: 'formalshirts' },
  { title: 'SUITS', img: 'topwear-6.avif', path: 'suits' },
  { title: 'SWEAT SHIRTS', img: 'topwear-7.avif', path: 'sweatshirts' }
];

const womenCategories = [
  { title: 'KURTAS', img: 'westrenwear-1.avif', path: 'kurtas' },
  { title: 'DRESSES', img: 'westrenwear-2.avif', path: 'dresses' },
  { title: 'TOPS', img: 'westrenwear-3.avif', path: 'tops' },
  { title: 'SAREES', img: 'westrenwear-4.avif', path: 'sarees' },
  { title: 'JACKETS', img: 'westrenwear-5.avif', path: 'jackets1' },
  { title: 'JEANS', img: 'westrenwear-6.avif', path: 'jeans' },
  { title: 'T-SHIRT', img: 'westrenwear-7.avif', path: 'tshirt1' },
  { title: 'TROUSERS', img: 'westrenwear-8.avif', path: 'trousers' },
  { title: 'SHIRTS', img: 'westrenwear-9.avif', path: 'shirts1' },
  { title: 'SWEATERS', img: 'westrenwear-10.avif', path: 'sweaters' },
  { title: 'COATS', img: 'westrenwear-11.avif', path: 'coats' },
  { title: 'BLAZERS', img: 'westrenwear-12.avif', path: 'blazers' },
  { title: 'SKIRTS', img: 'westrenwear-13.avif', path: 'skirts' }
];

function ScrollableSection({ heading, categories }) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="category-slider-container">
      <h2 className="category-slider-heading">{heading}</h2>
      <div className="slider-wrapper">
        <button className="nav-button left" onClick={() => scroll(-300)}>&#8249;</button>
        <div className="category-slider" ref={scrollRef}>
          {categories.map((cat, index) => (
            <div
              className="category-slide"
              key={index}
              onClick={() => navigate(`/dashboard/products/${cat.path}`)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={cat.img || 'defaultImage.avif'}
                alt={cat.title}
                className="category-slide-image"
              />
              <div className="category-slide-title">{cat.title}</div>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={() => scroll(300)}>&#8250;</button>
      </div>
    </div>
  );
}

function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="video-section">
      <video
        ref={videoRef}
        src="infiloop1.mp4"
        muted
        loop
        playsInline
        controls={false}
        className="promo-video"
      />
    </div>
  );
}

function CategorySlider() {
  return (
    <div>
      <ScrollableSection heading="MEN'S TOP-WEAR" categories={menCategories} />
      <ScrollableSection heading="WOMEN'S WESTREN-WEAR" categories={womenCategories} />
      <VideoSection />
    </div>
  );
}

export default CategorySlider;
