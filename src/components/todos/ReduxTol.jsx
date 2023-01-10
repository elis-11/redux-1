import React, { useState } from "react";

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

  return (
    <div className="rt">
      <h2>Redux-Toolkit</h2>
      <label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addItem}>Add</button>
      </label>
      <div className="items">
        {items.map(item => (
          <div key={item.id} className="item">
            <input type="checkbox" />
            <span>{item.title}</span>
            <span style={{color: 'red'}}>&times;</span>
            
          </div>
        ))}
      </div>
    </div>
  );
};
