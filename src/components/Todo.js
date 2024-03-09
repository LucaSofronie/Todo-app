import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todo, completeTodo, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => completeTodo(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon
          className="fa-trash"
          icon={faTrash}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};
