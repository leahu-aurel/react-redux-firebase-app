import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import VisibilityFilter from "../Filter/VisibilityFilter";
import "./todos.css";
import getVisibleTodos from "../../utils/getVisibleTodos";

let Todos = ({ todos, user }) => (
  <>
    {!user && (
      <p className="unauthorized">
        {" "}
        You have to be{" "}
        <Link to="/sign_in" className="linkToSignIn">
          authorized
        </Link>{" "}
        if you want your todos saved to the server
      </p>
    )}
    <AddTodoForm />
    <ul className="todosContainer">
      {todos.length
        ? todos.map((todo) => <Todo key={todo.id} {...todo} />)
        : null}
    </ul>
    <VisibilityFilter />
  </>
);

Todos = connect((state) => ({
  todos: getVisibleTodos(state),
  user: state.user,
}))(Todos);

export default Todos;
