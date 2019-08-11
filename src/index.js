import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [stateTF, setStateTF] = useState({ isTrue: false });
  const toggleTrueFalse = () => {
    if (stateTF.isTrue) return setStateTF({ isTrue: false });
    else setStateTF({ isTrue: true });
  };
  const getTrueFalseAsString = () => {
    if (stateTF.isTrue) return "true";
    else return "false";
  };

  const [state, setState] = useState({ counter: 0 });
  const add1ToCounter = () => {
    const newCounterValue = state.counter + 1;
    setState({ counter: newCounterValue });
  };

  return (
    <div className="App">
      <h1>⭐️❤️☕🍍☄⛱⛷☀️☘️</h1>
      <h2>Your toggle is {getTrueFalseAsString()} 🥳</h2>
      <button onClick={toggleTrueFalse}>
        <h3>Toggle me</h3>
      </button>
      <h2>You clicked below {state.counter} times 🥳</h2>
      <button onClick={add1ToCounter}>
        <h3>Click me</h3>
      </button>
      <h1>⭐️❤️☕🍍☄⛱⛷☀️☘️</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
