import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import Todos from "./components/Todos/Todos";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import About from "./components/About/About";

export default () => {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/(|home)">
          <Todos />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/sign_in">
          <SignIn />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
};
