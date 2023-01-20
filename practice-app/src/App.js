import { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  todoData = [
    {
      id: "1",
      title: "Study 🔥",
      completed: true,
    },
    {
      id: "2",
      title: "Clean 🪠",
      completed: false,
    }
  ]
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
              <h1>Todo List 📝</h1>
          </div>
          {this.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
              {data.title}
              <button style={this.btnStyle}>x</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}