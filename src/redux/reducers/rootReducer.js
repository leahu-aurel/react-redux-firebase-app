import { combineReducers } from "redux";

import todos from "./todosReducer";
import visibilityFilter from "./visibilityFilterReducer";
import user from "./userReducer";

export const rootReducer = combineReducers({ todos, visibilityFilter, user });
