import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [stateTF, setStateTF] = useState(false);
  const toggleTrueFalse = () => {
    // setState(!state);
  };
  const getTrueFalseAsString = () => {
    if (stateTF) return "true";
    else return "false";
  };

  const [state, setState] = useState({ counter: 0 });
  const add1ToCounter = () => {
    const newCounterValue = state.counter + 1;
    setState({ counter: newCounterValue });
  };

  return (
    <div>
      <div className="App">
        <p>You clicked {getTrueFalseAsString} times</p>
        <button onClick={toggleTrueFalse}>Click me</button>
      </div>

      <div>
        <p>You clicked {state.counter} times</p>
        <button onClick={add1ToCounter}>Click me</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
