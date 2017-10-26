import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import PostcodePage from "./components/PostcodePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
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
