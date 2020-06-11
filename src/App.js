import React from "react";

import NavBar from "./components/NavBar";

const todosStyle = {
  textAlign: "center",
  paddingTop: "16px",
  fontSize: "2em",
  fontWeight: "bold",
};

export default () => (
  <>
    <NavBar />
    <div style={todosStyle}>{"Todos Component"}</div>
  </>
);
