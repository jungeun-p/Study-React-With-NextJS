import React from "react";
import { useParams } from "react-router-dom";
import todoDataBase from "../../assets/data";
import MoodList from "./MoodList";

const MoodPage = () => {
  const params = useParams();
  const moodData = todoDataBase.filter((todo) => todo.mood === params.moodName);
  return (
    <div className="moodPageContainer">
      <MoodList moodData={moodData} />
    </div>
  );
};

export default MoodPage;
