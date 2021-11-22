import React, { useState } from "react";
import "./App.css";

/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.OnWriteHandle = this.OnWriteHandle.bind(this);
  }
  OnWriteHandle = (event) => {
    this.setState({
      value: event.target.value,
    });
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input
          type="text"
          onChange={this.OnWriteHandle}
          placeholder="Empieza a escribir algo"
        />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
}

export default App; */

const App = () => {
  const [value, setValue] = useState("");
  const OnWriteHandle = (event) => {
     setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        type="text"
        onChange={OnWriteHandle}
        placeholder="Empieza a escribir algo"
      />
      <p className="repeater">{value}</p>
    </div>
  );
};
export default App;
