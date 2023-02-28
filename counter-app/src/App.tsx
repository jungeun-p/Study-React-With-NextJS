import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";

type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
};

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);

  const [todoValue, setTodoValue] = useState("initialState");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };

  return (
    <div className="App">
      Clicked: {counter}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
