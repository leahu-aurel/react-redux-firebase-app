import { createStore, combineReducers } from "redux";

import todos from "./reducers/todosReducer";
import visibilityFilter from "./reducers/visibilityFilterReducer";

const mainReducer = combineReducers({ todos, visibilityFilter });

const store = createStore(mainReducer);

export default store;
