import React, { Component } from "react";
import "./App.css";
import routes from "../routes";
import NavBar from "./NavBar/NavBar";
import LoginBar from "./LoginBar/LoginBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginBar />
        <NavBar />
        {routes}
      </div>
    );
  }
}

export default App;
