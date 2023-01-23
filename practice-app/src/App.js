import { Component, useState } from "react";
import "./App.css";
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
            <h1>Todo List 📝</h1>
        </div>
        <TodoApp />
      </div>
    </div>
  )
}