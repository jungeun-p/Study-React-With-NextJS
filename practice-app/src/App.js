import { Component, useState } from "react";
import "./App.css";
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-full p-6 m-4 bg-white rounded shadow-sm lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
            <h1>Todo List 📝</h1>
        </div>
        <TodoApp />
      </div>
    </div>
  )
}