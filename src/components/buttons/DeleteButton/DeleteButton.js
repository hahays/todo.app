import React from "react";
import "./DeleteButton.css";

function DeleteButton({ className, id, onClick, title }) {
  return (
    <div className="buttonDeleteWrapper">
      <button className={className} id={id} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default DeleteButton;
