import React from "react";

const Card = ({cover, title}) => {
  return (
    <div className="card">
      <img className="card_image" src={cover} alt="" />
      <h2 className="card_title">{title}</h2>
    </div>
  );
};

export default Card;
