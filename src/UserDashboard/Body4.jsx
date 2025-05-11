import React, { useRef, useEffect } from 'react';
import './Body2.css'; // Use the same CSS as the working version
import { useNavigate } from 'react-router-dom';

const menCategories = [
  { title: 'JEANS', img: 'bottomwear-1.avif', path: 'jeans1' },
  { title: 'SHORTS', img: 'bottomwear-2.avif', path: 'shorts1' },
  { title: 'JOGGERS', img: 'bottomwear-3.avif', path: 'joggers' },
  { title: 'TROUSERS', img: 'bottomwear-4.avif', path: 'trousers' },
  { title: 'TRACK PANTS', img: 'bottomwear-5.avif', path: 'trackpants' },
  { title: 'UNDERWEARS', img: 'bottomwear-6.avif', path: 'underwears' },
];

const womenCategories = [
  { title: 'KURTAS SETS', img: 'desiwear-1.avif', path: 'kurtasets' },
  { title: 'ETHNIC DRESSES', img: 'desiwear-2.avif', path: 'ethnicdresses' },
  { title: 'TUNICS', img: 'desiwear-3.avif', path: 'tunics' },
  { title: 'PALAZZOS PANTS', img: 'desiwear-4.avif', path: 'palazzospants' },
  { title: 'DUPATTAS', img: 'desiwear-5.avif', path: 'dupattas' },
  { title: 'LEGGINGS', img: 'desiwear-6.avif', path: 'leggings' },
  { title: 'CHUDIDHARS', img: 'desiwear-7.avif', path: 'chudidhars' },
  { title: 'SALWARS', img: 'desiwear-8.avif', path: 'salwars' },
  { title: 'LEHANGAS', img: 'desiwear-9.avif', path: 'lehangas' }
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

function Body4() {
  return (
    <div>
      {/* Men Category */}
      <ScrollableSection heading="MEN'S TOP-WEAR" categories={menCategories} />
      {/* Women Category */}
      <ScrollableSection heading="WOMEN'S WESTERN-WEAR" categories={womenCategories} />
    </div>
  );
}

export default Body4;