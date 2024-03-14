import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const HouseRating = (props) => {
  const stars = [];
  const rating = props.props;

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