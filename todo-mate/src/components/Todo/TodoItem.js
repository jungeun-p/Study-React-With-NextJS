import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({
  id,
  date,
  title,
  contents,
  completed,
  todoData,
  setTodoData,
  updateTodoCompleted,
  deleteTodoItem,
}) => {
  const [editing, setEditing] = useState(false);
  const [editTodoItem, setEditTodoItem] = useState({
    title,
    contents,
  });

  // Update todoData title & contents
  const updateTodoItem = (e) => {
    e.preventDefault();
    const newTodoData = todoData.map((todo) => {
      if (todo.id === id) {
        todo.title = editTodoItem.title;
        todo.contents = editTodoItem.contents;
      }
      return todo;
    });
    setTodoData(newTodoData);
    setEditing(false);
  };

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTodoItem({ ...editTodoItem, [name]: value });
  };

  return (
    <form
      className={`todoItemContainer 
      ${id % 2 === 1 ? "black" : "white"} 
      ${completed && "finished"}`}
    >
      {editing ? (
        <>
          <div className="topWrapper">
            <div className="titleWrapper">
              <div className="todoTitleWrapper">
                <input
                  className={`todoTitle ${completed && "finish"} ${
                    id % 2 === 1 ? "black" : "white"
                  }`}
                  name="title"
                  type="text"
                  value={editTodoItem.title}
                  onChange={handleChange}
                />
              </div>
              <div className="todoButtonWrapper">
                <div onClick={() => setEditing(!editing)}>🤚</div>
                <input
                  className="update"
                  type="submit"
                  onClick={updateTodoItem}
                  value="✅"
                />
              </div>
            </div>
            <textarea
              className={`todoContents ${id % 2 === 1 ? "black" : "white"}`}
              name="contents"
              type="text"
              value={editTodoItem.contents}
              onChange={handleChange}
            />
          </div>
          <div className="bottomWrapper">
            <div className="todoDate">{date}</div>
          </div>
        </>
      ) : (
        <>
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
                <div className={`todoTitle ${completed && "finish"}`}>
                  {title}
                </div>
              </div>
              <div className="todoButtonWrapper">
                <div onClick={() => setEditing(!editing)}>✏️</div>
                <div onClick={() => deleteTodoItem(id)}>🗑️</div>
              </div>
            </div>
            <div className="todoContents">{contents}</div>
          </div>
          <div className="bottomWrapper">
            <div className="todoDate">{date}</div>
          </div>
        </>
      )}
    </form>
  );
};

export default TodoItem;
