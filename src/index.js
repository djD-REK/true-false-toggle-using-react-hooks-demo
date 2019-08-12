import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [state, setState] = useState({ isTrue: false, counter: 0 });
  const toggleTrueFalse = () => {
    setState({ isTrue: !state.isTrue, counter: state.counter });
    // A pure toggle wouldn't need to reference counter, just isTrue,
    // but in this implementation we are using only one state for both.
    // In this code example, counter is required to make both work.
  };
  const getTrueFalseAsString = () => {
    if (state.isTrue) return "true";
    else return "false";
    // for whatever reason, returning state.isTrue.toString() crashes
    // the counter button but not the toggle button
  };
  const incrementCounter = () => {
    setState({ counter: state.counter + 1 });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>⭐️❤️☕🍍☄⛱⛷☀️☘️</h1>
        <h2>Your toggle is {getTrueFalseAsString()} 🥳</h2>
        <button onClick={toggleTrueFalse}>
          <h3>Toggle me</h3>
        </button>
        <h2>You clicked below {state.counter} times 🥳</h2>
        <button onClick={incrementCounter}>
          <h3>Click me</h3>
        </button>
        <h1>⭐️❤️☕🍍☄⛱⛷☀️☘️</h1>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
