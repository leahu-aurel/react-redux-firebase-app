import React from "react";
import {
  removeTodoOnServer,
  toggleTodoOnServer,
} from "../../redux/actions/actionCreators";
import { connect } from "react-redux";

let Todo = ({
  user,
  text,
  completed,
  id,
  removeTodoOnServer,
  toggleTodoOnServer,
}) => (
  <>
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoOnServer(user.uid, id, completed)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <span
        className="closeButton"
        onClick={() => removeTodoOnServer(user.uid, id)}
      >
        x
      </span>
    </li>
  </>
);

Todo = connect(({ user }) => ({ user }), {
  removeTodoOnServer,
  toggleTodoOnServer,
})(Todo);

export default Todo;
