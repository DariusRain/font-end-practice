// Import here from tests/components

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {apiRoot} from "../../config"

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
