import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
            <Switch>
            <Route path="/" component={ Home } exact />
              <Route path="/Home" component={ Home } />
              <Route path="/About" component={ About } />
              <Route path="/Contact" component={ Contact } />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
