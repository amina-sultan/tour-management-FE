import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'https://cdn.pixabay.com/photo/2024/06/06/20/33/bird-8813401_640.jpg',
  'https://cdn.pixabay.com/photo/2017/02/12/18/26/squirrel-2060807_640.jpg',
  'https://media.istockphoto.com/id/1082411378/photo/magical-fairytale-forest.jpg?s=612x612&w=0&k=20&c=3iw53YdeeFEqRuxcUL0UCQZUMJ3e2IRtUfvgSjAysjQ='
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ImageSlider">
      <img
        src={images[currentIndex]}
        alt="slideshow"
      />
    </div>
  );
};

export default ImageSlider;
