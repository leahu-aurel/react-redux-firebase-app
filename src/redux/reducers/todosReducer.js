import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_TODOS,
} from "../actions/actions";

export default (state = [], { type, text, id, todos }) => {
  switch (type) {
    case SET_TODOS:
      console.log(todos);
      return todos;
    case ADD_TODO:
      return [...state, { text, id: id, completed: false }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== id);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};
