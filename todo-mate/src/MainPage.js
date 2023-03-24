import React, { useState } from "react";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import todoDataBase from "./assets/data";

const MainPage = () => {
  const [todoData, setTodoData] = useState(todoDataBase);
  const [todoItem, setTodoItem] = useState({
    title: "",
    contents: "",
    mood: "",

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
        mood: todoItem.mood,
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
