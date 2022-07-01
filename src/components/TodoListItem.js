import React, { useState } from "react";
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
      <li
        style={{ backgroundColor: todo.color }}
        className="alert alert-warning"
      >
        <div className="todoContainer">
          <input
            className="inputTodo"
            type="text"
            id="editValue"
            checked={todo.complete}
            value={editableValue}
            name="editValue"
            onChange={(e) => setEditableValue(e.target.value)}
          />
          <button onClick={handleSave}> Save</button>
        </div>
      </li>
    );
  } else {
    return (
      <li
        style={{ backgroundColor: todo.color }}
        className="alert alert-warning"
      >
        <div className="todoContainer">
          <fieldset className="form-group">
            <label htmlFor={id} className="paper-check">
              <input
                className="todoCheckbox"
                type="checkbox"
                name="paperChecks"
                checked={todo.complete}
                id={id}
                value="option 1"
                onChange={() => switchComplete(id)}
              />
              <span>{todo.name}</span>
            </label>
          </fieldset>
          {/* <input
            type="checkbox"
            name="paperChecks"
            checked={todo.complete}
            id={id}
            onChange={() => switchComplete(id)}
          />
          <label htmlFor={id} className={todo.complete ? "active" : ""}>
            {todo.name}
          </label> */}
          <div className="buttons">
            <button className="btn-danger" onClick={() => deleteTodo(id)}>
              DEL
            </button>
            <button onClick={handleOnEdit}>EDIT</button>
          </div>
        </div>
      </li>
    );
  }
}
