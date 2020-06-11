import React, { Component } from "react";
import { v4 } from "uuid";

import Todo from "./Todo";

const todosStyle = {
  textAlign: "center",
  paddingTop: "16px",
  fontSize: "2em",
  fontWeight: "bold",
};

export default class Todos extends Component {
  state = {
    todos: [],
    value: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const text = this.state.value;
    this.setState((prevState) => ({
      todos: [...prevState.todos, { text, id: v4(), completed: false }],
      value: "",
    }));
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleTodoChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  render() {
    const { todos } = this.state;
    return (
      <div style={todosStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add a new todo:
            <br />
            <input value={this.state.value} onChange={this.handleChange} />
            <br />
          </label>
          <button>Add</button>
        </form>
        <ul>
          {todos ? (
            todos.map((todo) => (
              <Todo key={todo.id} {...todo} onChange={this.handleTodoChange} />
            ))
          ) : (
            <li>No todos yet</li>
          )}
        </ul>
      </div>
    );
  }
}
