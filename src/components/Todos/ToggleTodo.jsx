import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoOnServer } from "../../redux/actions/actionCreators";

export default ({ id, completed }) => {
  const dispatch = useDispatch();

  const toggleHandle = () => {
    dispatch(toggleTodoOnServer(id, completed));
  };

  return <input type="checkbox" checked={completed} onChange={toggleHandle} />;
};
