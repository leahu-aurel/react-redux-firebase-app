import { SIGN_IN, SIGN_OUT } from "../actions/actions";

const initialState = localStorage.getItem("isSignedIn");

export default (state = initialState, { type, user }) => {
  switch (type) {
    case SIGN_IN:
      localStorage.setItem("isSignedIn", user);
      return user;
    case SIGN_OUT:
      localStorage.removeItem("isSignedIn");
      return null;
    default:
      return state;
  }
};
