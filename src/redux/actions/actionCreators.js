import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
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

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
