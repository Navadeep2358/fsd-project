import React, { useRef } from 'react';
import './Body2.css'; // Changed to use the same CSS as the working version
import { useNavigate } from 'react-router-dom';

const menCategories = [
  { title: 'KURTHAS', img: 'ethnicwear-1.avif', path: 'kurthas' },
  { title: 'SHERWANI', img: 'ethnicwear-2.avif', path: 'sherwani' },
  { title: 'WAISTCOATS', img: 'ethnicwear-3.avif', path: 'waistcoats' },
  { title: 'TROUSERS', img: 'ethnicwear-4.avif', path: 'ethnictrousers' },
  { title: 'PYJAMAS', img: 'ethnicwear-5.avif', path: 'pyjamas' },
  { title: 'SALWARS', img: 'ethnicwear-6.avif', path: 'salwars' },
];

const womenCategories = [
  { title: 'PYJAMAS', img: 'nightwear-1.avif', path: 'nightpyjamas' },
  { title: 'NIGHT SUITS', img: 'nightwear-2.avif', path: 'nightsuits' },
  { title: 'SLEEPOVER TOPS', img: 'nightwear-3.avif', path: 'sleepovertops' },
  { title: 'BRAS', img: 'nightwear-4.avif', path: 'bras' },
  { title: 'SLEEPOVER SHORTS', img: 'nightwear-5.avif', path: 'sleepovershorts' },
  { title: 'BRIEFS', img: 'nightwear-6.avif', path: 'briefs' },
  { title: 'CAMISOLES', img: 'nightwear-7.avif', path: 'camisoles' },
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

function Body5() {
  return (
    <div>
      <ScrollableSection heading="MEN'S ETHNIC-WEAR" categories={menCategories} />
      <ScrollableSection heading="WOMEN'S NIGHT-WEAR" categories={womenCategories} />
    </div>
  );
}

export default Body5;
