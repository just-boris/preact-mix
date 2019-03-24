import React from "react";
import { render } from "react-dom";

function Hello() {
  return <span>Hello from React!</span>;
}

render(<Hello />, document.getElementById("react"));
