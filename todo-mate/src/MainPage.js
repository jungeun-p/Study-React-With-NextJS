import React, { useState } from "react";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

const MainPage = () => {
  const initialize = [
    {
      id: 1,
      date: "23-01-11",
      title: "First",
      contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
      completed: true,
    },
    {
      id: 2,
      date: "23-01-11",
      title: "Second",
      contents: "SecondContents",
      completed: false,
    },
    {
      id: 3,
      date: "23-01-11",
      title: "Third",
      contents: "ThirdContents",
      completed: false,
    },
    {
      id: 4,
      date: "23-01-11",
      title: "First",
      contents: "FirstContents",
      completed: true,
    },
    {
      id: 5,
      date: "23-01-11",
      title: "Second",
      contents: "SecondContents",
      completed: false,
    },
    {
      id: 6,
      date: "23-01-11",
      title: "Third",
      contents: "ThirdContents",
      completed: false,
    },
  ];
  const [todoData, setTodoData] = useState(initialize);
  return (
    <>
      <TodoForm />
      <TodoList todoData={todoData} setTodoData={setTodoData} />
    </>
  );
};

export default MainPage;
