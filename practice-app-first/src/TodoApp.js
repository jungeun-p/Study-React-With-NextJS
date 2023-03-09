import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

const TodoApp = () => {
  const initialState = [
    {
      id: 1,
      title: "happiness",
      contents: "this is first todo",
      completed: true,
    },
    {
      id: 2,
      title: "sorrow",
      contents: "this is second todo",
      completed: false,
    },
    {
      id: 3,
      title: "gloomy",
      contents: "this is third todo",
      completed: false,
    },
  ];
  const [todoData, setTodoData] = useState(initialState);

  // DeleteTodo
  const deleteTodo = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div className="todoApp">
      <h1>Todo App</h1>
      <div className="todoContainer">
        <TodoItem
          setTodoData={setTodoData}
          todoData={todoData}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
