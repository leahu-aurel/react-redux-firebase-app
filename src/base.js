import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfFPranH2XKT2sfOCz_jMbYLZjzFI0_Fo",
  authDomain: "react-redux-firebase-26a25.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-26a25.firebaseio.com",
  projectId: "react-redux-firebase-26a25",
  storageBucket: "react-redux-firebase-26a25.appspot.com",
  messagingSenderId: "788291083599",
  appId: "1:788291083599:web:61408f4fcda7f94a44b93a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
