import React from "react";
import EditTodo from "./EditTodo";
import RemoveTodo from "./RemoveTodo";
import ToggleTodo from "./ToggleTodo";

export default (props) => (
  <li>
    <ToggleTodo {...props} />
    <EditTodo {...props} />
    <RemoveTodo {...props} />
  </li>
);
