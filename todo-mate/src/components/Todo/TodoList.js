import React, { useCallback } from "react";
import { dataLocalStorage } from "../../assets/data";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todoData, setTodoData }) => {
  // Update todoData completed
  const updateTodoCompleted = useCallback((id) => {
    let newTodoData = todoData.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodoData(newTodoData);
    dataLocalStorage("todoData", newTodoData);
  }, [todoData]);

  // Delete TodoItem
  const deleteTodoItem = useCallback((id) => {
    let newTodoItem = todoData.filter((todo) => todo.id !== id);
    dataLocalStorage("todoData", newTodoItem);
    window.location.reload();
  }, [todoData]);

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

export default React.memo(TodoList);
