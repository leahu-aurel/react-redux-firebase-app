import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../../redux/actions/actionCreators";
import "./add_todo.css";

let AddTodoForm = ({ addTodo }) => {
  let input = React.createRef();

  const submitHandle = (e) => {
    e.preventDefault();
    input.current.value.trim() && addTodo(input.current.value);
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
AddTodoForm = connect(null, { addTodo })(AddTodoForm);

export default AddTodoForm;
