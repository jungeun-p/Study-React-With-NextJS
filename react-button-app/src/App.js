import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h3 data-testid="counter">{count}</h3>
    </div>
  );
}

export default App;