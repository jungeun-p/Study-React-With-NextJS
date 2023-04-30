import React from "react";
import axios from "../../api/axios";
import requests from "../../api/request";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todoData, fetchStatus, setFetchStatus }) => {
  // Update todoData completed
  // const updateTodoCompleted = useCallback(
  //   (id) => {
  //     let newTodoData = todoData.map((todo) => {
  //       if (todo.id === id) todo.completed = !todo.completed;
  //       return todo;
  //     });
  //     setTodoData(newTodoData);
  //     dataLocalStorage("todoData", newTodoData);
  //   },
  //   [todoData]
  // );

  const updateTodoCompleted = async (id) => {
    let selectedTodoItem = todoData.find((todo) => {
      if (todo.id === id) return todo;
    });
    const data = {
      ...selectedTodoItem,
      completed: !selectedTodoItem.completed,
    };
    const result = await axios.patch(`${requests.fetchTodo}/${id}`, data);
    setFetchStatus({ ...fetchStatus, success: result.status });
  };

  // Delete TodoItem
  // const deleteTodoItem = useCallback(
  //   (id) => {
  //     let newTodoItem = todoData.filter((todo) => todo.id !== id);
  //     dataLocalStorage("todoData", newTodoItem);
  //     window.location.reload();
  //   },
  //   [todoData]
  // );

  const deleteTodoItem = async (id) => {
    const result = await axios.delete(`${requests.fetchTodo}/${id}`);
    setFetchStatus({ ...fetchStatus, success: result.status });
  };

  return (
    <div className="todoListContainer">
      {todoData.map((todo) => (
        <TodoItem
          key={todo.todoId}
          date={todo.date}
          id={todo.id}
          todoId={todo.todoId}
          title={todo.title}
          mood={todo.mood}
          contents={todo.contents}
          completed={todo.completed}
          todoData={todoData}
          fetchStatus={fetchStatus}
          setFetchStatus={setFetchStatus}
          updateTodoCompleted={updateTodoCompleted}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
