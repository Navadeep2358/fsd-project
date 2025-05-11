import React, { useEffect, useRef } from 'react';
import './Body3.css';
import { useNavigate } from 'react-router-dom';

const deals = [
  {
    img: 'prof1.jpg',
    discount: '54% OFF',
    brand: 'ZINK LONDON',
    title: 'Red Embellished Above Knee Fit Dress',
    price: '₹ 1287',
    originalPrice: '₹ 2799'
  },
  {
    img: 'prof3.jpg',
    discount: '58% OFF',
    brand: 'ZINK LONDON',
    title: 'Black Self Design Casual Half Sleeve Top',
    price: '₹ 797',
    originalPrice: '₹ 1899'
  },
  {
    img: 'prof3.jpg',
    discount: '63% OFF',
    brand: 'ZINK LONDON',
    title: 'Light Green Solid Casual Three-Fourth Sleeve Shirt',
    price: '₹ 591',
    originalPrice: '₹ 1599'
  },
  {
    img: 'prof4.jpg',
    discount: '54% OFF',
    brand: 'ZINK LONDON',
    title: 'Navy Solid Ankle Length Formal Set',
    price: '₹ 1287',
    originalPrice: '₹ 2799'
  },
  {
    img: 'prof5.jpg',
    discount: '66% OFF',
    brand: 'ZINK LONDON',
    title: 'White Printed Knee Length Casual Dress',
    price: '₹ 985',
    originalPrice: '₹ 2899'
  },
  {
    img: 'prof1.jpg',
    discount: '54% OFF',
    brand: 'ZINK LONDON',
    title: 'Red Embellished Above Knee Fit Dress',
    price: '₹ 1287',
    originalPrice: '₹ 2799'
  },
  {
    img: 'prof3.jpg',
    discount: '58% OFF',
    brand: 'ZINK LONDON',
    title: 'Black Self Design Casual Half Sleeve Top',
    price: '₹ 797',
    originalPrice: '₹ 1899'
  },
  {
    img: 'prof3.jpg',
    discount: '63% OFF',
    brand: 'ZINK LONDON',
    title: 'Light Green Solid Casual Three-Fourth Sleeve Shirt',
    price: '₹ 591',
    originalPrice: '₹ 1599'
  },
  {
    img: 'prof4.jpg',
    discount: '54% OFF',
    brand: 'ZINK LONDON',
    title: 'Navy Solid Ankle Length Formal Set',
    price: '₹ 1287',
    originalPrice: '₹ 2799'
  },
  {
    img: 'prof5.jpg',
    discount: '66% OFF',
    brand: 'ZINK LONDON',
    title: 'White Printed Knee Length Casual Dress',
    price: '₹ 985',
    originalPrice: '₹ 2899'
  },
  {
    img: 'prof1.jpg',
    discount: '54% OFF',
    brand: 'ZINK LONDON',
    title: 'Red Embellished Above Knee Fit Dress',
    price: '₹ 1287',
    originalPrice: '₹ 2799'
  },
  {
    img: 'prof3.jpg',
    discount: '58% OFF',
    brand: 'ZINK LONDON',
    title: 'Black Self Design Casual Half Sleeve Top',
    price: '₹ 797',
    originalPrice: '₹ 1899'
  },
  {
    img: 'prof3.jpg',
    discount: '63% OFF',
    brand: 'ZINK LONDON',
    title: 'Light Green Solid Casual Three-Fourth Sleeve Shirt',
    price: '₹ 591',
    originalPrice: '₹ 1599'
  },
  {
    img: 'prof4.jpg',
    discount: '54% OFF',
    brand: 'ZINK LONDON',
    title: 'Navy Solid Ankle Length Formal Set',
    price: '₹ 1287',
    originalPrice: '₹ 2799'
  },
  {
    img: 'prof5.jpg',
    discount: '66% OFF',
    brand: 'ZINK LONDON',
    title: 'White Printed Knee Length Casual Dress',
    price: '₹ 985',
    originalPrice: '₹ 2899'
  },
];

function DealsSection() {
  const scrollRef = useRef();

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollLeft += 250;
      if (
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
        scrollRef.current.scrollWidth
      ) {
        scrollRef.current.scrollLeft = 0;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="deals-section">
      <h2 className="deals-heading">Deals of the Day</h2>
      <div className="deals-scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scroll(-250)}>
          &#8249;
        </button>
        <div className="deals-container" ref={scrollRef}>
          {deals.map((item, index) => (
            <div className="deal-card" key={index}>
              <div className="image-container">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="discount-badge">{item.discount}</div>
              <div className="brand">{item.brand}</div>
              <div className="title">{item.title}</div>
              <div className="price">
                <span className="current-price">{item.price}</span>
                <span className="original-price">{item.originalPrice}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll(250)}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default DealsSection;
