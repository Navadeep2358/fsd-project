import React, { useEffect, useRef } from "react";
import "./Body.css";

const images = [
  "/scroll1.avif",
  "/scroll2.avif",
  "/scroll3.avif",
  "/scroll4.avif",
  "/scroll5.avif",
  "/scroll6.avif",
  "/scroll7.webp",
  "/scroll8.webp",
];

const Body = ({ showsignIn }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.firstElementChild;
        carouselRef.current.appendChild(firstChild); // Moves first image to the end
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div className="info">
          <h1 className="h1">ROWDY is where you find the best</h1>
        </div>
        <div className="dropping-texts">
          <div>Fashion</div>
          <div>Style</div>
          <div>Deals</div>
          <div>Energy</div>
        </div>
        <p className="text2">
          Dive into the wild world of Rowdy clothing and strut your stuff!
        </p>
        <button className="explore" onClick={showsignIn}>
          Explore Now..!
        </button>
      </div>

      <section className="carousel">
        <ol ref={carouselRef} className="viewport">
          {images.map((img, index) => (
            <li key={index} className="slide">
              <div
                className="snapper"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Body;
