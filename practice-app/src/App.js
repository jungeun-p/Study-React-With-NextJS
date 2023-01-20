import { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoData: [
      {
        id: "1",
        title: "Study",
        completed: true,
      },
      {
        id: "2",
        title: "Clean",
        completed: false,
      },
    ],
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

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  handleClick = (id) => {
    const newTodoData = this.state.todoData.filter(data => data.id !== id);
    this.setState({ todoData: newTodoData });
    // console.log('newTodoData', newTodoData); 
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
              <h1>Todo List 📝</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
              {data.title}
              <button style={this.btnStyle} onClick={()=>this.handleClick(data.id)}>x</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}