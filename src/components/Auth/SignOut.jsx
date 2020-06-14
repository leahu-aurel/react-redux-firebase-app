import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import firebase from "../../base";

import { signOut } from "../../redux/actions/actionCreators";
let SignOut = ({ signOut }) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      signOut();
    })
    .catch((error) => {
      console.log(error);
    });
  return <Redirect to="/home" />;
};

SignOut = connect(null, { signOut })(SignOut);

export default SignOut;
