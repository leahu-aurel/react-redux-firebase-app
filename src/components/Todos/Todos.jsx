import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import VisibilityFilter from "../Filter/VisibilityFilter";
import "./todos.css";
import getVisibleTodos from "../../utils/getVisibleTodos";

let Todos = ({ todos }) => {
  return (
    <>
      <AddTodoForm />
      <ul className="todosContainer">
        {todos.length
          ? todos.map((todo) => <Todo key={todo.id} {...todo} />)
          : null}
      </ul>
      <VisibilityFilter />
    </>
  );
};
Todos = connect((state) => getVisibleTodos(state))(Todos);

export default Todos;
