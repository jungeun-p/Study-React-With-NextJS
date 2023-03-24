import React, { useCallback, useState } from "react";
import todoDataBase from "../../assets/data";
import "./Category.css";
import CategoryIndex from "./CategoryIndex";

const Category = () => {
  const [mood, setMood] = useState([
    {
      moodName: "Soso",
      moodIcon: "🙂",
    },
    {
      moodName: "Happy",
      moodIcon: "🥰",
    },
    {
      moodName: "Bad",
      moodIcon: "☹️",
    },
    {
      moodName: "Confuse",
      moodIcon: "😵‍💫",
    },
    {
      moodName: "Sad",
      moodIcon: "🥲",
    },
    {
      moodName: "Peaceful",
      moodIcon: "😌",
    },
  ]);

  // Create moodValue
  const moodValueNum = useCallback((moodName) => {
    const todoMood = todoDataBase
      .map((todo) => todo.mood)
      .filter((mood) => mood === moodName).length;
    return todoMood;
  }, []);

  return (
    <div className="moodCategories">
      {mood.map((item) => (
        <CategoryIndex
          key={item.moodName}
          moodName={item.moodName}
          moodIcon={item.moodIcon}
          moodValue={moodValueNum(item.moodName)}
        />
      ))}
    </div>
  );
};

export default Category;