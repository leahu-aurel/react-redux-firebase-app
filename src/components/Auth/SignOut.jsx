import React from "react";

import { Redirect } from "react-router-dom";
import firebase from "../../base";
export default () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem("isSignedIn");
    })
    .catch((error) => {
      console.log(error);
    });
  return <Redirect to="/sign_in" />;
};
