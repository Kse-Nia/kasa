import React, { useState, useEffect } from "react";

// new icons
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ title, content, isOpen, onToggle, className, id }) {
  const [iconDirection, setIconDirection] = useState("up");

  useEffect(() => {
    setIconDirection(isOpen ? "down" : "up");
  }, [isOpen]);

  return (
    <div className={`modal ${className}`} >
      <div className="modal_title" id={id}>
        <h1 className="modal_title--name">{title}</h1>
        <FontAwesomeIcon
          className={`modal_title--icon rotate-${iconDirection}`}
          icon={faChevronUp}
          onClick={onToggle}
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
