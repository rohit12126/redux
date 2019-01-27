import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    );
  }
}

export default App;
