import React, { useState } from "react";
import "./TodoForm.css";

const MoodSelect = ({ checked, value, emoji, handleChange }) => {
  return (
      <button
        className={`todoMood ${checked ? "checked" : ""}`}
        onClick={handleChange}
        type="button"
        name="mood"
        value={value}
      >
        {emoji}
      </button>
  );
};

export default React.memo(MoodSelect);
