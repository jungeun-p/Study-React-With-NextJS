import React, { useState } from "react";
import { initialMoodData } from "../../assets/data";
import MoodSelect from "./MoodSelect";
import "./TodoForm.css";

const TodoForm = ({ todoItem, setTodoItem, createTodoItem }) => {
  const [mood, setMood] = useState(initialMoodData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoItem({ ...todoItem, [name]: value });
    if (name === "mood") {
      // checkedMood
      const newMoodData = mood.map((item) => {
        item.moodValue === value
          ? (item.checked = true)
          : (item.checked = false);
        return item;
      });
      setMood(newMoodData);
    }
  };

  return (
    <div className="todoFormContainer">
      <form className="todoForm" onSubmit={createTodoItem}>
        <div className="formInput todoMoodWrapper">
          {mood.map((item) => (
            <MoodSelect
              key={item.id}
              checked={item.checked}
              value={item.moodValue}
              emoji={item.moodEmoji}
              handleChange={handleChange}
            />
          ))}
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
        <input className="formButton" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default React.memo(TodoForm);
