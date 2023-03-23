import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todoData, setTodoData }) => {
  // Update todoData completed
  const updateTodoCompleted = (id) => {
    let newTodoData = todoData.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodoData(newTodoData);
  };

  // Delete TodoItem
  const deleteTodoItem = (id) => {
    let newTodoItem = todoData.filter((todo) => todo.id !== id);
    setTodoData(newTodoItem);
  };

  return (
    <div className="todoListContainer">
      {todoData.map((todo) => (
        <TodoItem
          key={todo.id}
          date={todo.date}
          id={todo.id}
          title={todo.title}
          mood={todo.mood}
          contents={todo.contents}
          completed={todo.completed}
          todoData={todoData}
          setTodoData={setTodoData}
          updateTodoCompleted={updateTodoCompleted}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
