import { Component, useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("")

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  }

  const handleClick = (id) => {
    const newTodoData = todoData.filter(data => data.id !== id);
    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  }

  const handleChange = (e) => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Reload 방지
    // 새로운 입력된 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // spread 연산자로 기존 state 추가
    // this.setState({ todoData: [...todoData, newData], value: "" });
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }

  const handleCompletedChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) data.completed = !data.completed;
      return data; 
    });
    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  }
  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
            <h1>Todo List 📝</h1>
        </div>
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input 
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="write your work to do"
            value={value}
            onChange={handleChange}
          />
          <input 
            type="submit"
            value="input"
            className="btn" 
            style={{ flex: '1' }}
          />
        </form>
        {todoData.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
            <input 
              type="checkbox"
              onChange={() => handleCompletedChange(data.id)}
              defaultChecked={false} />
            {data.title}
            <button 
              style={btnStyle} 
              onClick={() => handleClick(data.id)}
            >
              😵
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}