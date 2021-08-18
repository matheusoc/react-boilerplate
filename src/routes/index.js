import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Image from "../view/Image";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Image />
      </Route>
    </Switch>
  </Router>
);

export { Routes };
