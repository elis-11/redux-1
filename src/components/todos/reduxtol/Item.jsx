import React from "react";

export const Item = ({ id, title, completed, toggleCompleted, removeItem }) => {
  return (
    <div key={id} className="todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <span className="title">{title}</span>
      <span
        onClick={() => removeItem(id)}
        style={{ color: "red", cursor: "pointer" }}
      >
        &times;
      </span>
    </div>
  );
};
