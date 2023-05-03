import React from "react";
import TodoItem from "../Todo/TodoItem";
import "../Todo/TodoList.css";

const MoodList = ({ moodTodoData }) => {
  return (
    <div className="todoListContainer">
      {moodTodoData.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todoId={todo.todoId}
          date={todo.date}
          mood={todo.mood}
          title={todo.title}
          contents={todo.contents}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default MoodList;
