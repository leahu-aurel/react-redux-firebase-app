import React, { useRef } from "react";
import firebase from "../../base";

import "./auth.css";

export default () => {
  let login = useRef();
  let password = useRef();
  const submitHandle = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(login.current.value, password.current.value)
      .then(({ user }) => {
        console.log(user);
        console.log(localStorage.setItem("isSignedIn", user.email));
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
