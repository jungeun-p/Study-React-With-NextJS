import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CategoryIndex = ({ moodName, moodIcon, moodValue }) => {
  const navigate = useNavigate();
  return (
    <div className="moodIndex" onClick={() => navigate(`/${moodName}`)}>
      <div className="moodIcon">{moodIcon}</div>
      <div className="moodTitle">{moodName}</div>
      <div className="moodValue">({moodValue})</div>
    </div>
  );
};

export default CategoryIndex;
