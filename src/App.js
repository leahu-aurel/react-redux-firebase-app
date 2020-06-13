import React, { useEffect, useState, useCallback } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { db } from "./base";

import NavBar from "./components/Navbar/NavBar";
import Todos from "./components/Todos/Todos";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import SignOut from "./components/Auth/SignOut";
import About from "./components/About/About";
import { setTodos } from "./redux/actions/actionCreators";
let App = ({ user, setTodos }) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    const userCollection = db
      .collection("users")
      .doc(user.uid)
      .collection("todos");
    const todos = [];
    async function fetchData() {
      const docs = await userCollection.get();
      docs.forEach((doc) => {
        todos.push(doc.data());
      });
    }
    fetchData();
    setTodos(todos);
    forceUpdate();
  }, [setTodos, user.uid]);
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

App = connect(({ user }) => ({ user }), { setTodos })(App);

export default App;
