import React from "react";
import firebase, { googleProvider } from "../../base";
import { signIn } from "../../redux/actions/syncActionCreators";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signInWithGoogle = (e) => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(({ user }) => {
        dispatch(signIn(user));
        history.push("/");
      });
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};
