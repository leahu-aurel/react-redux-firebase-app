import {
  addTodo,
  setTodos,
  editTodo,
  removeTodo,
  toggleTodo,
  signOut,
} from "./syncActionCreators";
import { v4 } from "uuid";
import firebase, { db } from "../../base";

const getTodoCollections = (userId) => {
  return db.collection("users").doc(userId).collection("todos");
};

export const fetchTodos = () => {
  return (dispatch, getState) => {
    const { user } = getState();
    if (user) {
      const userCollection = db
        .collection("users")
        .doc(user.uid)
        .collection("todos");
      userCollection.get().then((info) => {
        const todos = info.docs.map((doc) => doc.data());
        return dispatch(setTodos(todos));
      });
    } else {
      return dispatch(setTodos([]));
    }
  };
};

export const addTodoOnServer = (text) => {
  const todo = {
    text,
    id: v4(),
    completed: false,
  };
  return (dispatch, getState) => {
    const { user } = getState();
    if (user) {
      const userCollection = getTodoCollections(user.uid);
      userCollection
        .doc(todo.id)
        .set(todo)
        .then(() => {
          return dispatch(addTodo(todo));
        });
    } else {
      return dispatch(addTodo(todo));
    }
  };
};

export const removeTodoOnServer = (todoId) => {
  return (dispatch, getState) => {
    const { user } = getState();
    if (user) {
      const userCollection = getTodoCollections(user.uid);
      userCollection
        .doc(todoId)
        .delete()
        .then(() => dispatch(removeTodo(todoId)));
    } else {
      return dispatch(removeTodo(todoId));
    }
  };
};

export const toggleTodoOnServer = (id, completed) => {
  return (dispatch, getState) => {
    const { user } = getState();
    if (user) {
      const userCollection = getTodoCollections(user.uid);
      userCollection
        .doc(id)
        .update({ completed: !completed })
        .then(() => dispatch(toggleTodo(id)));
    } else {
      return dispatch(toggleTodo(id));
    }
  };
};

export const editTodoOnServer = (id, text) => {
  return (dispatch, getState) => {
    const { user } = getState();
    if (user) {
      const userCollection = getTodoCollections(user.uid);
      userCollection
        .doc(id)
        .update({ text })
        .then(() => dispatch(editTodo(id, text)));
    } else {
      return dispatch(editTodo(id, text));
    }
  };
};

export const signOutOnServer = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signOut());
        dispatch(setTodos([]));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
