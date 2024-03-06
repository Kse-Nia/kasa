import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card_image" src={props.cover} alt="" />
      <h2 className="card_title">{props.title}</h2>
    </div>
  );
};

export default Card;
