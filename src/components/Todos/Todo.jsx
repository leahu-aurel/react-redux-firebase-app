import React from "react";
import { removeTodo, toggleTodo } from "../../redux/actions/actionCreators";
import { connect } from "react-redux";

let Todo = ({ text, completed, id, removeTodo, toggleTodo }) => (
  <>
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <span className="closeButton" onClick={() => removeTodo(id)}>
        x
      </span>
    </li>
  </>
);

Todo = connect((state) => state, { removeTodo, toggleTodo })(Todo);

export default Todo;
