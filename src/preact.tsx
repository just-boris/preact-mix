/** @jsx h */
import { h, render, Component } from "preact";

class App extends Component {
  render() {
    return <span>Hello from Preact!</span>;
  }
}

render(<App />, document.getElementById("preact")!);
