import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {apiRoot} from "../.."
import Login from "./Login";

function AppRouter() {
  return (
    <Router>
      <Switch>      
        <Route exact path="/hackr/login">
          <Login />
        </Route>
        <Route
          exact
          path="/hackr/auth/github"
          component={() => {
            window.location.href = `${apiRoot}/auth/github`;
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default AppRouter;
