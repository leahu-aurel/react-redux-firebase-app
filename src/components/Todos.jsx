import React, { Component } from "react";
import { v4 } from "uuid";

import Todo from "./Todo";
import "./css/todos.css";

export default class Todos extends Component {
  state = {
    todos: [],
    value: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const text = this.state.value;
    if (!text) return;
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

  handleTodoOnClick = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <form className="addTodoContainer" onSubmit={this.handleSubmit}>
          <label>
            Add a new todo:
            <br />
            <input value={this.state.value} onChange={this.handleChange} />
            <br />
          </label>
          <button>Add</button>
        </form>
        <ul className="todosContainer">
          {todos.length
            ? todos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onChange={this.handleTodoChange}
                  onClick={this.handleTodoOnClick}
                />
              ))
            : null}
        </ul>
      </>
    );
  }
}
