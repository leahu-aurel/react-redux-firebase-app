import React from "react";
import { useDispatch } from "react-redux";
import { removeTodoOnServer } from "../../redux/actions/actionCreators";

export default ({ id }) => {
  const dispatch = useDispatch();
  const removeHandle = () => {
    dispatch(removeTodoOnServer(id));
  };

  return (
    <span className="removeButton" onClick={removeHandle}>
      x
    </span>
  );
};
