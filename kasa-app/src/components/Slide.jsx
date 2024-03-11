import React, { useState } from "react";

export default function Slide({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrentSlide(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrentSlide(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <secttion className="slides_container">
      <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-left" />
      <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-right" />
      {pictures.map((picture, index) => {
        {
          index === currentSlide && (
            <img src="" alt="house image" className="slides_container-img" />
          );
        }
      })}
    </secttion>
  );
}
