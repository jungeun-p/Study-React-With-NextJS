import axios from "../../api/axios";
import React, { useState } from "react";
import "./MoodFormation.css";
import requests from "../../api/request";

const MoodFormation = ({ mood, fetchStatus, setFetchStatus, setMoodEdit }) => {
  const [newMood, setNewMood] = useState({
    moodEmoji: "",
    moodValue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMood({ ...newMood, [name]: value });
  };

  const createMood = async (e) => {
    e.preventDefault();
    const newMoodItem = {
      moodId: createMoodId(),
      moodValue: newMood.moodValue,
      moodEmoji: newMood.moodEmoji,
      checked: false,
    };
    console.log(newMoodItem);
    const result = await axios.post(requests.fetchMood, newMoodItem);
    // setMood((prev) => [...prev, newMoodItem]);
    // dataLocalStorage("moodData", [...mood, newMoodItem]);
    setNewMood("");
    setMoodEdit(false);
    setFetchStatus({ ...fetchStatus, success: result.status });
  };

  const createMoodId = () => {
    const id = mood.map((item) => item.moodId);
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
