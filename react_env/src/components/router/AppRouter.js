import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../tests/Login";
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
