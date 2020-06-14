import React from "react";

export default ({ error }) => {
  const activeStyle = error ? { display: "block" } : { display: "none" };
  return (
    <div className="errorMessage" style={activeStyle}>
      {error}
    </div>
  );
};
