import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavBar from "./components/Navbar/NavBar";
import Todos from "./components/Todos/Todos";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import SignOut from "./components/Auth/SignOut";
import About from "./components/About/About";
import { fetchTodos } from "./redux/actions/actionCreators";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/(|all|left|completed)">
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
