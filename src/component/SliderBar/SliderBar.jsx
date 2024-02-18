import React, { useState, useEffect } from 'react';
import "./SliderBar.css"

export const SliderBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your images directly in the component
  const images = [
    'download.jpg',
    'download (1).jpg',
    'Grow.png',
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{
            display: index === currentIndex ? 'block' : 'none',
            width: '100%',
            height: 'auto'
          }}
        />
      ))}
      {/* Dot navigation */}
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}


