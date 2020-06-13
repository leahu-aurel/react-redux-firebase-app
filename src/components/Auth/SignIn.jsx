import React, { useRef } from "react";
import firebase from "../../base";
import { withRouter } from "react-router-dom";

import "./auth.css";
let SignIn = ({ history }) => {
  let login = useRef();
  let password = useRef();
  const submitHandle = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(login.current.value, password.current.value)
      .then(({ user }) => {
        localStorage.setItem("isSignedIn", user.email);
        history.push("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="authContainer">
      <br />
      <h1>Sign in</h1>
      <form onSubmit={submitHandle}>
        <label>
          Login <br /> <input ref={login} />
        </label>
        <br />
        <label>
          Password
          <input ref={password} type="password" />
        </label>
        <br />
        <button className="buttonContainer">Log in</button>
      </form>
    </div>
  );
};

SignIn = withRouter(SignIn);

export default SignIn;
