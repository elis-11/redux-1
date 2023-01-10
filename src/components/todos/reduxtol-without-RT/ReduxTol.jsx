import React, { useState } from "react";
import "../Todos.scss";
import { InputField } from "./InputField";
import { List } from "./List";

export const ReduxTol = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");

  const addItem = () => {
    setItems([
      ...items,
      {
        id: new Date().toString(),
        title,
        completed: false,
      },
    ]);
    setTitle("");
  };

  const toggleCompleted = (itemId) => {
    setItems(
      items.map((item) => {
        if (item.id !== itemId) return item;
        return {
          ...item,
          completed: !item.completed,
        };
      })
    );
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div className="Todo">
      <h2>Redux-Toolkit</h2>
      <InputField title={title} handleInput={setTitle} handleSubmit={addItem} />
      <List
        items={items}
        toggleCompleted={toggleCompleted}
        removeItem={removeItem}
      />
    </div>
  );
};
