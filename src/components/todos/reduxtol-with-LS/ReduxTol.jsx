import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/slices/todos/reduxTolSlice";
import "../Todos.scss";
import { InputField } from "./InputField";
import { List } from "./List";

export const ReduxTol = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addItem({ title }));
    setTitle("");
  };

  const toggleCompleted = (itemId) => {};

  return (
    <div className="Todo">
      <h2>Redux-Toolkit</h2>
      <InputField title={title} handleInput={setTitle} handleSubmit={addTask} />
      <List />
    </div>
  );
};
