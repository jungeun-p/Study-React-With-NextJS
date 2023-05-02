import React, { useCallback, useEffect, useState } from "react";
import requests from "../../api/request";
import axios from "../../api/axios";
import MoodFormation from "./MoodFormation";
import MoodSelect from "./MoodSelect";
import "./TodoForm.css";

const TodoForm = ({
  todoItem,
  setTodoItem,
  createTodoItem,
  fetchStatus,
  setFetchStatus,
}) => {
  const [mood, setMood] = useState([]);
  const [moodEdit, setMoodEdit] = useState(false);

  const fetchMoodData = async () => {
    const result = await axios.get(requests.fetchMood);
    const { items } = result.data;
    setMood(items);
  };
  
  useEffect(() => {
    fetchMoodData();
  }, [fetchStatus.success]);

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
      {moodEdit && (
        <MoodFormation
          mood={mood}
          fetchStatus={fetchStatus}
          setFetchStatus={setFetchStatus}
          setMoodEdit={setMoodEdit}
        />
      )}
      <form className="todoForm" onSubmit={createTodoItem}>
        <div className="formInput todoMoodWrapper">
          {mood.map((item) => (
            <MoodSelect
              key={item.id}
              checked={item.checked}
              name="mood"
              value={item.moodValue}
              emoji={item.moodEmoji}
              handleChange={handleChange}
            />
          ))}
          <div className="settingMood" onClick={() => setMoodEdit(!moodEdit)}>
            ⚙️
          </div>
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
