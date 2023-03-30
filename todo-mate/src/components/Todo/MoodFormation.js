import React, { useState } from "react";
import { dataLocalStorage } from "../../assets/data";
import "./MoodFormation.css";

const MoodFormation = ({ mood, setMood }) => {
  const [newMood, setNewMood] = useState({
    moodEmoji: "",
    moodValue: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMood({ ...newMood, [name]: value });
  };

  const createMood = (e) => {
    e.preventDefault();
    let newMoodItem = {
      id: createMoodId(),
      moodEmoji: newMood.moodEmoji,
      moodValue: newMood.moodValue,
      checked: false,
    };
    setMood((prev) => [...prev, newMoodItem]);
    dataLocalStorage("moodData", [...mood, newMoodItem]);
    setNewMood("");
  };

  const createMoodId = () => {
    const id = mood.map((item) => item.id);
    const maxId = Math.max(...id);
    return maxId + 1;
  };
  return (
    <div className="moodFormationContainer">
      <form className="moodForm" onSubmit={createMood}>
        <input
          // className="formInput"
          type="text"
          name="moodEmoji"
          value={newMood.moodEmoji || ""}
          placeholder="emoji"
          onChange={handleChange}
        />
        <input
          // className="formInput"
          type="text"
          name="moodValue"
          value={newMood.moodValue || ""}
          placeholder="name"
          onChange={handleChange}
        />
        <input type="submit" value="✅"></input>
      </form>
    </div>
  );
};

export default MoodFormation;
