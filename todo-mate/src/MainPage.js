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
      contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
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
  const [todoItem, setTodoItem] = useState({
    id: "",
    date: "",
    title: "",
    contents: "",
    completed: false,
  });

  // Create TodoItem
  const createTodoItem = (e) => {
    if ((todoItem.title && todoItem.contents) !== "") {
      e.preventDefault();
      let newTodoItem = {
        id: createTodoId(),
        date: createTodayDate(),
        title: todoItem.title,
        contents: todoItem.contents,
        completed: false,
      };
      setTodoData((prev) => [...prev, newTodoItem]);
      setTodoItem("");
    } else {
      alert("fill the form");
      e.preventDefault();
    }
  };

  // Create TodoItem Date
  const createTodayDate = () => {
    const event = new Date();
    return event.toDateString();
  };

  // Create TodoItem Id
  const createTodoId = () => {
    const id = todoData.map((todo) => todo.id);
    const maxId = Math.max(...id);
    return maxId + 1;
  };

  return (
    <>
      <TodoForm
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        createTodoItem={createTodoItem}
      />
      <TodoList todoData={todoData} setTodoData={setTodoData} />
    </>
  );
};

export default MainPage;
