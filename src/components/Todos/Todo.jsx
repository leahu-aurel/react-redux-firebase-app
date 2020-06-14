import React from "react";
import {
  removeTodoOnServer,
  removeTodo,
  toggleTodoOnServer,
  toggleTodo,
} from "../../redux/actions/actionCreators";
import { connect } from "react-redux";

let Todo = ({
  user,
  text,
  completed,
  id,
  removeTodo,
  toggleTodo,
  removeTodoOnServer,
  toggleTodoOnServer,
}) => {
  const removeHandle = () => {
    user ? removeTodoOnServer(user.uid, id) : removeTodo(id);
  };
  const toggleHandle = () => {
    user ? toggleTodoOnServer(user.uid, id, completed) : toggleTodo(id);
  };
  return (
    <>
      <li>
        <input type="checkbox" checked={completed} onChange={toggleHandle} />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </span>
        <span className="closeButton" onClick={removeHandle}>
          x
        </span>
      </li>
    </>
  );
};

Todo = connect(({ user }) => ({ user }), {
  removeTodoOnServer,
  removeTodo,
  toggleTodoOnServer,
  toggleTodo,
})(Todo);

export default Todo;
