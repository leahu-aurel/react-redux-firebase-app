import { SHOW_COMPLETED, SHOW_LEFT } from "../redux/actions/actions";

export default (todos, filter) => {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case SHOW_LEFT:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};
