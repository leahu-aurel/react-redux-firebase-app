import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_TODOS,
  EDIT_TODO,
  SIGN_IN,
  SIGN_OUT,
} from "./actions";

export const addTodo = (todo) => ({ type: ADD_TODO, todo });

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

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text,
});

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
