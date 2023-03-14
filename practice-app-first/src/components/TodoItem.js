import React, { useState } from "react";

const TodoItem = ({
  id,
  title,
  contents,
  completed,
  todoData,
  setTodoData,
  deleteTodo,
}) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  // UpdateCompleted
  const completedChange = (id) => {
    const newTodoData = todoData.map((item) => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    });
    setTodoData(newTodoData);
  };

  return (
    <div className={`todoItem ${completed ? "finished" : undefined}`} key={id}>
      {editing ? (
        <form onSubmit={()=>{}}>
          <input type="text" name="title" value={title} />
        </form>
      ) : (
        <>
          <div className="todoItemTitle">
            <div className="title">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => completedChange(id)}
              />
              <h3>{title}</h3>
            </div>
            <div className="todoItemButton">
              <h3 className="button" onClick={() => setEditing(!editing)}>
                ✏️
              </h3>
              <h3 className="button" onClick={() => deleteTodo(id)}>
                ❌
              </h3>
            </div>
          </div>
          <div className="todoItemContents">
            <div>{contents}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
