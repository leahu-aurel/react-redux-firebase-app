import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import ContentEditable from "react-contenteditable";
import { editTodoOnServer } from "../../redux/actions/actionCreators";

export default ({ text, id, completed }) => {
  const textRef = useRef(text);
  const dispatch = useDispatch();

  const handleTodoChange = (e) => {
    textRef.current = e.target.value;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const handleBlur = () => {
    dispatch(editTodoOnServer(id, textRef.current));
  };

  return (
    <ContentEditable
      html={textRef.current}
      tagName="span"
      onChange={handleTodoChange}
      onKeyDown={handleKeyPress}
      onBlur={handleBlur}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    />
  );
};
