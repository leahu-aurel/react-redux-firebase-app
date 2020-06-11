import React from "react";

export default ({ text, completed, id, onChange, onClick }) => (
  <>
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onChange(id)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <span className="closeButton" onClick={() => onClick(id)}>
        x
      </span>
    </li>
  </>
);
