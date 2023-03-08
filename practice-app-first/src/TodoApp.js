import React, { useState } from "react";

const TodoApp = () => {
  const initialState = [
    {
      id: 1,
      title: "happiness",
      contents: "this is first todo",
    },
    {
      id: 2,
      title: "sorrow",
      contents: "this is second todo",
    },
    {
      id: 3,
      title: "gloomy",
      contents: "this is third todo",
    },
  ];
  const [todoData, setTodoData] = useState(initialState);
  const [checked, setChecked] = useState(false);

  const deleteTodo = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div className="todoApp">
      <h1>Todo App</h1>
      <div className="todoContainer">
        {todoData.map((todo) => (
          <div className="todoItem" key={todo.id}>
            <div className="todoItemTitle">
              <input type="checkbox" checked={checked} />
              <h3>{todo.title}</h3>
              <h3 onClick={() => deleteTodo(todo.id)}>❌</h3>
            </div>
            <div className="todoItemContents">
              <div>{todo.contents}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
