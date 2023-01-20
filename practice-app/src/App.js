import { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoData: [],
    value: "",
  }

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  }

  handleClick = (id) => {
    const newTodoData = this.state.todoData.filter(data => data.id !== id);
    this.setState({ todoData: newTodoData });
    // console.log('newTodoData', newTodoData); 
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault(); // Reload 방지
    // 새로운 입력된 데이터
    let newData = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    // spread 연산자로 기존 state 추가
    this.setState({ todoData: [...this.state.todoData, newData], value: "" });
  }

  handleCompletedChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if(data.id === id) data.completed = !data.completed;
      return data; 
    });
    this.setState({ todoData: newTodoData });
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
              <h1>Todo List 📝</h1>
          </div>
          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            <input 
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px' }}
              placeholder="write your work to do"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input 
              type="submit"
              value="input"
              className="btn" 
              style={{ flex: '1' }}
            />
          </form>
          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input 
                type="checkbox"
                onChange={() => this.handleCompletedChange(data.id)}
                defaultChecked={false} />
              {data.title}
              <button 
                style={this.btnStyle} 
                onClick={() => this.handleClick(data.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}