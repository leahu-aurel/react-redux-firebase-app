import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import "./css/todos.css";

let Todos = ({ todos }) => {
  return (
    <>
      <AddTodoForm />
      <ul className="todosContainer">
        {todos.length
          ? todos.map((todo) => <Todo key={todo.id} {...todo} />)
          : null}
      </ul>
    </>
  );
};
Todos = connect((state) => state)(Todos);

export default Todos;
