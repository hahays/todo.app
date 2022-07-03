import React from "react";
import "./MainButton.css";

function AddButton({ className, type, onClick, text }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default AddButton;
