import React, { useState } from "react";
import IconOpen from "../assets/row.svg";
import IconClose from "../assets/row2.svg";

// new icons
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ title, content, isOpen, onToggle, className }) {
  const [clicked, setClicked] = useState(false);
 // const [closed, setClosed] = useState(false);

  return (
    <div className={`modal ${className}`}>
      <div className="modal_title">
        <h1 className="modal_title--name">{title}</h1>
        <FontAwesomeIcon
          className={`modal_title--icon ${clicked ? "rotation" : ""}`}
          icon={faChevronUp}
          onClick={()=> {
            onToggle();
            setClicked(!clicked);
          }}
        />
      </div>
      {isOpen && <div className={`modal_text ${isOpen ? "open" : "close"}`}>{content}</div>}
    </div>
  );
}
