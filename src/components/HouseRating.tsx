import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

interface HouseRatingProps {
  rating: number;
}

const HouseRating: FC<HouseRatingProps> = ({ rating }) => {
  const stars: JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={solidStar}
        className={i <= rating ? "house_rating-on" : "house_rating-off"}
      />
    );
  }

  return <div className="house_rating">{stars}</div>;
};

export default HouseRating;
