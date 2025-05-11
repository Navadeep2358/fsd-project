import { useState } from "react";
import "./Body1.css";

const accordionData = [
  { imgSrc: "1.avif"},
  { imgSrc: "2.avif"},
  { imgSrc: "3.avif"},
  { imgSrc: "4.avif"},
  { imgSrc: "5.avif"},
  { imgSrc: "6.avif"},
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="Body1">
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <img src={item.imgSrc} alt={item.name} className="accordion-img" />
         
        </div>
      ))}
    </div>
    </div>
  );
}
