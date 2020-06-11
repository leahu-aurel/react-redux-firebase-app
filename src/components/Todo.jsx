import React from "react";

export default ({ text, completed, id, onChange }) => (
  <>
    <input type="checkbox" checked={completed} onChange={() => onChange(id)} />
    <li>{text}</li>
  </>
);
