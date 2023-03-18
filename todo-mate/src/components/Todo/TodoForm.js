import React from "react";
import './TodoForm.css';

const TodoForm = ({ todoItem, setTodoItem, createTodoItem }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoItem({ ...todoItem, [name]: value });
  };
  return (
    <div className="todoFormContainer">
      <form className="todoForm" onSubmit={createTodoItem}>
        <input
          className="formInput"
          type="text"
          name="title"
          value={todoItem.title || ""}
          placeholder="title"
          onChange={handleChange}
        />
        <input
          className="formInput"
          type="text"
          name="contents"
          value={todoItem.contents || ""}
          placeholder="contents"
          onChange={handleChange}
        />
        <input className="formButton" type="submit" value="✅" />
      </form>
    </div>
  );
};

export default TodoForm;
