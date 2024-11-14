import React from 'react';
import '../App.css'
const MovingDivs = () => {
  // Generate an array of 20 items for demo purposes
  const divs = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="overflow-hidden w-full h-24 mt-10 bg-gray-100">
      <div className="flex space-x-4 animate-scroll">
        {divs.map((div, index) => (
          <div
            key={index}
            className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded-lg"
          >
            {div}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingDivs;