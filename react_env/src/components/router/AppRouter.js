import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../tests/Login";
function AppRouter() {
    return (
        <Switch>
            <Router>
                <Route exact path="/">
                    <Login />
                </Route>
            </Router>
        </Switch>
    )
}

export default AppRouter;
