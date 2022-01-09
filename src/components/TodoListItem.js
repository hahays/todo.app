import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
export default function TodoListItem({
  todo,
  id,
  switchComplete,
  handleEditTodos,
  deleteTodo,
}) {
  const [editActive, setEditActive] = useState(false);
  const [editableValue, setEditableValue] = useState(todo.name);

  const handleOnEdit = () => {
    setEditActive(true);
  };

  const handleSave = () => {
    setEditActive(false);
    if (editableValue) {
      handleEditTodos(editableValue, id);
    } else {
      setEditableValue(todo.name);
    }
  };

  if (editActive) {
    return (
      <li>
        <input
          type="text"
          id="editValue"
          value={editableValue}
          name="editValue"
          onChange={(e) => setEditableValue(e.target.value)}
        />
        <button onClick={handleSave}> Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => switchComplete(id)}
          />
          {todo.name}
        </label>
        <div className="icons">
          <CgCloseO onClick={() => deleteTodo(id)} className="delete-icon" />
        </div>
        <button onClick={handleOnEdit}>Edit</button>
      </li>
    );
  }
}
