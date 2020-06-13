import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export default () => (
  <div className="navbar">
    <Link to="/home">Todos Logo</Link>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/sign_in" className="authlink">
      Sign in
    </Link>
    <Link to="/sign_up" className="authlink">
      Sign up
    </Link>
  </div>
);
