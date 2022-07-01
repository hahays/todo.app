import React, { useContext } from "react";
import { TodoContext } from "./TodoContextProvider";

export default function Footer() {
  const { todos, setTodos, deleteCompletedTodo } = useContext(TodoContext);

  const allChecked = todos.every((todo) => todo.complete);
  const handleCheckAll = () => {
    const newTodos = [...todos];

    newTodos.forEach((todo) => {
      todo.complete = !allChecked;
    });
    setTodos(newTodos);
  };

  return (
    <>
      {todos.length === 0 ? (
        <div className="row flex-spaces child-borders">
          <label className="paper-btn margin" htmlFor="modal-1">
            Open!
          </label>
          <input className="modal-state" id="modal-1" type="checkbox" />
          <div className="modal">
            <label className="modal-bg" htmlFor="modal-1"></label>
            <div className="modal-body">
              <label className="btn-close" htmlFor="modal-1">
                X
              </label>
              <h4 className="modal-title">Modal Title</h4>
              <h5 className="modal-subtitle">Modal Subtitle</h5>
              <p className="modal-text"> All to do dones!</p>
              <label htmlFor="modal-1"> Gongraz!</label>
            </div>
          </div>
        </div>
      ) : (
        <fieldset className="form-group">
          <label htmlFor="paperSwitch2" className="paper-switch-tile">
            <input
              type="checkbox"
              name="paperSwitch2"
              id="paperSwitch2"
              onClick={handleCheckAll}
              checked={allChecked}
            />
            <div class="paper-switch-tile-card border">
              <div class="paper-switch-tile-card-front border background-warning">
                Выбрать
              </div>
              <div class="paper-switch-tile-card-back border background-secondary">
                Убрать
              </div>
            </div>
          </label>
          <button
            className="buttonDelete"
            id="delete"
            onClick={deleteCompletedTodo}
          >
            DELETE
          </button>
        </fieldset>
      )}
    </>
  );
}
