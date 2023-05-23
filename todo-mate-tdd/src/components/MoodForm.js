import React, { useState } from "react";
import styled from "styled-components";

export const MoodForm = ({ setMoodData, setForm }) => {
  const [moodItem, setMoodItem] = useState({
    id: "",
    mood: "",
    content: "",
  });

  const createMood = (e) => {
    e.preventDefault();
    let newMoodData = {
      id: Date.now(),
      mood: moodItem.mood,
      content: moodItem.content,
    };
    setMoodData((prev) => [...prev, newMoodData]);
    setMoodItem("");
    setForm(false)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMoodItem({ ...moodItem, [name]: value });
  };

  return (
    <CreateMoodForm data-testid="createMood" onSubmit={createMood}>
      <MoodFormInput
        type="text"
        name="mood"
        value={moodItem.mood || ""}
        placeholder="emoji"
        onChange={handleChange}
      />
      <MoodFormInput
        type="text"
        name="content"
        value={moodItem.content || ""}
        placeholder="content"
        onChange={handleChange}
      />
      <CreateMoodButton data-testid="createMoodButton" type="submit">
        Add
      </CreateMoodButton>
    </CreateMoodForm>
  );
};

const CreateMoodForm = styled.form`
  background-color: lightgray;
  position: fixed;
  bottom: 0;
  height: 40vh;
  width: 100vw;
  border-radius: 30px 30px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MoodFormInput = styled.input`
  border: none;
  background-color: none;
  outline: none;
  font-size: 25px;
  padding: 15px;
  margin: 0 15px;
  border-radius: 15px;
`;

const CreateMoodButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  font-size: 25px;
  padding: 15px;
  margin: 0 15px;
  border-radius: 15px;
`;
