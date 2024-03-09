import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // cand client-ul ii da submit inseamna ca a terminat de scris task-ul
    e.preventDefault();

    //acum ar trebui sa adaugam acest task in parent
    // console.log(value);
    addTodo(value);

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
        Add
      </button>
    </form>
  );
};
