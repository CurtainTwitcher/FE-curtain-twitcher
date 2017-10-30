import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import PostcodePage from "./components/PostcodePage";
import SchoolPage from "./components/SchoolPage";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/crimes" component={PostcodePage} />
            <Route exact path="/schools" component={SchoolPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
