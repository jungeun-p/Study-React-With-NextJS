import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = ({ todoData }) => {
  return (
    <div className="todoListContainer">
      {todoData.map((todo) => (
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

export default TodoList;
