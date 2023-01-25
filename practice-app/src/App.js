import { Component, useState } from "react";
import "./App.css";
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-full p-6 m-4 bg-white rounded shadow-sm lg:w-3/4 lg:max-w-lg">
        <TodoApp />
      </div>
    </div>
  )
}