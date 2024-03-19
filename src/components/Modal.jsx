import React, { useState } from "react";
import IconOpen from "../assets/row.svg";
import IconClose from "../assets/row2.svg";

export default function Modal({ title, content, isOpen, onToggle, className }) {
  return (
    <div className={`modal ${className}`}>
      <div className="modal_title">
        <h1 className="modal_title--name">{title}</h1>
        <img
            className="modal_title--icon"
          src={isOpen ? IconClose : IconOpen}
          alt="icon"
          onClick={onToggle}
        />
      </div>
      {isOpen && <div className="modal_text open">{content}</div>}
    </div>
  );
}
