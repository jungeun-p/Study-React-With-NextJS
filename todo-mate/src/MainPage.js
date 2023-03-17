import React from "react";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

const MainPage = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default MainPage;
