import React, { useState, useEffect } from 'react';
import caraosealImage from '../assets/caraouselImag';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (caraosealImage.length - 2)); 
    }, 3000); // 3 seconds delay
    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className="w-full max-w-[750px] mx-auto my-6"> 
      <h2 className="text-center text-xl font-bold mb-4">FEATURED EMPLOYERS</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}
        >
          {caraosealImage.map((logo, index) => (
            <div key={index} className="w-1/4 flex-shrink-0 px-1">
              <img src={logo.logo} alt={`Logo ${index + 1}`} className="w-full h-20 object-cover border-4 border-gray-500 rounded-lg p-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
