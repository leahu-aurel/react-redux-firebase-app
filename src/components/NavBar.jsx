import React from "react";

import "./css/navbar.css";

export default () => (
  <div className="navbar">
    <a href="#Home">Todos logo</a>
    <a href="#Home">Home</a>
    <a href="#About">About</a>
    <a href="#Sign in" className="authlink">
      Sign in
    </a>
    <a href="#Sign up" className="authlink">
      Sign up
    </a>
  </div>
);
