import React, { useRef, useState } from "react";
import firebase from "../../base";
import { signIn } from "../../redux/actions/syncActionCreators";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Error from "./Error";
import "./auth.css";

let SignIn = ({ history }) => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  let login = useRef();
  let password = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(login.current.value, password.current.value)
      .then(({ user }) => {
        dispatch(signIn(user));
        history.push("/");
      })
      .catch(({ message }) => setError(message));
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
        <Error error={error} />
      </form>
    </div>
  );
};

SignIn = withRouter(SignIn);

export default SignIn;
