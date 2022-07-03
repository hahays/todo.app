import React from "react";
import "./ModalButton.css";

function ModalButton({ substitle, text, subText }) {
  return (
    <div className="row flex-spaces child-borders">
      <label className="paper-btn margin modalButton" htmlFor="modal-1">
        Open!
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-bg" htmlFor="modal-1"></label>
        <div className="modal-body">
          <label className="btn-close" htmlFor="modal-1">
            X
          </label>
          <h5 className="modal-subtitle">{substitle}</h5>
          <p className="modal-text"> {text}</p>
          <label htmlFor="modal-1">{subText}</label>
        </div>
      </div>
    </div>
  );
}

export default ModalButton;
