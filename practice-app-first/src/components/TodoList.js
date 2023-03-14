import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ setTodoData, todoData, deleteTodo }) => {
  return (
    <>
      {todoData.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          contents={todo.contents}
          completed={todo.completed}
          todoData={todoData}
          setTodoData={setTodoData}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
