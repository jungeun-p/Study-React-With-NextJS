import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <button 
        data-testid="minus-button"
        onClick={() => setCount((prev) => prev - 1)}
      >-</button>
      <button 
        data-testid="plus-button"
        onClick={() => setCount((prev) => prev + 1)}
        disabled={disabled}
      >+</button>
      <h3 data-testid="counter">{count}</h3>
      <button 
        data-testid="on/off-button"
        style={{ backgroundColor: "blue" }}
        onClick={() => setDisabled((prev) => !prev)}
      >
        on/off
      </button>
    </div>
  );
}

export default App;
