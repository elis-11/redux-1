import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, toggleCompleted } from "../../../redux/slices/todos/reduxTolSlice";

export const Item = ({ id, title, completed }) => {
const dispatch = useDispatch()


  return (
    <div key={id} className="todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleCompleted({id}))}
      />
      <span className="title">{title}</span>
      <span
        onClick={() => dispatch(removeItem({id}))}
        style={{ color: "red", cursor: "pointer" }}
      >
        &times;
      </span>
    </div>
  );
};
