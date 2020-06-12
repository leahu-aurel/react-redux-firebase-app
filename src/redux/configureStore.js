import { createStore, combineReducers } from "redux";

import todos from "./reducers/todosReducer";

const appReducer = combineReducers({ todos });

const store = createStore(appReducer);

export default store;
