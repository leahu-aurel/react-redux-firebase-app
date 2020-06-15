import React, { useRef } from "react";
import { connect } from "react-redux";

import { addTodoOnServer } from "../../redux/actions/actionCreators";
import "./add_todo.css";

let AddTodoForm = ({ addTodoOnServer, user }) => {
  let input = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    const trimmedInput = input.current.value.trim();
    trimmedInput && addTodoOnServer(input.current.value, user);
    input.current.value = "";
  };

  return (
    <form className="addTodoContainer" onSubmit={submitHandle}>
      <label>
        Add a new todo:
        <br />
        <input className="addTodoInput" ref={input} />
        <br />
      </label>
      <button className="addTodoButton">Add</button>
    </form>
  );
};
AddTodoForm = connect(({ user }) => ({ user }), { addTodoOnServer })(
  AddTodoForm
);

export default AddTodoForm;
