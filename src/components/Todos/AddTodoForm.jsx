import React from "react";
import { connect } from "react-redux";

import { addTodoOnServer, addTodo } from "../../redux/actions/actionCreators";
import "./add_todo.css";

let AddTodoForm = ({ addTodoOnServer, addTodo, user }) => {
  let input = React.createRef();

  const submitHandle = (e) => {
    e.preventDefault();
    const trimmedInput = input.current.value.trim();
    if (trimmedInput) {
      user
        ? addTodoOnServer(input.current.value, user)
        : addTodo(input.current.value);
    }
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
AddTodoForm = connect(({ user }) => ({ user }), { addTodoOnServer, addTodo })(
  AddTodoForm
);

export default AddTodoForm;
