import React, { useContext } from "react";
import DeleteButton from "../buttons/DeleteButton/DeleteButton";
import ModalButton from "../buttons/ModalButton/ModalButton";
import SwitchButton from "../buttons/SwitchButton/SwitchButton";
import { TodoContext } from "../../context/TodoContextProvider/TodoContextProvider";
import "./Footer.css";

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
        <ModalButton
          substitle="Wow . . ."
          text="All TODOs done!"
          subText="Congrats!"
        />
      ) : (
        <div className="form-group">
          <SwitchButton onclick={handleCheckAll} checked={allChecked} />
          <DeleteButton
            className="buttonDelete"
            id="delete"
            title="Delete"
            onClick={deleteCompletedTodo}
          />
        </div>
      )}
    </>
  );
}
