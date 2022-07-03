import React from "react";

import "./TodoCheckBox.css";

function TodoCheckBox({ className, name, checked, id, onChange, text }) {
  return (
    <label htmlFor={id} className="paper-check">
      <input
        className={className}
        type="checkbox"
        name={name}
        checked={checked}
        id={id}
        value="option 1"
        onChange={onChange}
      />
      <span className="todoText">{text}</span>
    </label>
  );
}

export default TodoCheckBox;
