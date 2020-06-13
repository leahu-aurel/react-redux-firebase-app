import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "./components/Navbar/NavBar";
import Todos from "./components/Todos/Todos";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import SignOut from "./components/Auth/SignOut";
import About from "./components/About/About";
import { fetchTodos } from "./redux/actions/actionCreators";
let App = ({ user, fetchTodos }) => {
  useEffect(() => {
    fetchTodos(user.uid);
  }, [user.uid, fetchTodos]);
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

App = connect(({ user }) => ({ user }), { fetchTodos })(App);

export default App;
