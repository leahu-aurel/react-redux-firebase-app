import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import firebase from "../../base";

import "./auth.css";
import GoogleAuth from "./GoogleAuth";
import Error from "./Error";

export default () => {
  const [error, setError] = useState("");
  const history = useHistory();

  let email = useRef();
  let password = useRef();
  let password2 = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    if (password.current.value === password2.current.value) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          email.current.value,
          password.current.value
        )
        .then(() => history.push("/"))
        .catch(({ message }) => {
          setError(message);
        });
    } else {
      setError("Passwords don't match");
    }
  };
  return (
    <div className="authContainer">
      <br />
      <h1>Sign up</h1>
      <form onSubmit={submitHandle}>
        <label>
          Email <br /> <input type="email" ref={email} />
        </label>
        <br />
        <label>
          Password
          <input ref={password} type="password" />
        </label>
        <br />

        <label>
          Repeat password
          <input ref={password2} type="password" />
        </label>
        <br />
        <button className="buttonContainer">Sign Up</button>
      </form>
      <GoogleAuth />
      <Error error={error} />
    </div>
  );
};
