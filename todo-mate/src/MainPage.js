import React, { useState, useEffect } from "react";
import requests from "./api/request";
import axios from "./api/axios";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

const MainPage = () => {
  const [todoData, setTodoData] = useState([]);
  const [todoItem, setTodoItem] = useState({
    title: "",
    contents: "",
    mood: "",
  });

  const fetchTodoData = async () => {
    const result = await axios.get(requests.fetchTodoList);
    const { items } = result.data;
    setTodoData(items);
  };

  useEffect(() => {
    fetchTodoData();
  }, []);
  // Create TodoItem
  const createTodoItem = async (e) => {
    const { title, contents, mood } = todoItem;
    if ((title && contents && mood) !== "") {
      e.preventDefault();
      let newTodoItem = {
        date: createTodayDate(),
        todoId: createTodoId(),
        title: todoItem.title,
        contents: todoItem.contents,
        completed: false,
        mood: todoItem.mood,
      };
      const result = await axios.post(requests.createTodoItem, newTodoItem);
      setTodoItem("");
    } else {
      alert("fill the form");
    }
  };

  // Create TodoItem Date
  const createTodayDate = () => {
    const event = new Date();
    return event.toDateString();
  };

  // Create TodoItem Id
  const createTodoId = () => {
    const id = todoData.map((todo) => todo.todoId);
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
