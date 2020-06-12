import { v4 } from "uuid";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/actions";
export default (state = [], { type, text, id }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, { text, id: v4(), completed: false }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
