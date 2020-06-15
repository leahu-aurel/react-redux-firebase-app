import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import VisibilityFilter from "../Filter/VisibilityFilter";
import "./todos.css";
import getVisibleTodos from "../../utils/getVisibleTodos";

let Todos = ({ todos, user, filter }) => {
  console.log(todos);
  return (
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
      <VisibilityFilter filter={filter} />
    </>
  );
};

Todos = withRouter(
  connect(({ todos, user }, { location }) => {
    const { pathname: filter } = location;
    return {
      filter,
      todos: getVisibleTodos(todos, filter),
      user,
    };
  })(Todos)
);

export default Todos;
