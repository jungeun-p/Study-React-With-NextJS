import React from "react";
import TodoItem from "../Todo/TodoItem";
import "../Todo/TodoList.css";

const MoodList = ({ moodData }) => {
  return (
    <div className="todoListContainer">
      {moodData.map((todo) => (
        <TodoItem
          key={todo.id}
          date={todo.date}
          id={todo.id}
          title={todo.title}
          contents={todo.contents}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default MoodList;
