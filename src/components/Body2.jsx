import React from 'react';
import './Body2.css';

function Body2() {
  return (
    <div className="body2-com">
      <h1 className="headingdub1">Clothing Crafted for Confidence</h1>
      <div className="carousel-container">
        <div className="carousel-track">
        <div className="carousel-track">
  {/* Original set */}
  <img loading="lazy" src="prof1.jpg" alt="Profile 1" />
  <img loading="lazy" src="prof2.jpg" alt="Profile 2" />
  <img loading="lazy" src="prof3.jpg" alt="Profile 3" />
  <img loading="lazy" src="prof4.jpg" alt="Profile 4" />
  <img loading="lazy" src="prof5.jpg" alt="Profile 5" />
  <img loading="lazy" src="prof6.jpg" alt="Profile 6" />

  {/* Duplicate set */}
  <img loading="lazy" src="prof1.jpg" alt="Profile 1 duplicate" />
  <img loading="lazy" src="prof2.jpg" alt="Profile 2 duplicate" />
  <img loading="lazy" src="prof3.jpg" alt="Profile 3 duplicate" />
  <img loading="lazy" src="prof4.jpg" alt="Profile 4 duplicate" />
  <img loading="lazy" src="prof5.jpg" alt="Profile 5 duplicate" />
  <img loading="lazy" src="prof6.jpg" alt="Profile 6 duplicate" />
</div>

        </div>
      </div>
    </div>
  );
}

export default Body2;
