import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { addTodoOnServer } from "../../redux/actions/actionCreators";
import "./add_todo.css";

export default () => {
  let input = useRef();
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    const trimmedInput = input.current.value.trim();
    trimmedInput && dispatch(addTodoOnServer(input.current.value));
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
