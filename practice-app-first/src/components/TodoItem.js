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
        <form className="todoUpdateForm">
          <div className="todoItemTitle">
            <input
              className="title form"
              type="text"
              name="title"
              value={title}
            />
            <div className="finish" onClick={() => setEditing(!editing)}>
              🤚
            </div>
            <button className="update" type="submit" onClick={()=>{}}>
              ✔️
            </button>
          </div>
          <div className="todoItemContents">
            <input
              className="contents form"
              type="text"
              name="contents"
              value={contents}
            />
          </div>
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
              <div>{title}</div>
            </div>
            <div className="todoItemButton">
              <div className="button" onClick={() => setEditing(!editing)}>
                ✏️
              </div>
              <div className="button" onClick={() => deleteTodo(id)}>
                ❌
              </div>
            </div>
          </div>
          <div className="todoItemContents">
            <div className="contents">{contents}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
