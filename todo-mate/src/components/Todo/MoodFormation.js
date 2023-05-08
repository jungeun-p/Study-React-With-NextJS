import axios from "../../api/axios";
import React, { useState } from "react";
import requests from "../../api/request";
import styled from "styled-components";
import { FormButton, FormInput } from "../../components/Form";

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
    <MoodFormContainer onSubmit={createMood}>
      <FormInput
        type="text"
        name="moodEmoji"
        value={newMood.moodEmoji || ""}
        placeholder="emoji"
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="moodValue"
        value={newMood.moodValue || ""}
        placeholder="name"
        onChange={handleChange}
      />
      <FormButton type="submit">Create</FormButton>
    </MoodFormContainer>
  );
};

const MoodFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export default React.memo(MoodFormation);
