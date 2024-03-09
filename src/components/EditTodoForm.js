import React, { useState } from "react";

export const EditTodoForm = ({ todo, editTodo }) => {
  const [value, setValue] = useState(todo.task);

  const handleSubmit = (e) => {
    // cand client-ul ii da submit inseamna ca a terminat de scris task-ul
    e.preventDefault();

    //acum ar trebui sa modificam acest task in parent
    editTodo(todo.id, value);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="What do you want to do today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // ii dau update la value-ul input-ului de fiecare data cand el se schimba
      />
      <button className="todo-btn" type="submit">
        Update
      </button>
    </form>
  );
};
