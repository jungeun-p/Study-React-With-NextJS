import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";
import "./Category.css";
import CategoryIndex from "./CategoryIndex";

const Category = () => {
  const [mood, setMood] = useState([]);

  const fetchTodoData = async () => {
    const result = await axios.get(requests.fetchTodo);
    const { items } = result.data;
    setMood(items);
  };

  // fetch Mood Data
  const fetchMoodData = () => {};

  useEffect(() => {
    fetchTodoData();
  }, []);

  // 중복되는 mood 제거
  const moodName = () => {
    const uniqueMood = [
      ...new Map(mood.map((item) => [item.mood, item])).values(),
    ];
    return uniqueMood;
  };
  const moodValueNum = (moodName) => {
    // moodData에서 해당 mood와 동일한 mood의 갯수를 출력
    const MoodData = mood.filter((todo) => todo.mood === moodName).length;
    return MoodData;
  };

  return (
    <div className="moodCategories">
      {moodName().map(
        (item) => (
          <CategoryIndex
            key={item.id}
            mood={item.mood}
            // moodEmoji={item.moodEmoji}
            moodNum={moodValueNum(item.mood)}
          />
        )
      )}
    </div>
  );
};

export default Category;
