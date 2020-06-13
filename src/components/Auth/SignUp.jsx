import React, { useRef } from "react";

import firebase from "../../base";
import "./auth.css";
export default () => {
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
        .then()
        .catch(function (error) {
          console.log(error.message);
        });
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
        <button className="buttonContainer">Log in</button>
      </form>
    </div>
  );
};
