import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CategoryIndex = ({ mood, moodEmoji, moodNum }) => {
  const navigate = useNavigate();
  return (
    <div className="moodIndex" onClick={() => navigate(`/${mood}`)}>
      <div className="moodIcon">{moodEmoji}</div>
      <div className="moodTitle">{mood}</div>
      <div className="moodValue">({moodNum})</div>
    </div>
  );
};

export default CategoryIndex;
