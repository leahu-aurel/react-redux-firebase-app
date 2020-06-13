import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export default () => {
  const email = localStorage.getItem("isSignedIn");
  console.log(email);
  return (
    <div className="navbar">
      <Link to="/home">Todos Logo</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      {email ? (
        <Link to="/sign_out" className="authlink">
          Sign out
        </Link>
      ) : (
        <>
          <Link to="/sign_in" className="authlink">
            Sign in
          </Link>
          <Link to="/sign_up" className="authlink">
            Sign up
          </Link>
        </>
      )}
    </div>
  );
};
