import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SIGN_IN,
  SIGN_OUT,
  SET_TODOS,
  EDIT_TODO,
} from "./actions";
import { v4 } from "uuid";
import { db } from "../../base";
const user = JSON.parse(localStorage.getItem("isSignedIn"));
const getTodoCollections = (userId) => {
  return db.collection("users").doc(userId).collection("todos");
};
const addTodo = (todo) => ({ type: ADD_TODO, todo });

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  todos,
});
export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text,
});

export const fetchTodos = () => {
  if (user) {
    return (dispatch) => {
      const userCollection = db
        .collection("users")
        .doc(user.uid)
        .collection("todos");
      userCollection.get().then((info) => {
        const todos = info.docs.map((doc) => doc.data());
        return dispatch(setTodos(todos));
      });
    };
  } else {
    return setTodos([]);
  }
};

export const addTodoOnServer = (text) => {
  const todo = {
    text,
    id: v4(),
    completed: false,
  };
  if (user) {
    return (dispatch) => {
      const userCollection = getTodoCollections(user.uid);
      userCollection
        .doc(todo.id)
        .set(todo)
        .then(() => {
          return dispatch(addTodo(todo));
        });
    };
  } else {
    return addTodo(todo);
  }
};

export const removeTodoOnServer = (todoId) => {
  if (user) {
    return (dispatch) => {
      const userCollection = getTodoCollections(user.uid);
      userCollection
        .doc(todoId)
        .delete()
        .then(() => dispatch(removeTodo(todoId)));
    };
  } else {
    return removeTodo(todoId);
  }
};

export const toggleTodoOnServer = (id, completed) => {
  if (user) {
    return (dispatch) => {
      const userCollection = getTodoCollections(user.uid);
      userCollection
        .doc(id)
        .update({ completed: !completed })
        .then(() => dispatch(toggleTodo(id)));
    };
  } else {
    return toggleTodo(id);
  }
};

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const editTodoOnServer = (id, text) => {
  if (user) {
    return (dispatch) => {
      const userCollection = getTodoCollections(user.uid);
      userCollection
        .doc(id)
        .update({ text })
        .then(() => dispatch(editTodo(id, text)));
    };
  } else {
    return editTodo(id, text);
  }
};

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const signOut = () => {
  const signOutAction = {
    type: SIGN_OUT,
  };
  return (dispatch) => {
    dispatch(signOutAction);
    dispatch(setTodos([]));
  };
};
