import { createStore, combineReducers } from "redux";

import todos from "./reducers/todosReducer";
import visibilityFilter from "./reducers/visibilityFilterReducer";
import user from "./reducers/userReducer";

export const mainReducer = combineReducers({ todos, visibilityFilter, user });

const store = createStore(mainReducer);

export default store;
