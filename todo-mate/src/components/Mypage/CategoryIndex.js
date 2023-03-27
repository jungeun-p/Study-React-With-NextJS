import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CategoryIndex = ({ moodValue, moodEmoji, moodNum }) => {
  const navigate = useNavigate();
  return (
    <div className="moodIndex" onClick={() => navigate(`/${moodValue}`)}>
      <div className="moodIcon">{moodEmoji}</div>
      <div className="moodTitle">{moodValue}</div>
      <div className="moodValue">({moodNum})</div>
    </div>
  );
};

export default CategoryIndex;
