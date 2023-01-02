import React, { useRef, useState } from "react";
import "./Todos.scss";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const inputRef = useRef();

  const createTodo = () => {
    const addTodo = {
      // _id: Math.random().toString(36).substring(2, 10),
      _id: new Date().toString(),
      title: newTodo.title,
      description: newTodo.description,
    };
    setTodos([...todos, addTodo]);
    setNewTodo({ ...newTodo, title: "", description: "" });
    inputRef.current.focus();
  };

  return (
    <div className="Todo">
      <h2>Todo</h2>
      <div className="add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => {
            setNewTodo({ ...newTodo, title: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTodo.description}
          onChange={(e) => {
            setNewTodo({ ...newTodo, description: e.target.value });
          }}
        />
        <button onClick={createTodo}>Add</button>
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <div key={todo._id} className="todo">
            <div className="title">{todo.title}</div>
            <div className="description">{todo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
