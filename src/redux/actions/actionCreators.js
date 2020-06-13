import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SIGN_IN,
  SIGN_OUT,
  SET_TODOS,
} from "./actions";

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});
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

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
