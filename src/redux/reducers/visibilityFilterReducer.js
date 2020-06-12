import { SET_VISIBILITY_FILTER, SHOW_ALL } from "../actions/actions";

export default (state = SHOW_ALL, { type, filter }) => {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return filter;
    default:
      return state;
  }
};
