import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About/About";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Profile from "./pages/Profile";

import UseEffectLesson from "./pages/UseEffectLesson/UseEffectLesson";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <div className = "pageContent"> 
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route path = "/use-effect-lessons" component = {UseEffectLesson}/>
              <Route path = "/about" component = {About}/>
              <Route exact path = "/members" component = {Members}/>
              <Route path = "/members/:id" component = {Profile}/>
            </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;