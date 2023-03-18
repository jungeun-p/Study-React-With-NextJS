import React from "react";
import "./TodoItem.css";

const TodoItem = ({
  id,
  date,
  title,
  contents,
  completed,
  updateTodoCompleted,
}) => {
  return (
    <div
      className={`todoItemContainer 
      ${id % 2 === 1 ? "black" : "white"} 
      ${completed && "finished"}`}
    >
      <div className="topWrapper">
        <div className="titleWrapper">
          <div className="todoTitleWrapper">
            <input
              className="todoCompleted"
              type="checkbox"
              name="completed"
              checked={completed}
              onChange={() => updateTodoCompleted(id)}
            />
            <div className={`todoTitle ${completed && "finish"}`}>{title}</div>
          </div>
          <div className="todoButtonWrapper">
            <div>✏️</div>
            <div>❎</div>
          </div>
        </div>
        <div className="todoContents">{contents}</div>
      </div>
      <div className="bottomWrapper">
        <div className="todoDate">{date}</div>
      </div>
    </div>
  );
};

export default TodoItem;
