import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ todoItem, setTodoItem, createTodoItem }) => {
  const [checkedMood, setCheckedMood] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoItem({ ...todoItem, [name]: value });
  };

  return (
    <div className="todoFormContainer">
      <form className="todoForm" onSubmit={createTodoItem}>
        <div className="formInput todoMoodWrapper">
          <input
            className={`todoMood ${checkedMood}`}
            onClick={handleChange}
            type="button"
            name="mood"
            value="🙂"
          />
          <input
            className={`todoMood ${checkedMood}`}
            onClick={handleChange}
            type="button"
            name="mood"
            value="🥰"
          />
          <input
            className="todoMood"
            onClick={handleChange}
            type="button"
            name="mood"
            value="☹️"
          />
          <input
            className="todoMood"
            onClick={handleChange}
            type="button"
            name="mood"
            value="😵‍💫"
          />
          <input
            className="todoMood"
            onClick={handleChange}
            type="button"
            name="mood"
            value="🥲"
          />
        </div>
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
