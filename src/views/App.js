import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Quiz from "./containers/Quiz";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/quiz">
        <Quiz />
      </Route>
    </Switch>
  );
}

export default App;
