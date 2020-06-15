import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";

export default () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="navbar">
      <Link to="/">Todos Logo</Link>
      <Link to="/">Your todos</Link>
      <Link to="/about">About</Link>
      {user ? (
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
