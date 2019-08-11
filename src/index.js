import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [state, setState] = useState(false);
  const toggleTrueFalse = () => {
    setState(!state);
  };
  const getTrueFalseAsString = () => {
    if (state) return "true";
    else return "false";
  };

  return (
    <div className="App">
      <p>You clicked {getTrueFalseAsString()} times</p>
      <button onClick={toggleTrueFalse()}>Click me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
