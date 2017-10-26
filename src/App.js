import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

import Homepage from "./components/Homepage";
import PostcodePage from "./components/PostcodePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <br />
          <NavLink to="/">home</NavLink>
          <br />
          <NavLink to="/:postcode">postcode</NavLink>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/:postcode" component={PostcodePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
