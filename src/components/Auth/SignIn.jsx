import React, { useRef } from "react";
import "./auth.css";
export default () => {
  let login = useRef();
  let password = useRef();
  const submitHandle = (e) => {
    e.preventDefault();
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
