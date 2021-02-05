import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Index from "../Components/Index/Index";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Index} />
          <Index />
        </Switch>
      </div>
    );
  }
}

export default App;
