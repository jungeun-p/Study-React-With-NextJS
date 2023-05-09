import { useState } from "react";
import "./App.css";

function App() {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      mood: "🥰",
      content: "happy",
    },
    {
      id: 2,
      mood: "🥲",
      content: "sad",
    },
    {
      id: 3,
      mood: "😡",
      content: "mad",
    },
  ]);
  return (
    <div className="App">
      <div data-testid="todoDataLength">{todoData.length}</div>
    </div>
  );
}

export default App;
