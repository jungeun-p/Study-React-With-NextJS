import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/request";
import MoodList from "./MoodList";
import "./moodPage.css";

const MoodPage = () => {
  const params = useParams();
  const [moodTodoData, setMoodTodoData] = useState([]);
  
  const fetchTodoData = async () => {
    const result = await axios.get(requests.fetchTodo);
    const { items } = result.data;
    const todoDataByMood = items.filter((todo) => todo.mood === params.mood);
    setMoodTodoData(todoDataByMood);
  };

  useEffect(() => {
    fetchTodoData();
  }, [])
  
  return (
    <div className="moodPageContainer">
      <div className="moodName">{params.moodName}</div>
      <MoodList moodTodoData={moodTodoData} />
    </div>
  );
};

export default MoodPage;
