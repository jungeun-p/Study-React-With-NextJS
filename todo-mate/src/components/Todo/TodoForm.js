import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ todoItem, setTodoItem, createTodoItem }) => {
  const [checkedMood, setCheckedMood] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoItem({ ...todoItem, [name]: value });
    console.log(value==="Soso");
    // 
  };

  return (
    <div className="todoFormContainer">
      <form className="todoForm" onSubmit={createTodoItem}>
        <div className="formInput todoMoodWrapper">
          <button
            className={`todoMood ${checkedMood}`}
            onClick={handleChange}
            type="button"
            name="mood"
            value="Soso"
          >
            🙂
          </button>
          <button
            className={`todoMood ${checkedMood}`}
            onClick={handleChange}
            type="button"
            name="mood"
            value="Happy"
          >
            🥰
          </button>
          <button
            className={`todoMood ${checkedMood}`}
            onClick={handleChange}
            type="button"
            name="mood"
            value="Bad"
          >😡</button>
          <button
            className={`todoMood ${checkedMood}`}
            onClick={handleChange}
            type="button"
            name="mood"
            value="Confuse"
          >😵‍💫</button>
          <button
            className={`todoMood ${checkedMood}`}
            onClick={handleChange}
            type="button"
            name="mood"
            value="Sad"
          >🥲</button>
          <button
            className={`todoMood ${checkedMood}`}
            onClick={handleChange}
            type="button"
            name="mood"
            value="Peaceful"
          >😌</button>
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
