import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";
import { initialMoodData, initialTodoData } from "../../assets/data";
import "./Category.css";
import CategoryIndex from "./CategoryIndex";

const Category = () => {
  const [mood, setMood] = useState([]);

  const fetchMoodData = async () => {
    const result = await axios.get(requests.fetchMood);
    const { items } = result.data;
    setMood(items);
  };

  useEffect(() => {
    fetchMoodData();
  }, []);
  
  // Create moodValue
  const moodValueNum = (moodValue) => {
    const todoMood = initialTodoData
      .map((todo) => todo.mood)
      .filter((mood) => mood === moodValue).length;
    return todoMood;
  };

  return (
    <div className="moodCategories">
      {mood.map((item) => (
        <CategoryIndex
          key={item.moodValue}
          moodValue={item.moodValue}
          moodEmoji={item.moodEmoji}
          moodNum={moodValueNum(item.moodValue)}
        />
      ))}
    </div>
  );
};

export default Category;
