import React, { useState } from "react";
import MainButton from "../buttons/MainButton/MainButton";
import TodoCheckBox from "../TodoCheckBox/TodoCheckBox";

import "./TodoListItem.css";
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
        className="alert alert-warning "
      >
        <div className="todoContainer ">
          <fieldset className="form-group ">
            <input
              className="inputTodo "
              type="text"
              id="editValue"
              checked={todo.complete}
              value={editableValue}
              name="editValue"
              onChange={(e) => setEditableValue(e.target.value)}
            />
          </fieldset>
          <MainButton onClick={handleSave} text="Save" />
        </div>
      </li>
    );
  } else {
    return (
      <li
        style={{ backgroundColor: todo.color }}
        className="alert alert-warning card"
      >
        <div className="todoContainer">
          <fieldset className="form-group">
            <TodoCheckBox
              className="todoCheckbox"
              name="paperChecks"
              id={id}
              checked={todo.complete}
              onChange={() => switchComplete(id)}
              text={todo.name}
            />
          </fieldset>
          <div className="buttons">
            <MainButton
              className="btn-danger"
              onClick={() => deleteTodo(id)}
              text="DEL"
            />
            <MainButton onClick={handleOnEdit} text="Edit" />
          </div>
        </div>
      </li>
    );
  }
}
