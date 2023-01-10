import React, { useState } from "react";
import '../Todos.scss'

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
      <label className="todort">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </label>
      <div className="todos">
        {items.map((item) => (
          <div key={item.id} className="todo">
            <input type="checkbox" checked={item.completed} onChange={()=>toggleCompleted(item.id)} />
            <span className="title">{item.title}</span>
            <span
              onClick={() => removeItem(item.id)}
              style={{ color: "red", cursor: "pointer" }}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
