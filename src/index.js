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
      <p>Your toggle is {getTrueFalseAsString()} 🥳</p>
      <button onClick={toggleTrueFalse}>Toggle me</button>
      <p>You clicked below {state.counter} times 🥳</p>
      <button onClick={add1ToCounter}>Click me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
