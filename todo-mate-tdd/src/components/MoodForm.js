import React, { useState } from "react";

export const MoodForm = ({ setMoodData }) => {
  const [moodItem, setMoodItem] = useState({
    id: "",
    mood: "",
    contents: "",
  });

  const createMood = (e) => {
    e.preventDefault();
    let newMoodData = {
      id: Date.now(),
      mood: moodItem.mood,
      contents: moodItem.contents,
    };
    setMoodData((prev) => [...prev, newMoodData]);
    setMoodItem("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMoodItem({ ...moodItem, [name]: value });
  };

  return (
    <form data-testid="createMood" onSubmit={createMood}>
      <input
        type="text"
        name="mood"
        value={moodItem.mood || ""}
        placeholder="emoji"
        onChange={handleChange}
      />
      <input
        type="text"
        name="contents"
        value={moodItem.contents || ""}
        placeholder="contents"
        onChange={handleChange}
      />
      <button data-testid="createMoodButton" type="submit">
        Add
      </button>
    </form>
  );
};
