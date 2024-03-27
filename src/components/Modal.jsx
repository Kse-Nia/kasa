import React, { useState } from "react";

// new icons
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ title, content, isOpen, onToggle, className }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [iconDirection, setIconDirection] = useState("up");

  const handleClick = () => {
    setIsAnimating(true);
    onToggle();
    setIconDirection(isOpen ? "down" : "up");
  };

  return (
    <div className={`modal ${className}`}>
      <div className="modal_title">
        <h1 className="modal_title--name">{title}</h1>
        <FontAwesomeIcon
          className={`modal_title--icon ${
            isAnimating ? `rotate-${iconDirection}` : ""
          }`}
          icon={iconDirection === "up" ? faChevronUp : faChevronDown} // Choose icon based on direction
          onClick={handleClick}
        />
      </div>
      {isOpen && (
        <div className={`modal_text ${isOpen ? "open" : "close"}`}>
          {content}
        </div>
      )}
    </div>
  );
}
