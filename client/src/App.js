import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Saved from "./pages/saved";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/saved">
            <Saved/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
