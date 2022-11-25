import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("Number is below zero");

  return (
    <div className="App">
      <p>Counter:{counter > 0 ? counter : error}</p>
      <button id="increment" onClick={() => setCounter((prev) => prev + 1)}>
        Increase
      </button>
      <button id="decrease" onClick={() => setCounter((prev) => prev - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;
