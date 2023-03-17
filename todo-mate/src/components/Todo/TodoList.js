import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = ({ todoData, setTodoData }) => {
  // Update todoData completed
  const updateTodoCompleted = (id) => {
    let newTodoData = todoData.map((todo) => {
      if(todo.id ===id) todo.completed = !todo.completed;
      return todo;
    });
    setTodoData(newTodoData);
  }
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
          updateTodoCompleted={updateTodoCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
