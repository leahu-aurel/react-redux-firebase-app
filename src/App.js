import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Todos from "./components/Todos/Todos";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import SignOut from "./components/Auth/SignOut";
import About from "./components/About/About";

export default () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/(|home)">
          <Todos />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/sign_in">
          <SignIn />
        </Route>
        <Route exact path="/sign_up">
          <SignUp />
        </Route>
        <Route exact path="/sign_out">
          <SignOut />
        </Route>
      </Switch>
    </>
  );
};
