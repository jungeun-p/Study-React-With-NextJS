import React from "react";
import { useParams } from "react-router-dom";
import { initialTodoData } from "../../assets/data";
import MoodList from "./MoodList";
import "./moodPage.css";

const MoodPage = () => {
  const params = useParams();
  const moodData = initialTodoData.filter((todo) => todo.mood === params.moodName);
  return (
    <div className="moodPageContainer">
      <div className="moodName">{params.moodName}</div>
      <MoodList moodData={moodData} />
    </div>
  );
};

export default MoodPage;
