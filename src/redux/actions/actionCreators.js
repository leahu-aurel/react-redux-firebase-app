import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SIGN_IN,
  SIGN_OUT,
  SET_TODOS,
} from "./actions";

import { v4 } from "uuid";
import { db } from "../../base";

export const addTodo = (todo) => {
  if (typeof todo === "string") {
    todo = {
      text: todo,
      id: v4(),
      completed: false,
    };
  }
  console.log(todo);
  return {
    type: ADD_TODO,
    todo,
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  todos,
});

export const fetchTodos = (user) => {
  return (dispatch) => {
    const userCollection = db
      .collection("users")
      .doc(user.uid)
      .collection("todos");
    userCollection.get().then((info) => {
      const todos = info.docs.map((doc) => doc.data());
      return dispatch(setTodos(todos));
    });
  };
};

export const addTodoOnServer = (text, user) => {
  const todo = {
    text,
    id: v4(),
    completed: false,
  };
  if (user) {
    return (dispatch) => {
      const userCollection = db
        .collection("users")
        .doc(user.uid)
        .collection("todos");
      userCollection
        .doc(todo.id)
        .set(todo)
        .then(() => dispatch(addTodo(todo)));
    };
  } else {
    addTodo(todo);
  }
};

export const removeTodoOnServer = (userId, todoId) => {
  return (dispatch) => {
    const userCollection = db
      .collection("users")
      .doc(userId)
      .collection("todos");
    userCollection
      .doc(todoId)
      .delete()
      .then(() => dispatch(removeTodo(todoId)));
  };
};

export const toggleTodoOnServer = (userId, todoId, completed) => {
  return (dispatch) => {
    console.log(userId);
    console.log(todoId);
    console.log(completed);
    const userCollection = db
      .collection("users")
      .doc(userId)
      .collection("todos");
    userCollection
      .doc(todoId)
      .update({ completed: !completed })
      .then(() => dispatch(toggleTodo(todoId)));
  };
};

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const signOut = () => {
  const signOutAction = {
    type: SIGN_OUT,
  };
  return (dispatch) => {
    dispatch(signOutAction);
    dispatch(setTodos({}));
  };
};
