import React, { useState } from 'react';

interface Car {
  name: string;
  code: string;
  image: string;
}

interface CarouselProps {
  cars: Car[];
  onSelectCar: (car: Car) => void;
}

const Carousel: React.FC<CarouselProps> = ({ cars, onSelectCar }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cars.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cars.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSelect = () => {
    onSelectCar(cars[currentIndex]);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Prev</button>
      <div className="carousel-item" onClick={handleSelect}>
        <img src={cars[currentIndex].image} alt={cars[currentIndex].name} />
        <h3>{cars[currentIndex].name}</h3>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
