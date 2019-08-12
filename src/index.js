import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [toggleState, setToggleState] = useState({ isTrue: false });
  const [counterState, setCounterState] = useState({ counter: 0 });

  const toggleTrueFalse = () => {
    setToggleState({ isTrue: !toggleState.isTrue });
  };
  const getTrueFalseAsString = () => {
    return toggleState.isTrue.toString();
  };
  const incrementCounter = () => {
    setCounterState({ counter: counterState.counter + 1 });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>
          <span role="img" aria-label="Decorative Emojis">
            ⭐️❤️☕🍍☄⛱⛷☀️☘️
          </span>
        </h1>
        <h2>Your toggle is {getTrueFalseAsString()} 🥳</h2>
        <button onClick={toggleTrueFalse}>
          <h3>Toggle me</h3>
        </button>
        <h2>You clicked below {counterState.counter} times 🥳</h2>
        <button onClick={incrementCounter}>
          <h3>Click me</h3>
        </button>
        <h1>
          <span role="img" aria-label="Decorative Emojis">
            ⭐️❤️☕🍍☄⛱⛷☀️☘️
          </span>
        </h1>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
