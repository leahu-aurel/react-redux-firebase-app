import { SHOW_ALL, SHOW_COMPLETED, SHOW_LEFT } from "../redux/actions/actions";

export default ({ todos, visibilityFilter }) => {
  switch (visibilityFilter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case SHOW_LEFT:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};
