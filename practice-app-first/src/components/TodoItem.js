import React from "react";

const TodoItem = ({ setTodoData, todoData, deleteTodo }) => {
  
  // Update
  const completedChange = (id) => {
    const newTodoData = todoData.map((item) => {
      if(item.id === id) item.completed = !item.completed;
      return item;
    });
    setTodoData(newTodoData);
  };

  return (
    <>
      {todoData.map((todo) => (
        <div
          className={`todoItem ${todo.completed ? "finished" : undefined}`}
          key={todo.id}
        >
          <div className="todoItemTitle">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => completedChange(todo.id)}
            />
            <h3>{todo.title}</h3>
            <h3 onClick={() => deleteTodo(todo.id)}>❌</h3>
          </div>
          <div className="todoItemContents">
            <div>{todo.contents}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
