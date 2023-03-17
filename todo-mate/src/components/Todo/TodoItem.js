import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, date, title, contents, completed }) => {
  return (
    <div className={`todoItemContainer ${id % 2 === 1 ? "black" : "white"}`}>
      <div className="topWrapper">
        <div className="titleWrapper">
          <input
            className="todoCompleted"
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={() => {}}
          />
          <div className="todoTitle">{title}</div>
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
