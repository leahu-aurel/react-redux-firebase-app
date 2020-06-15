import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_TODOS,
  EDIT_TODO,
} from "../actions/actions";

export default (state = [], { todos, type, text, id, todo }) => {
  switch (type) {
    case SET_TODOS:
      return todos;
    case ADD_TODO:
      console.log(state);
      return [todo, ...state];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== id);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      });
    default:
      return state;
  }
};
