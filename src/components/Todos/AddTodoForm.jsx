import React from "react";
import { connect } from "react-redux";

import { addTodoOnServer } from "../../redux/actions/actionCreators";
import "./add_todo.css";

let AddTodoForm = ({ addTodoOnServer, user }) => {
  let input = React.createRef();

  const submitHandle = (e) => {
    e.preventDefault();
    input.current.value.trim() &&
      addTodoOnServer(input.current.value, user.uid);
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
