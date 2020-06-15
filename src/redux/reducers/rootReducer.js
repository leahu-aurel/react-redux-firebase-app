import { combineReducers } from "redux";

import todos from "./todosReducer";
import user from "./userReducer";

export const rootReducer = combineReducers({ todos, user });
