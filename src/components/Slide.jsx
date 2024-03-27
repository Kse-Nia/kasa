import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Slide({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return (
      <div>
        <p>Aucune image à afficher</p>
      </div>
    );
  }

  return (
    <section className="slides-container">
      {length > 1 && (
        <>
          <FontAwesomeIcon
            className="slides-container__arrow slides-container__arrow--left"
            icon={faChevronLeft}
            onClick={previousSlide}
          />
          <FontAwesomeIcon
            className="slides-container__arrow slides-container__arrow--right"
            icon={faChevronRight}
            onClick={nextSlide}
          />
        </>
      )}
      {pictures.map(
        (picture, index) =>
          index === currentSlide && (
            <div   key={index} className="slides-container--bloc">
              <img
                src={picture}
                alt="house"
                className="slides-container__img"
              />
              {length > 1 && (
                <div>
                  <span className="slides-container__nbr">
                    {currentSlide + 1} / {length}
                  </span>
                </div>
              )}
              <div />
            </div>
          )
      )}
    </section>
  );
}
