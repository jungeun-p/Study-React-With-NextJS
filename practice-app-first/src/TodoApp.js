import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
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
  const [todoItem, setTodoItem] = useState({
    title: "",
    contents: "",
  });

  // CreateTodo
  const createTodo = (e) => {
    e.preventDefault();
    let newTodo = {
      title: todoItem.title,
      id: Date.now(),
      contents: todoItem.contents,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setTodoItem("");
  };

  // DeleteTodo
  const deleteTodo = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div className="todoApp">
      <h1>Todo App</h1>
      <TodoForm
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        createTodo={createTodo}
      />
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
