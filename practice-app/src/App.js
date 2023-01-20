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
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
              <h1>Todo List 📝</h1>
          </div>
          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            Study
            <button style={this.btnStyle}>x</button>
          </div>
          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            Clean
            <button style={this.btnStyle}>x</button>
          </div>
        </div>
      </div>
    )
  }
}