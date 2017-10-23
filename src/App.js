import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Curtain Twitcher</h1>
        </header>
        <br />
        <Homepage />
      </div>
    );
  }
}

export default App;
