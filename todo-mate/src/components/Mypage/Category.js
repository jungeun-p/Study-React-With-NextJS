import React, { useState } from "react";
import { initialMoodData, initialTodoData } from "../../assets/data";
import "./Category.css";
import CategoryIndex from "./CategoryIndex";

const Category = () => {
  const [mood, setMood] = useState(initialMoodData);

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
