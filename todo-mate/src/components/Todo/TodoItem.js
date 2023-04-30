import React, { useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";
import { dataLocalStorage } from "../../assets/data";
import "./TodoItem.css";

const TodoItem = ({
  id,
  todoId,
  date,
  title,
  mood,
  contents,
  completed,
  todoData,
  fetchStatus,
  setFetchStatus,
  updateTodoCompleted,
  deleteTodoItem,
}) => {
  const [editing, setEditing] = useState(false);
  const [editTodoItem, setEditTodoItem] = useState({
    title,
    contents,
  });

  // Update todoData title & contents
  // const updateTodoItem = (e) => {
  //   e.preventDefault();
  //   const newTodoData = todoData.map((todo) => {
  //     if (todo.id === id) {
  //       todo.title = editTodoItem.title;
  //       todo.contents = editTodoItem.contents;
  //     }
  //     return todo;
  //   });
  //   setTodoData(newTodoData);
  //   dataLocalStorage("todoData", newTodoData);
  //   setEditing(false);
  // };

  const updateTodoItem = async (id) => {
    let selectedTodoItem = todoData.find((todo) => {
      if (todo.id === id) return todo;
    });
    const data = {
      ...selectedTodoItem,
      title: editTodoItem.title,
      contents: editTodoItem.contents,
    };
    const result = await axios.patch(`${requests.updateTodoItem}/${id}`, data);
    setEditing(false);
    setFetchStatus({ ...fetchStatus, success: result.status });
  };

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTodoItem({ ...editTodoItem, [name]: value });
  };

  // create moodIcon
  const createMoodIcon = (mood) => {
    switch (mood) {
      case "Soso":
        return "🙂";
      case "Happy":
        return "🥰";
      case "Bad":
        return "😡";
      case "Confuse":
        return "😵‍💫";
      case "Sad":
        return "🥲";
      case "Peaceful":
        return "😌";
    }
  };

  return (
    <>
      {editing ? (
        <div
          className={`todoItemContainer 
          ${todoId % 2 === 1 ? "black" : "white"} 
          ${completed && "finished"}`}
        >
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
                {/* <div className="todoMood">{createMoodIcon(mood)}</div> */}
              </div>
              <div className="todoButtonWrapper">
                <div onClick={() => setEditing(!editing)}>🤚</div>
                <div className="update" onClick={() => updateTodoItem(id)}>
                  ✅
                </div>
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
        </div>
      ) : (
        <div
          className={`todoItemContainer 
          ${todoId % 2 === 1 ? "black" : "white"} 
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
                <div className={`todoTitle ${completed && "finish"}`}>
                  {title}
                </div>
                <div className="todoMood">({mood})</div>
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
        </div>
      )}
    </>
  );
};

export default React.memo(TodoItem);
