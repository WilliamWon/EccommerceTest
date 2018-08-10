import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Cart from "./Components/Cart/Cart";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/cart" component={Cart} />
    {/* <Route path="/" component={} /> */}
  </Switch>
);
